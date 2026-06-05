import { getCart, removeFromCart, updateCartQuantity, getCartTotals } from '../js/store.js';
import { getWishlist } from '../js/store.js';
import { getCurrentUser, logoutCustomer } from '../js/auth.js';
import { formatCurrency } from '../js/utils.js';
import { trackEvent, formatCartItemsToTracking } from '../js/tracking.js';

class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupListeners();
    this.updateCartCount();
    this.updateWishlistCount();
    this.updateAuthStatus();
  }

  render() {
    const user = getCurrentUser();
    
    this.innerHTML = `
      <div class="header-container">
        <div class="container header-inner">
          <a href="index.html" class="logo">AURA<span>WEAR</span></a>
          
          <ul class="nav-menu">
            <li><a href="index.html" class="nav-link" id="nav-home">Home</a></li>
            <li><a href="shop.html" class="nav-link" id="nav-shop">Shop</a></li>
            <li><a href="about.html" class="nav-link" id="nav-about">About</a></li>
            <li><a href="contact.html" class="nav-link" id="nav-contact">Contact</a></li>
            <li><a href="faq.html" class="nav-link" id="nav-faq">FAQs</a></li>
          </ul>
          
          <div class="header-actions">
            <button class="action-btn" id="search-trigger" title="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            <a href="wishlist.html" class="action-btn" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span class="badge-count" id="wishlist-badge" style="display:none;">0</span>
            </a>
            
            <button class="action-btn" id="cart-trigger" title="Shopping Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span class="badge-count" id="cart-badge" style="display:none;">0</span>
            </button>
            
            <span class="flex align-center gap-xs" id="auth-actions-wrap">
              <!-- Auth actions are loaded dynamically -->
            </span>
          </div>
        </div>
      </div>

      <!-- Search Overlay Modal -->
      <div id="search-modal" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.9); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); z-index:2000; opacity:0; pointer-events:none; transition:var(--transition-normal); display:flex; align-items:center; justify-content:center;">
        <div id="search-modal-close" style="position:absolute; top:24px; right:24px; color:var(--text-secondary); cursor:pointer; font-size:2rem; transition:var(--transition-fast);">&times;</div>
        <div class="container" style="max-width:600px; text-align:center;">
          <h3 style="font-size:1.8rem; margin-bottom:var(--spacing-md); text-transform:uppercase; letter-spacing:0.05em; color:var(--accent-gold);">Search Products</h3>
          <form id="search-form" style="display:flex; border-bottom:2px solid var(--accent-gold); padding:0.5rem 0;">
            <input type="text" id="search-input" placeholder="Type here..." autocomplete="off" style="width:100%; font-size:1.5rem; color:#fff; background:none; border:none; outline:none; text-align:center;">
            <button type="submit" style="color:var(--accent-gold); cursor:pointer; padding:0 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Slide-out Cart Drawer -->
      <div class="cart-drawer-overlay" id="cart-overlay">
        <div class="cart-drawer" id="cart-drawer-panel">
          <div class="cart-drawer-header">
            <span class="cart-drawer-title">Shopping Cart (<span id="cart-drawer-badge">0</span>)</span>
            <span class="cart-drawer-close" id="cart-drawer-close-btn">&times;</span>
          </div>
          
          <div class="cart-drawer-items" id="cart-drawer-items-list">
            <!-- Dynamic Cart Items Rendered Here -->
          </div>
          
          <div class="cart-drawer-footer">
            <div class="cart-subtotal-row">
              <span>Subtotal:</span>
              <span id="cart-drawer-subtotal">$0.00</span>
            </div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:var(--spacing-md); text-align:center;">Shipping & taxes calculated at checkout.</p>
            <div class="flex flex-col gap-sm">
              <a href="cart.html" class="btn btn-secondary text-center" style="width:100%;">View Cart</a>
              <a href="checkout.html" class="btn btn-primary text-center" id="drawer-checkout-btn" style="width:100%;">Proceed to Checkout</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Highlight active nav link
    const path = window.location.pathname;
    const page = path.split("/").pop();
    if (page === "index.html" || page === "") {
      this.querySelector("#nav-home")?.classList.add("active");
    } else if (page === "shop.html") {
      this.querySelector("#nav-shop")?.classList.add("active");
    } else if (page === "about.html") {
      this.querySelector("#nav-about")?.classList.add("active");
    } else if (page === "contact.html") {
      this.querySelector("#nav-contact")?.classList.add("active");
    } else if (page === "faq.html") {
      this.querySelector("#nav-faq")?.classList.add("active");
    }
  }

  setupListeners() {
    const searchTrigger = this.querySelector('#search-trigger');
    const searchModal = this.querySelector('#search-modal');
    const searchClose = this.querySelector('#search-modal-close');
    const searchForm = this.querySelector('#search-form');
    const searchInput = this.querySelector('#search-input');

    const cartTrigger = this.querySelector('#cart-trigger');
    const cartOverlay = this.querySelector('#cart-overlay');
    const cartClose = this.querySelector('#cart-drawer-close-btn');

    // Search Toggle
    searchTrigger.addEventListener('click', () => {
      searchModal.style.opacity = '1';
      searchModal.style.pointerEvents = 'auto';
      searchInput.focus();
    });

    searchClose.addEventListener('click', () => {
      searchModal.style.opacity = '0';
      searchModal.style.pointerEvents = 'none';
    });

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        // Track Search Event in dataLayer
        trackEvent('search', { search_term: query });
        window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
      }
    });

    // Cart Drawer Toggle
    cartTrigger.addEventListener('click', () => {
      this.openCartDrawer();
    });

    cartClose.addEventListener('click', () => {
      this.closeCartDrawer();
    });

    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        this.closeCartDrawer();
      }
    });

    // State listeners
    window.addEventListener('cart-updated', () => {
      this.updateCartCount();
      this.renderCartDrawerItems();
    });

    window.addEventListener('wishlist-updated', () => {
      this.updateWishlistCount();
    });

    window.addEventListener('auth-changed', () => {
      this.updateAuthStatus();
    });
  }

  openCartDrawer() {
    const cartOverlay = this.querySelector('#cart-overlay');
    cartOverlay.classList.add('active');
    this.renderCartDrawerItems();
    
    // Track view_cart event when drawer opens
    const cart = getCart();
    if (cart.length > 0) {
      const totals = getCartTotals();
      trackEvent('view_cart', {
        currency: 'USD',
        value: totals.subtotal,
        items: formatCartItemsToTracking(cart)
      });
    }
  }

  closeCartDrawer() {
    const cartOverlay = this.querySelector('#cart-overlay');
    cartOverlay.classList.remove('active');
  }

  updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = this.querySelector('#cart-badge');
    const drawerBadge = this.querySelector('#cart-drawer-badge');

    if (badge) {
      if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }
    if (drawerBadge) drawerBadge.textContent = count;
  }

  updateWishlistCount() {
    const wishlist = getWishlist();
    const badge = this.querySelector('#wishlist-badge');
    if (badge) {
      if (wishlist.length > 0) {
        badge.textContent = wishlist.length;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  updateAuthStatus() {
    const wrap = this.querySelector('#auth-actions-wrap');
    if (!wrap) return;

    const user = getCurrentUser();
    if (user) {
      wrap.innerHTML = `
        <a href="dashboard.html" class="action-btn" title="Account Dashboard" style="font-size:0.8rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:4px; color:var(--accent-gold);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
          </svg>
          ${user.customer_first_name || 'Account'}
        </a>
        <button class="action-btn" id="logout-trigger" title="Log Out" style="color:var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      `;

      wrap.querySelector('#logout-trigger').addEventListener('click', () => {
        logoutCustomer();
        trackEvent('logout');
        window.location.href = 'index.html';
      });
    } else {
      wrap.innerHTML = `
        <a href="login.html" class="action-btn" title="Log In" style="font-size:0.8rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:4px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
          </svg>
          Login
        </a>
      `;
    }
  }

  renderCartDrawerItems() {
    const list = this.querySelector('#cart-drawer-items-list');
    const subtotalLabel = this.querySelector('#cart-drawer-subtotal');
    const checkoutBtn = this.querySelector('#drawer-checkout-btn');
    if (!list) return;

    const cart = getCart();
    const totals = getCartTotals();

    if (subtotalLabel) subtotalLabel.textContent = formatCurrency(totals.subtotal);

    if (cart.length === 0) {
      list.innerHTML = `
        <div class="cart-drawer-empty">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-muted);">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>Your shopping cart is empty.</p>
          <a href="shop.html" class="btn btn-primary" style="margin-top:var(--spacing-sm);">Shop New Arrivals</a>
        </div>
      `;
      if (checkoutBtn) checkoutBtn.style.pointerEvents = 'none';
      return;
    }

    if (checkoutBtn) checkoutBtn.style.pointerEvents = 'auto';

    list.innerHTML = cart.map(item => `
      <div class="drawer-item" data-id="${item.id}" data-color="${item.color}" data-size="${item.size}">
        <img class="drawer-item-img" src="${item.image}" alt="${item.title}">
        
        <div class="drawer-item-info">
          <div class="drawer-item-name">${item.title}</div>
          <div class="drawer-item-meta">${item.color} / ${item.size}</div>
          
          <div class="drawer-item-qty-price">
            <div class="qty-control">
              <span class="qty-btn dec-qty">&minus;</span>
              <span class="qty-val">${item.quantity}</span>
              <span class="qty-btn inc-qty">&plus;</span>
            </div>
            <span style="font-weight:600;">${formatCurrency(item.price * item.quantity)}</span>
          </div>
        </div>
        
        <div class="drawer-item-remove remove-item-btn">&times;</div>
      </div>
    `).join('');

    // Setup Drawer items interactions
    this.querySelectorAll('.drawer-item').forEach(el => {
      const id = parseInt(el.getAttribute('data-id'));
      const color = el.getAttribute('data-color');
      const size = el.getAttribute('data-size');
      const currentItem = cart.find(i => i.id === id && i.color === color && i.size === size);

      el.querySelector('.dec-qty').addEventListener('click', () => {
        const res = updateCartQuantity(id, color, size, currentItem.quantity - 1);
        if (res && res.removed) {
          trackEvent('remove_from_cart', {
            currency: 'USD',
            value: res.item.price,
            items: formatCartItemsToTracking([res.item])
          });
        }
      });

      el.querySelector('.inc-qty').addEventListener('click', () => {
        updateCartQuantity(id, color, size, currentItem.quantity + 1);
        // Track add_to_cart for increment
        trackEvent('add_to_cart', {
          currency: 'USD',
          value: currentItem.price,
          items: formatCartItemsToTracking([{ ...currentItem, quantity: 1 }])
        });
      });

      el.querySelector('.remove-item-btn').addEventListener('click', () => {
        const res = removeFromCart(id, color, size);
        if (res) {
          trackEvent('remove_from_cart', {
            currency: 'USD',
            value: res.item.price * res.item.quantity,
            items: formatCartItemsToTracking([res.item])
          });
        }
      });
    });
  }
}

customElements.define('app-header', AppHeader);
export default AppHeader;
