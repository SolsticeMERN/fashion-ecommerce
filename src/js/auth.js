import { generateUUID } from './utils.js';

const CURRENT_USER_KEY = 'fashion_current_user';
const REGISTERED_USERS_KEY = 'fashion_registered_users';

// Pre-seed mock users if empty
const DEFAULT_USERS = [
  {
    customer_id: "usr_default_77",
    customer_email: "customer@example.com",
    customer_phone: "+15551234567",
    customer_first_name: "Eleanor",
    customer_last_name: "Vance",
    customer_address: "742 Evergreen Terrace",
    customer_city: "Springfield",
    customer_state: "IL",
    customer_country: "US",
    customer_postal_code: "62704",
    customer_type: "VIP",
    password: "password123",
    orders: [
      { order_id: "ord_1024", date: "2026-05-12", total: 420.00, items: 3, status: "Delivered" },
      { order_id: "ord_1011", date: "2026-04-05", total: 110.00, items: 1, status: "Delivered" }
    ]
  }
];

function getRegisteredUsers() {
  const data = localStorage.getItem(REGISTERED_USERS_KEY);
  if (!data) {
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
  }
  return JSON.parse(data);
}

export function getCurrentUser() {
  const data = localStorage.getItem(CURRENT_USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function registerCustomer(details) {
  const users = getRegisteredUsers();
  
  // Check if exists
  if (users.find(u => u.customer_email.toLowerCase() === details.email.toLowerCase())) {
    return { success: false, message: "Email already registered" };
  }
  
  const newUser = {
    customer_id: "usr_" + generateUUID().substring(0, 8),
    customer_email: details.email,
    customer_phone: details.phone || "",
    customer_first_name: details.firstName || "",
    customer_last_name: details.lastName || "",
    customer_address: details.address || "",
    customer_city: details.city || "",
    customer_state: details.state || "",
    customer_country: details.country || "US",
    customer_postal_code: details.zip || "",
    customer_type: "Retail", // Default type
    password: details.password,
    orders: []
  };
  
  users.push(newUser);
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  
  // Auto login
  setCurrentUser(newUser);
  return { success: true, user: newUser };
}

export function loginCustomer(email, password) {
  const users = getRegisteredUsers();
  const user = users.find(u => u.customer_email.toLowerCase() === email.toLowerCase() && u.password === password);
  
  if (user) {
    setCurrentUser(user);
    return { success: true, user };
  }
  return { success: false, message: "Invalid email or password" };
}

export function logoutCustomer() {
  localStorage.removeItem(CURRENT_USER_KEY);
  window.dispatchEvent(new CustomEvent('auth-changed', { detail: null }));
}

export function updateCustomerProfile(details) {
  const user = getCurrentUser();
  if (!user) return { success: false, message: "Not logged in" };
  
  const updatedUser = {
    ...user,
    customer_phone: details.phone ?? user.customer_phone,
    customer_first_name: details.firstName ?? user.customer_first_name,
    customer_last_name: details.lastName ?? user.customer_last_name,
    customer_address: details.address ?? user.customer_address,
    customer_city: details.city ?? user.customer_city,
    customer_state: details.state ?? user.customer_state,
    customer_country: details.country ?? user.customer_country,
    customer_postal_code: details.zip ?? user.customer_postal_code
  };
  
  // Save to current user
  setCurrentUser(updatedUser);
  
  // Update in registered list
  const users = getRegisteredUsers();
  const idx = users.findIndex(u => u.customer_id === user.customer_id);
  if (idx > -1) {
    users[idx] = updatedUser;
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  }
  
  return { success: true, user: updatedUser };
}

export function addOrderToCurrentUser(order) {
  const user = getCurrentUser();
  if (!user) return;
  
  user.orders = user.orders || [];
  user.orders.unshift(order);
  setCurrentUser(user);
  
  // Update in registered list
  const users = getRegisteredUsers();
  const idx = users.findIndex(u => u.customer_id === user.customer_id);
  if (idx > -1) {
    users[idx].orders = user.orders;
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  }
}

function setCurrentUser(user) {
  // Omit password from session
  const sessionUser = { ...user };
  delete sessionUser.password;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
  window.dispatchEvent(new CustomEvent('auth-changed', { detail: sessionUser }));
}
