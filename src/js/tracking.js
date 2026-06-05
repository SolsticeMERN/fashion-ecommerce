import { getOrCreateClientId, getOrCreateSessionId, getCookie, setCookie, getQueryParams, sha256Hash, generateEventId } from './utils.js';
import { getCurrentUser } from './auth.js';

const SERVER_EVENTS_KEY = 'fashion_server_tracking_events';
const CLIENT_EVENTS_KEY = 'fashion_client_tracking_events';

// Initialize Cookies and UTM parameters
export function initTracking() {
  const params = getQueryParams();
  
  // 1. UTM Parameters Extraction & Persistence (Session Storage)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  utmKeys.forEach(key => {
    if (params[key]) {
      sessionStorage.setItem(key, params[key]);
    }
  });

  // 2. Click IDs Extraction & Cookie Creation
  const clickIds = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'ttclid'];
  clickIds.forEach(id => {
    if (params[id]) {
      setCookie(`track_${id}`, params[id], 30); // 30 days expiry
    }
  });

  // 3. Meta Pixel Click ID (_fbc)
  if (params['fbclid']) {
    const creationTime = Date.now();
    const fbcValue = `fb.1.${creationTime}.${params['fbclid']}`;
    setCookie('_fbc', fbcValue, 30);
  }

  // 4. Meta Pixel User Cookie (_fbp)
  let fbp = getCookie('_fbp');
  if (!fbp) {
    const creationTime = Date.now();
    const randomVal = Math.floor(Math.random() * 1000000000);
    fbp = `fb.1.${creationTime}.${randomVal}`;
    setCookie('_fbp', fbp, 90); // 90 days expiry
  }
}

// Get standard technical variables
export function getTechnicalTrackingVariables() {
  const params = getQueryParams();
  const user = getCurrentUser();
  
  return {
    client_id: getOrCreateClientId(),
    session_id: getOrCreateSessionId(),
    user_id: user ? user.customer_id : null,
    external_id: user ? user.customer_id : null,
    fbc: getCookie('_fbc') || getCookie('track_fbclid') || null,
    fbp: getCookie('_fbp') || null,
    gclid: getCookie('track_gclid') || params['gclid'] || null,
    gbraid: getCookie('track_gbraid') || params['gbraid'] || null,
    wbraid: getCookie('track_wbraid') || params['wbraid'] || null,
    ttclid: getCookie('track_ttclid') || params['ttclid'] || null,
    utm_source: sessionStorage.getItem('utm_source') || null,
    utm_medium: sessionStorage.getItem('utm_medium') || null,
    utm_campaign: sessionStorage.getItem('utm_campaign') || null,
    utm_content: sessionStorage.getItem('utm_content') || null,
    utm_term: sessionStorage.getItem('utm_term') || null
  };
}

// Get customer data layer fields
export function getCustomerDataLayer(consent = true) {
  const user = getCurrentUser();
  if (!user || !consent) return {};
  
  return {
    customer_id: user.customer_id,
    customer_email: user.customer_email,
    customer_phone: user.customer_phone,
    customer_first_name: user.customer_first_name,
    customer_last_name: user.customer_last_name,
    customer_city: user.customer_city,
    customer_state: user.customer_state,
    customer_country: user.customer_country,
    customer_postal_code: user.customer_postal_code,
    customer_type: user.customer_type || 'Retail'
  };
}

// Format items standard for GA4
export function formatCartItemsToTracking(cartItems) {
  return cartItems.map((item, idx) => ({
    item_id: item.id.toString(),
    item_name: item.title,
    item_brand: "Aura Wear",
    item_category: item.category,
    item_category2: item.category2 || "",
    item_category3: item.category3 || "",
    item_variant: `${item.color} / ${item.size}`,
    item_sku: item.sku,
    price: item.price,
    quantity: item.quantity,
    currency: "USD",
    index: idx + 1
  }));
}

// Main logic to log / dispatch tracking events
export async function trackEvent(eventName, eventData = {}) {
  // Initialize tracking if not run
  initTracking();
  
  const eventId = generateEventId(eventName);
  const techVars = getTechnicalTrackingVariables();
  const customerVars = getCustomerDataLayer();
  
  // Format customer data with SHA-256 for Meta Advanced Matching & Google Enhanced Conversions
  const hashedCustomer = {
    email: customerVars.customer_email ? await sha256Hash(customerVars.customer_email) : null,
    phone: customerVars.customer_phone ? await sha256Hash(customerVars.customer_phone) : null,
    first_name: customerVars.customer_first_name ? await sha256Hash(customerVars.customer_first_name) : null,
    last_name: customerVars.customer_last_name ? await sha256Hash(customerVars.customer_last_name) : null,
    city: customerVars.customer_city ? await sha256Hash(customerVars.customer_city) : null,
    state: customerVars.customer_state ? await sha256Hash(customerVars.customer_state) : null,
    country: customerVars.customer_country ? await sha256Hash(customerVars.customer_country) : null,
    zip_code: customerVars.customer_postal_code ? await sha256Hash(customerVars.customer_postal_code) : null,
    external_id: customerVars.customer_id ? await sha256Hash(customerVars.customer_id) : null
  };

  const unifiedPayload = {
    event_name: eventName,
    event_id: eventId,
    event_time: Math.floor(Date.now() / 1000),
    user_data: {
      ...techVars,
      ...customerVars,
      hashed: hashedCustomer
    },
    custom_data: eventData
  };

  // 1. Browser Push to window.dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    event_id: eventId,
    client_id: techVars.client_id,
    session_id: techVars.session_id,
    user_properties: {
      user_id: techVars.user_id,
      customer_type: customerVars.customer_type
    },
    ecommerce: eventData
  });

  // Save Browser log to Local Storage
  const clientLogs = localStorage.getItem(CLIENT_EVENTS_KEY) 
    ? JSON.parse(localStorage.getItem(CLIENT_EVENTS_KEY)) 
    : [];
  clientLogs.unshift({
    timestamp: new Date().toLocaleTimeString(),
    eventName,
    eventId,
    payload: {
      event: eventName,
      event_id: eventId,
      ...eventData
    }
  });
  localStorage.setItem(CLIENT_EVENTS_KEY, JSON.stringify(clientLogs.slice(0, 50)));

  // Dispatch a CustomEvent for immediate visual updates on the debugger trigger
  window.dispatchEvent(new CustomEvent('tracking-event-triggered', { detail: { eventName, type: 'client' } }));

  // 2. Simulated Server-Side Tracking Send (GA4 Measurement Protocol & Meta CAPI)
  simulateServerSideTracking(unifiedPayload);
}

function simulateServerSideTracking(unifiedPayload) {
  // Deduplication matching: Server uses the EXACT SAME event_id as the browser pixel event
  const serverLogs = localStorage.getItem(SERVER_EVENTS_KEY) 
    ? JSON.parse(localStorage.getItem(SERVER_EVENTS_KEY)) 
    : [];
  
  // Format CAPI request simulation
  const capiSimulatedPayload = {
    data: [
      {
        event_name: unifiedPayload.event_name,
        event_time: unifiedPayload.event_time,
        event_id: unifiedPayload.event_id,
        event_source_url: window.location.href,
        action_source: "website",
        user_data: {
          em: unifiedPayload.user_data.hashed.email,
          ph: unifiedPayload.user_data.hashed.phone,
          fn: unifiedPayload.user_data.hashed.first_name,
          ln: unifiedPayload.user_data.hashed.last_name,
          ct: unifiedPayload.user_data.hashed.city,
          st: unifiedPayload.user_data.hashed.state,
          country: unifiedPayload.user_data.hashed.country,
          db: null, // birthdate
          zp: unifiedPayload.user_data.hashed.zip_code,
          external_id: unifiedPayload.user_data.hashed.external_id,
          client_ip_address: "192.168.1.1", // mock
          client_user_agent: navigator.userAgent,
          fbc: unifiedPayload.user_data.fbc,
          fbp: unifiedPayload.user_data.fbp
        },
        custom_data: {
          currency: unifiedPayload.custom_data.currency || "USD",
          value: unifiedPayload.custom_data.value || 0,
          content_type: "product",
          contents: unifiedPayload.custom_data.items 
            ? unifiedPayload.custom_data.items.map(item => ({
                id: item.item_id,
                quantity: item.quantity,
                price: item.price
              }))
            : []
        }
      }
    ]
  };

  serverLogs.unshift({
    timestamp: new Date().toLocaleTimeString(),
    eventName: unifiedPayload.event_name,
    eventId: unifiedPayload.event_id,
    capiPayload: capiSimulatedPayload
  });
  
  localStorage.setItem(SERVER_EVENTS_KEY, JSON.stringify(serverLogs.slice(0, 50)));
  window.dispatchEvent(new CustomEvent('tracking-event-triggered', { detail: { eventName: unifiedPayload.event_name, type: 'server' } }));
}

export function clearTrackingLogs() {
  localStorage.removeItem(CLIENT_EVENTS_KEY);
  localStorage.removeItem(SERVER_EVENTS_KEY);
  window.dispatchEvent(new CustomEvent('tracking-logs-cleared'));
}
