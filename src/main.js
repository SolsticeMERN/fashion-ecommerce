// Import Styles
import './styles/variables.css';
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';

// Import Custom Elements / Components
import './components/header.js';
import './components/footer.js';
import './components/analytics-debugger.js';

// Import Tracking
import { initTracking, trackEvent } from './js/tracking.js';
import { GTM_CONFIG } from '../gtm-config.js';

// Expose global product URL builder for SEO friendly query parameters
window.generateProductUrl = function(id, title) {
  if (!title) return `product.html?id=${id}`;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `product.html?id=${id}&product=${slug}`;
};

// Auto-inject Google Tag Manager (GTM) Container
(function() {
  const localEnabled = localStorage.getItem('tracking_gtm_enabled');
  const localId = localStorage.getItem('tracking_gtm_container_id');
  
  const gtmEnabled = localEnabled !== null ? localEnabled === 'true' : GTM_CONFIG.enabled;
  const gtmId = localId || GTM_CONFIG.containerId;
  
  if (gtmEnabled && gtmId && gtmId.trim().toUpperCase().startsWith('GTM-')) {
    const cleanId = gtmId.trim().toUpperCase();
    console.log(`[Aura Wear Tracking] Auto-injecting GTM Container: ${cleanId}`);
    
    // 1. Inject GTM Head script
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',cleanId);

    // 2. Inject GTM Body noscript on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${cleanId}`;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    });
  }
})();


document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize UTM and Click ID Tracking Cookies
  initTracking();

  // 2. Auto-inject Toast Notification Container
  if (!document.querySelector('.toast-container')) {
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  // 3. Auto-inject Analytics Debugger Widget
  if (!document.querySelector('analytics-debugger')) {
    const debuggerEl = document.createElement('analytics-debugger');
    document.body.appendChild(debuggerEl);
  }

  // 4. Setup Toast Event Listener
  window.addEventListener('show-toast', (e) => {
    const { message, type } = e.detail;
    showToast(message, type);
  });

  // 5. Fire page_view event for GTM/GA4/Meta CAPI
  const path = window.location.pathname;
  const pageName = path.split('/').pop() || 'index.html';
  
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_identifier: pageName.replace('.html', '')
  });
});

// Toast notification display logic
export function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconColor = 'var(--accent-gold)';
  if (type === 'success') iconColor = 'var(--color-success)';
  if (type === 'error') iconColor = 'var(--color-error)';
  if (type === 'warning') iconColor = 'var(--color-warning)';

  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      ${type === 'success' 
        ? '<polyline points="9 11 12 14 22 4"></polyline>' 
        : type === 'error'
          ? '<line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>'
          : '<line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
      }
    </svg>
    <div class="toast-message">${message}</div>
    <span class="toast-close">&times;</span>
  `;

  container.appendChild(toast);

  // Close handler
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });

  // Auto remove after 4.5 seconds
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4500);
}
