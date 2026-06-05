import { trackEvent } from '../js/tracking.js';

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupNewsletter();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-logo-wrap">
            <a href="index.html" class="logo" style="margin-bottom: var(--spacing-md);">AURA<span>WEAR</span></a>
            <p>A premium apparel experience curated for the modern minimalist. Structured lines, luxury organic fibers, and responsible design.</p>
            <div class="footer-socials">
              <a href="#" class="social-link" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="social-link" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" class="social-link" title="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM10 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="footer-title">Collections</h4>
            <ul class="footer-links">
              <li><a href="shop.html?category=Women">Women's Apparel</a></li>
              <li><a href="shop.html?category=Men">Men's Capsule</a></li>
              <li><a href="shop.html?category=Accessories">Luxe Accessories</a></li>
              <li><a href="shop.html">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="footer-title">Customer Care</h4>
            <ul class="footer-links">
              <li><a href="faq.html">FAQs</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="about.html">About Our Brand</a></li>
              <li><a href="shipping.html">Shipping Details</a></li>
              <li><a href="refunds.html">Returns & Refunds</a></li>
            </ul>
          </div>
          
          <div class="footer-newsletter">
            <h4 class="footer-title">Newsletter</h4>
            <p>Subscribe to receive 15% off your first order, access to private collections, and weekly editorial drops.</p>
            <form class="newsletter-form" id="footer-newsletter-form">
              <input type="email" class="newsletter-input" id="newsletter-email-input" placeholder="Your Email Address" required autocomplete="email">
              <button type="submit" class="newsletter-btn">Join</button>
            </form>
            <div id="newsletter-success-msg" style="display:none; color:var(--color-success); font-size:0.85rem; margin-top:var(--spacing-sm); font-weight:500;">
              Welcome to Aura Wear! Check your inbox for your 15% code.
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div>&copy; 2026 Aura Wear Apparel Co. All Rights Reserved.</div>
          <div class="footer-bottom-links">
            <a href="privacy.html">Privacy Policy</a>
            <span style="color:var(--text-muted);">|</span>
            <a href="terms.html">Terms & Conditions</a>
          </div>
        </div>
      </div>
    `;
  }

  setupNewsletter() {
    const form = this.querySelector('#footer-newsletter-form');
    const input = this.querySelector('#newsletter-email-input');
    const successMsg = this.querySelector('#newsletter-success-msg');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();
      
      if (email) {
        // Track generate_lead event in Data Layer
        trackEvent('generate_lead', {
          lead_source: 'footer_newsletter',
          email_address: email
        });

        // Track newsletter signup form submit in Data Layer
        trackEvent('contact_form_submit', {
          form_id: 'footer_newsletter_form',
          form_name: 'Footer Newsletter Subscription',
          lead_email: email
        });

        // Hide form and show success message
        form.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';

        // Trigger a visual toast
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: {
            message: 'Successfully subscribed to our newsletter! Code: WELCOME20',
            type: 'success'
          }
        }));
      }
    });
  }
}

customElements.define('app-footer', AppFooter);
export default AppFooter;
