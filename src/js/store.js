import { getProductById } from './products.js';

const CART_KEY = 'fashion_cart';
const WISHLIST_KEY = 'fashion_wishlist';
const COUPON_KEY = 'fashion_coupon';
const RECENT_KEY = 'fashion_recently_viewed';

// Valid Coupon Codes
export const COUPONS = {
  'WELCOME20': { type: 'percent', value: 20 },
  'FASHION10': { type: 'percent', value: 10 },
  'SAVESHIP': { type: 'shipping', value: 0 } // Free shipping
};

export function getCart() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
}

export function getWishlist() {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveWishlist(wishlist) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  window.dispatchEvent(new CustomEvent('wishlist-updated', { detail: wishlist }));
}

export function getAppliedCoupon() {
  return localStorage.getItem(COUPON_KEY) || null;
}

export function applyCoupon(code) {
  const cleanCode = code ? code.trim().toUpperCase() : null;
  if (!cleanCode) {
    localStorage.removeItem(COUPON_KEY);
    window.dispatchEvent(new CustomEvent('coupon-updated', { detail: null }));
    return { success: true, message: "Coupon removed" };
  }
  
  if (COUPONS[cleanCode]) {
    localStorage.setItem(COUPON_KEY, cleanCode);
    window.dispatchEvent(new CustomEvent('coupon-updated', { detail: cleanCode }));
    return { success: true, message: `Coupon ${cleanCode} applied!`, discount: COUPONS[cleanCode] };
  }
  
  return { success: false, message: "Invalid coupon code" };
}

export function getRecentlyViewed() {
  const data = localStorage.getItem(RECENT_KEY);
  return data ? JSON.parse(data) : [];
}

export function addRecentlyViewed(id) {
  let list = getRecentlyViewed();
  list = list.filter(item => item !== id);
  list.unshift(id);
  list = list.slice(0, 5); // Limit to last 5
  localStorage.setItem(RECENT_KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent('recently-viewed-updated', { detail: list }));
}

export function addToCart(id, qty = 1, color = null, size = null) {
  const product = getProductById(id);
  if (!product) return null;
  
  // Set default variants if not specified
  const selectedColor = color || (product.variants.colors[0] ? product.variants.colors[0].name : 'Default');
  const selectedSize = size || (product.variants.sizes[0] || 'One Size');
  
  let cart = getCart();
  const existingIdx = cart.findIndex(item => 
    item.id === id && item.color === selectedColor && item.size === selectedSize
  );
  
  const price = product.salePrice || product.price;
  
  if (existingIdx > -1) {
    cart[existingIdx].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: price,
      originalPrice: product.price,
      sku: product.sku,
      image: product.images[0],
      category: product.category,
      category2: product.category2,
      category3: product.category3,
      color: selectedColor,
      size: selectedSize,
      quantity: qty
    });
  }
  
  saveCart(cart);
  return { id, title: product.title, price, quantity: qty, color: selectedColor, size: selectedSize, category: product.category };
}

export function updateCartQuantity(id, color, size, qty) {
  let cart = getCart();
  const idx = cart.findIndex(item => 
    item.id === id && item.color === color && item.size === size
  );
  
  if (idx > -1) {
    if (qty <= 0) {
      const removedItem = cart[idx];
      cart.splice(idx, 1);
      saveCart(cart);
      return { removed: true, item: removedItem };
    } else {
      cart[idx].quantity = qty;
      saveCart(cart);
      return { removed: false, item: cart[idx] };
    }
  }
  return null;
}

export function removeFromCart(id, color, size) {
  return updateCartQuantity(id, color, size, 0);
}

export function toggleWishlist(id) {
  let wishlist = getWishlist();
  const idx = wishlist.indexOf(id);
  let added = false;
  
  if (idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(id);
    added = true;
  }
  
  saveWishlist(wishlist);
  return added;
}

export function isInWishlist(id) {
  return getWishlist().includes(id);
}

export function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discount = 0;
  const coupon = getAppliedCoupon();
  let isFreeShipping = false;
  
  if (coupon && COUPONS[coupon]) {
    const cp = COUPONS[coupon];
    if (cp.type === 'percent') {
      discount = subtotal * (cp.value / 100);
    } else if (cp.type === 'shipping') {
      isFreeShipping = true;
    }
  }
  
  // Tax = 5% of discounted subtotal
  const taxableIncome = Math.max(0, subtotal - discount);
  const tax = taxableIncome * 0.05;
  
  // Shipping charge: $15 standard, free if over $150 or with coupon
  let shipping = 15;
  if (subtotal === 0 || subtotal - discount >= 150 || isFreeShipping) {
    shipping = 0;
  }
  
  const total = taxableIncome + tax + shipping;
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    discount: parseFloat(discount.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    shipping: parseFloat(shipping.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

export function clearCart() {
  saveCart([]);
  applyCoupon(null);
}
