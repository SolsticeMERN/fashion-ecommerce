import { clearTrackingLogs } from '../js/tracking.js';

class AnalyticsDebugger extends HTMLElement {
  constructor() {
    super();
    this.activeTab = 'client'; // client or server
    this.isOpen = false;
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
    this.updateLogs();
  }

  render() {
    this.innerHTML = `
      <div class="analytics-debugger-trigger" id="debugger-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>

      <div class="analytics-debugger-panel" id="debugger-panel">
        <div class="debugger-header">
          <div class="debugger-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-gold);">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            TRACKING LOG CONSOLE
          </div>
          <div class="flex gap-sm align-center">
            <button class="debugger-clear" id="debugger-clear-btn">CLEAR</button>
            <div class="debugger-close" id="debugger-close-btn">&times;</div>
          </div>
        </div>
        
        <div class="debugger-tabs">
          <div class="debugger-tab ${this.activeTab === 'client' ? 'active' : ''}" data-tab="client">
            BROWSER DATA LAYER
          </div>
          <div class="debugger-tab ${this.activeTab === 'server' ? 'active' : ''}" data-tab="server">
            SERVER CONVERSIONS API
          </div>
        </div>
        
        <div class="debugger-console" id="debugger-console-list">
          <!-- Logs go here -->
        </div>
      </div>
    `;
  }

  setupListeners() {
    const trigger = this.querySelector('#debugger-trigger');
    const panel = this.querySelector('#debugger-panel');
    const closeBtn = this.querySelector('#debugger-close-btn');
    const clearBtn = this.querySelector('#debugger-clear-btn');
    const tabs = this.querySelectorAll('.debugger-tab');

    trigger.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      panel.classList.toggle('active', this.isOpen);
      trigger.classList.remove('has-pulse');
      if (this.isOpen) this.updateLogs();
    });

    closeBtn.addEventListener('click', () => {
      this.isOpen = false;
      panel.classList.remove('active');
    });

    clearBtn.addEventListener('click', () => {
      clearTrackingLogs();
      this.updateLogs();
    });

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeTab = tab.getAttribute('data-tab');
        this.updateLogs();
      });
    });

    // Event listener for new tracking events
    window.addEventListener('tracking-event-triggered', (e) => {
      const { type } = e.detail;
      // Pulse trigger if console is closed
      if (!this.isOpen) {
        trigger.classList.add('has-pulse');
      }
      this.updateLogs();
    });

    window.addEventListener('tracking-logs-cleared', () => {
      this.updateLogs();
    });
  }

  updateLogs() {
    const consoleList = this.querySelector('#debugger-console-list');
    if (!consoleList) return;

    if (this.activeTab === 'client') {
      const clientLogs = localStorage.getItem('tracking_client_events')
        ? JSON.parse(localStorage.getItem('tracking_client_events'))
        : [];

      if (clientLogs.length === 0) {
        consoleList.innerHTML = `
          <div class="debugger-console-empty">
            No browser tracking events pushed yet.<br>
            <span style="font-size:0.65rem;color:var(--text-muted);">Events are pushed to window.dataLayer</span>
          </div>
        `;
        return;
      }

      consoleList.innerHTML = clientLogs.map(log => `
        <div class="debugger-item-log">
          <div class="debugger-log-meta">
            <span class="debugger-log-event">${log.eventName}</span>
            <span>${log.timestamp}</span>
          </div>
          <div style="font-size:0.65rem; margin-bottom: 4px; color:var(--text-muted);">
            Event ID: <span style="color:var(--accent-gold); font-family:monospace;">${log.eventId}</span>
          </div>
          <pre class="debugger-log-payload">${this.syntaxHighlight(log.payload)}</pre>
        </div>
      `).join('');

    } else {
      const serverLogs = localStorage.getItem('fashion_server_tracking_events')
        ? JSON.parse(localStorage.getItem('fashion_server_tracking_events'))
        : [];

      if (serverLogs.length === 0) {
        consoleList.innerHTML = `
          <div class="debugger-console-empty">
            No server-side API requests queued.<br>
            <span style="font-size:0.65rem;color:var(--text-muted);">Simulates Meta CAPI / GTM Server Streams</span>
          </div>
        `;
        return;
      }

      consoleList.innerHTML = serverLogs.map(log => `
        <div class="debugger-item-log">
          <div class="debugger-log-meta">
            <span class="debugger-log-event" style="color: #e5c07b;">${log.eventName} (CAPI Stream)</span>
            <span>${log.timestamp}</span>
          </div>
          <div style="font-size:0.65rem; margin-bottom: 4px; color:var(--text-muted);">
            Event ID: <span style="color:var(--accent-gold); font-family:monospace;">${log.eventId}</span> 
            <span class="debugger-log-tag server">Deduplicated</span>
          </div>
          <pre class="debugger-log-payload">${this.syntaxHighlight(log.capiPayload)}</pre>
        </div>
      `).join('');
    }
  }

  syntaxHighlight(json) {
    if (typeof json !== 'string') {
      json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }
}

customElements.define('analytics-debugger', AnalyticsDebugger);
export default AnalyticsDebugger;
