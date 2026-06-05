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
