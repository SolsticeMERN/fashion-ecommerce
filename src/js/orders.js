import { getCart, getCartTotals, clearCart, getAppliedCoupon } from './store.js';
import { getCurrentUser, addOrderToCurrentUser } from './auth.js';
import { generateUUID } from './utils.js';

const INVENTORY_OVERRIDES_KEY = 'fashion_inventory_overrides';

export function getProductInventory(productId, defaultQty) {
  const overrides = localStorage.getItem(INVENTORY_OVERRIDES_KEY);
  if (overrides) {
    const parsed = JSON.parse(overrides);
    if (parsed[productId] !== undefined) {
      return parsed[productId];
    }
  }
  return defaultQty;
}

export function updateProductInventory(productId, qtyUsed) {
  const overrides = localStorage.getItem(INVENTORY_OVERRIDES_KEY) 
    ? JSON.parse(localStorage.getItem(INVENTORY_OVERRIDES_KEY)) 
    : {};
  
  // We need to know the default stock from products.js but we can just store the current remaining stock
  // Let's assume we subtract qtyUsed from current inventory
  // We'll read the override first, if it doesn't exist, we set it below
  const currentOverride = overrides[productId];
  if (currentOverride !== undefined) {
    overrides[productId] = Math.max(0, currentOverride - qtyUsed);
  } else {
    // If not overridden, it means we read default. We'll set the overrides during checkout based on the actual items.
    overrides[productId] = -qtyUsed; // We'll resolve this relative to product.inventory when loaded
  }
  localStorage.setItem(INVENTORY_OVERRIDES_KEY, JSON.stringify(overrides));
}

export function placeOrder(billingDetails, shippingMethod, paymentMethod) {
  const cart = getCart();
  if (cart.length === 0) {
    return { success: false, message: "Cart is empty" };
  }
  
  const totals = getCartTotals();
  const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
  const transactionId = "TXN-" + generateUUID().substring(0, 12).toUpperCase();
  
  const order = {
    order_id: orderId,
    transaction_id: transactionId,
    date: new Date().toISOString().split('T')[0],
    currency: "USD",
    value: totals.total,
    subtotal: totals.subtotal,
    tax: totals.tax,
    shipping: totals.shipping,
    discount: totals.discount,
    coupon: getAppliedCoupon(),
    payment_method: paymentMethod,
    shipping_method: shippingMethod,
    item_count: cart.reduce((sum, item) => sum + item.quantity, 0),
    items: cart.map(item => ({
      item_id: item.id,
      item_name: item.title,
      item_brand: "Aura Wear",
      item_category: item.category,
      item_category2: item.category2 || "",
      item_category3: item.category3 || "",
      item_variant: `${item.color} / ${item.size}`,
      item_sku: item.sku,
      price: item.price,
      quantity: item.quantity,
      currency: "USD"
    })),
    billing: {
      first_name: billingDetails.firstName,
      last_name: billingDetails.lastName,
      email: billingDetails.email,
      phone: billingDetails.phone,
      address: billingDetails.address,
      city: billingDetails.city,
      state: billingDetails.state,
      country: billingDetails.country || "US",
      zip_code: billingDetails.zip
    }
  };
  
  // Subtract inventory overrides
  cart.forEach(item => {
    updateProductInventory(item.id, item.quantity);
  });
  
  // Add to current user history if logged in
  const user = getCurrentUser();
  if (user) {
    addOrderToCurrentUser({
      order_id: orderId,
      date: order.date,
      total: order.value,
      items: order.item_count,
      status: "Processing"
    });
  } else {
    // Guest orders can be stored in a guest order cache for receipt page retrieval
    const guestOrders = localStorage.getItem('fashion_guest_orders') 
      ? JSON.parse(localStorage.getItem('fashion_guest_orders')) 
      : [];
    guestOrders.push(order);
    localStorage.setItem('fashion_guest_orders', JSON.stringify(guestOrders));
  }
  
  // Cache the last order details for the thank you page rendering
  localStorage.setItem('fashion_last_order', JSON.stringify(order));
  
  // Clear cart
  clearCart();
  
  return { success: true, order };
}

export function getLastOrder() {
  const data = localStorage.getItem('fashion_last_order');
  return data ? JSON.parse(data) : null;
}
