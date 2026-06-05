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
  const user = getCurrentUser();
  
  // 1. Build customer profile object
  let customerObj = null;
  if (user) {
    customerObj = {
      customer_id: user.customer_id,
      user_id: user.customer_id,
      external_id: user.customer_id,
      first_name: user.customer_first_name,
      last_name: user.customer_last_name,
      full_name: `${user.customer_first_name} ${user.customer_last_name}`.trim(),
      email: user.customer_email,
      phone: user.customer_phone,
      customer_type: user.customer_type || 'Retail',
      account_created_date: '2026-05-12', // mock static creation
      total_orders: user.orders ? user.orders.length : 0,
      lifetime_value: user.orders ? user.orders.reduce((sum, o) => sum + o.total, 0) : 0
    };
  } else if (eventData.billing) {
    // Guest customer profile mock
    customerObj = {
      customer_id: 'guest_' + techVars.session_id,
      user_id: 'guest_' + techVars.session_id,
      external_id: 'guest_' + techVars.session_id,
      first_name: eventData.billing.first_name,
      last_name: eventData.billing.last_name,
      full_name: `${eventData.billing.first_name} ${eventData.billing.last_name}`.trim(),
      email: eventData.billing.email,
      phone: eventData.billing.phone,
      customer_type: 'Guest',
      account_created_date: new Date().toISOString().split('T')[0],
      total_orders: 1,
      lifetime_value: eventData.value
    };
  }

  // 2. Build billing and shipping address objects
  let billingAddressObj = null;
  let shippingAddressObj = null;
  
  if (eventData.billing) {
    billingAddressObj = {
      first_name: eventData.billing.first_name,
      last_name: eventData.billing.last_name,
      full_name: `${eventData.billing.first_name} ${eventData.billing.last_name}`.trim(),
      company: "",
      email: eventData.billing.email,
      phone: eventData.billing.phone,
      address_line_1: eventData.billing.address,
      address_line_2: "",
      city: eventData.billing.city,
      state: eventData.billing.state,
      postal_code: eventData.billing.zip_code,
      country: eventData.billing.country === 'US' ? 'United States' : eventData.billing.country,
      country_code: eventData.billing.country
    };
    
    shippingAddressObj = {
      first_name: eventData.billing.first_name,
      last_name: eventData.billing.last_name,
      full_name: `${eventData.billing.first_name} ${eventData.billing.last_name}`.trim(),
      company: "",
      phone: eventData.billing.phone,
      address_line_1: eventData.billing.address,
      address_line_2: "",
      city: eventData.billing.city,
      state: eventData.billing.state,
      postal_code: eventData.billing.zip_code,
      country: eventData.billing.country === 'US' ? 'United States' : eventData.billing.country,
      country_code: eventData.billing.country
    };
  } else if (user && user.customer_address) {
    billingAddressObj = {
      first_name: user.customer_first_name,
      last_name: user.customer_last_name,
      full_name: `${user.customer_first_name} ${user.customer_last_name}`.trim(),
      company: "",
      email: user.customer_email,
      phone: user.customer_phone,
      address_line_1: user.customer_address,
      address_line_2: "",
      city: user.customer_city,
      state: user.customer_state,
      postal_code: user.customer_postal_code,
      country: user.customer_country === 'US' ? 'United States' : user.customer_country,
      country_code: user.customer_country
    };
    shippingAddressObj = { ...billingAddressObj };
    delete shippingAddressObj.email;
  }

  // 3. Build checkout object
  let checkoutObj = null;
  if (eventName === 'begin_checkout' || eventName === 'add_shipping_info' || eventName === 'add_payment_info') {
    checkoutObj = {
      checkout_step: eventName === 'begin_checkout' ? 1 : eventName === 'add_shipping_info' ? 2 : 3,
      checkout_type: "standard",
      payment_method: eventData.payment_type || "",
      shipping_method: eventData.shipping_tier || "",
      coupon_code: eventData.coupon || "",
      currency: eventData.currency || "USD",
      value: eventData.value || 0
    };
  }

  // 4. Build complete purchase object
  let purchaseObj = null;
  if (eventName === 'purchase') {
    purchaseObj = {
      transaction_id: eventData.transaction_id,
      order_id: eventData.order_id,
      order_status: "Processing",
      payment_status: "Pending",
      payment_method: eventData.payment_method,
      shipping_method: eventData.shipping_method,
      currency: eventData.currency || "USD",
      value: eventData.value,
      subtotal: eventData.subtotal,
      tax: eventData.tax,
      shipping: eventData.shipping,
      discount: eventData.discount || 0,
      coupon: eventData.coupon || "",
      item_count: eventData.item_count,
      customer: customerObj,
      billing_address: billingAddressObj,
      shipping_address: shippingAddressObj,
      items: eventData.items
    };
  }

  // 5. Build user_data object (Meta advanced matching + Enhanced Conversions)
  const userDataObj = {
    email: customerVars.customer_email || (eventData.billing ? eventData.billing.email : null),
    phone: customerVars.customer_phone || (eventData.billing ? eventData.billing.phone : null),
    first_name: customerVars.customer_first_name || (eventData.billing ? eventData.billing.first_name : null),
    last_name: customerVars.customer_last_name || (eventData.billing ? eventData.billing.last_name : null),
    city: customerVars.customer_city || (eventData.billing ? eventData.billing.city : null),
    state: customerVars.customer_state || (eventData.billing ? eventData.billing.state : null),
    postal_code: customerVars.customer_postal_code || (eventData.billing ? eventData.billing.zip_code : null),
    country: customerVars.customer_country || (eventData.billing ? eventData.billing.country : null),
    external_id: customerVars.customer_id || null,
    fbc: techVars.fbc,
    fbp: techVars.fbp,
    client_ip_address: "192.168.1.1", // mock client IP
    client_user_agent: navigator.userAgent
  };

  // 6. Build traffic_source object
  const trafficSourceObj = {
    source: techVars.utm_source,
    medium: techVars.utm_medium,
    campaign: techVars.utm_campaign,
    content: techVars.utm_content,
    term: techVars.utm_term,
    gclid: techVars.gclid,
    gbraid: techVars.gbraid,
    wbraid: techVars.wbraid,
    fbclid: techVars.fbc ? techVars.fbc.split('.').pop() : null,
    ttclid: techVars.ttclid
  };

  // 7. Build session_data object
  const sessionDataObj = {
    client_id: techVars.client_id,
    session_id: techVars.session_id,
    user_id: techVars.user_id,
    event_id: eventId,
    page_location: window.location.href,
    page_referrer: document.referrer,
    page_title: document.title
  };

  // Expose global window variables
  window.customer = customerObj;
  window.user_data = userDataObj;
  window.traffic_source = trafficSourceObj;
  window.session_data = sessionDataObj;
  
  if (checkoutObj) window.checkout = checkoutObj;
  if (billingAddressObj) window.billing_address = billingAddressObj;
  if (shippingAddressObj) window.shipping_address = shippingAddressObj;
  if (purchaseObj) window.purchase = purchaseObj;

  // Format customer data with SHA-256 hashes
  const hashedCustomer = {
    email: userDataObj.email ? await sha256Hash(userDataObj.email) : null,
    phone: userDataObj.phone ? await sha256Hash(userDataObj.phone) : null,
    first_name: userDataObj.first_name ? await sha256Hash(userDataObj.first_name) : null,
    last_name: userDataObj.last_name ? await sha256Hash(userDataObj.last_name) : null,
    city: userDataObj.city ? await sha256Hash(userDataObj.city) : null,
    state: userDataObj.state ? await sha256Hash(userDataObj.state) : null,
    country: userDataObj.country ? await sha256Hash(userDataObj.country) : null,
    zip_code: userDataObj.postal_code ? await sha256Hash(userDataObj.postal_code) : null,
    external_id: userDataObj.external_id ? await sha256Hash(userDataObj.external_id) : null
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

  // Build root dataLayer push object
  const dataLayerPushObject = {
    event: eventName,
    event_id: eventId,
    client_id: techVars.client_id,
    session_id: techVars.session_id,
    user_properties: {
      user_id: techVars.user_id,
      customer_type: customerVars.customer_type || 'Guest'
    },
    
    // Standard GA4 Ecommerce
    ecommerce: eventData,

    // Root Meta Advanced Matching Ready
    email: userDataObj.email,
    phone: userDataObj.phone,
    first_name: userDataObj.first_name,
    last_name: userDataObj.last_name,
    city: userDataObj.city,
    state: userDataObj.state,
    country: userDataObj.country,
    zip_code: userDataObj.postal_code,
    external_id: userDataObj.external_id,

    // Root Google Ads Enhanced Conversions Ready
    phone_number: userDataObj.phone,
    address: billingAddressObj ? {
      first_name: billingAddressObj.first_name,
      last_name: billingAddressObj.last_name,
      street: billingAddressObj.address_line_1,
      city: billingAddressObj.city,
      region: billingAddressObj.state,
      postal_code: billingAddressObj.postal_code,
      country: billingAddressObj.country_code
    } : null,
    postal_code: userDataObj.postal_code,

    // Global exposed objects nested in dataLayer
    customer: customerObj,
    billing_address: billingAddressObj,
    shipping_address: shippingAddressObj,
    checkout: checkoutObj,
    purchase: purchaseObj,
    user_data: userDataObj,
    traffic_source: trafficSourceObj,
    session_data: sessionDataObj
  };

  // 1. Browser Push to window.dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(dataLayerPushObject);

  // Send only the Purchase event via Meta CAPI from Vercel backend
  if (eventName === 'purchase') {
    fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        source: 'purchase_test',
        timestamp: Date.now(),
        purchase: window.dataLayer[window.dataLayer.length - 1]
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log('Meta CAPI Test Success:', data);
    })
    .catch(err => {
      console.error('Meta CAPI Test Error:', err);
    });
  }

  // Save Browser log to Local Storage for Debugger console
  const clientLogs = localStorage.getItem(CLIENT_EVENTS_KEY) 
    ? JSON.parse(localStorage.getItem(CLIENT_EVENTS_KEY)) 
    : [];
  clientLogs.unshift({
    timestamp: new Date().toLocaleTimeString(),
    eventName,
    eventId,
    payload: dataLayerPushObject
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
