// Generate unique UUID-like string
export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Generate unique Event ID for CAPI/GA4 browser-to-server deduplication
export function generateEventId(eventName) {
  const ts = Date.now();
  const rand = Math.floor(Math.random() * 1000000);
  return `evt_${eventName.toLowerCase()}_${ts}_${rand}`;
}

// Generate GA4-compatible Client ID: GA1.1.XXXXXXXXXX.YYYYYYYYYY
export function getOrCreateClientId() {
  let cid = localStorage.getItem('tracking_client_id');
  if (!cid) {
    const rand = Math.floor(Math.random() * 1000000000);
    const ts = Math.floor(Date.now() / 1000);
    cid = `GA1.1.${rand}.${ts}`;
    localStorage.setItem('tracking_client_id', cid);
  }
  return cid;
}

// Get or create Session ID
export function getOrCreateSessionId() {
  let sid = sessionStorage.getItem('tracking_session_id');
  if (!sid) {
    sid = Math.floor(Math.random() * 1000000000).toString();
    sessionStorage.setItem('tracking_session_id', sid);
  }
  return sid;
}

// Cookie Helpers
export function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "; expires=" + date.toUTCString();
  // Set cookie with SameSite=Lax and Path=/
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

export function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Format Currency
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Pure JS SHA-256 for Browser matching (Meta Advanced Matching & Google Enhanced Conversions)
export async function sha256Hash(value) {
  if (!value) return null;
  const cleanVal = value.trim().toLowerCase();
  
  if (window.crypto && window.crypto.subtle) {
    try {
      const msgBuffer = new TextEncoder().encode(cleanVal);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex;
    } catch (e) {
      console.warn("Subtle crypto error, using fallback hashing:", e);
    }
  }
  
  // Custom simple fallback hashing
  let hash1 = 5381;
  let hash2 = 52711;
  for (let i = 0; i < cleanVal.length; i++) {
    const char = cleanVal.charCodeAt(i);
    hash1 = ((hash1 << 5) + hash1) ^ char;
    hash2 = ((hash2 << 5) + hash2) ^ char;
  }
  const h1 = Math.abs(hash1).toString(16).padStart(8, '0');
  const h2 = Math.abs(hash2).toString(16).padStart(8, '0');
  return h1 + h2;
}

// Parse query params
export function getQueryParams() {
  const params = {};
  const search = window.location.search.substring(1);
  if (!search) return params;
  
  const pairs = search.split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    if (pair[0]) {
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
  }
  return params;
}
