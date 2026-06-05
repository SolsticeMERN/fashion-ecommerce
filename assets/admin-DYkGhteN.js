import{P as u,f as c}from"./main-jt3pKJ0m.js";import{g as m}from"./orders-20HZuKR2.js";const d="fashion_inventory_overrides",g="fashion_registered_users";document.addEventListener("DOMContentLoaded",()=>{p(),i(),l(),f(),v(),b(),document.querySelector("#reset-inventory-btn").addEventListener("click",()=>{localStorage.removeItem(d),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Inventory overrides reset to default values",type:"success"}})),l(),i()})});function p(){const r=document.querySelectorAll(".dashboard-nav-item[data-panel]"),o=document.querySelectorAll(".dashboard-content-panel");r.forEach(e=>{e.addEventListener("click",()=>{r.forEach(n=>n.classList.remove("active")),o.forEach(n=>n.classList.remove("active")),e.classList.add("active");const t=`panel-${e.getAttribute("data-panel")}`;document.querySelector(`#${t}`).classList.add("active")})})}function y(){const r=localStorage.getItem("fashion_guest_orders"),o=r?JSON.parse(r):[],e=localStorage.getItem(g);e&&JSON.parse(e);const t=[...o],n=localStorage.getItem("fashion_last_order");if(n){const s=JSON.parse(n);t.some(a=>a.order_id===s.order_id)||t.push(s)}return t.sort((s,a)=>a.order_id.localeCompare(s.order_id)),t}function i(){const r=y(),o=r.reduce((s,a)=>s+a.value,0),e=r.length,t=e>0?o/e:0;let n=0;u.forEach(s=>{m(s.id,s.inventory)<=0&&n++}),document.querySelector("#kpi-revenue").textContent=c(o),document.querySelector("#kpi-orders").textContent=e,document.querySelector("#kpi-aov").textContent=c(t),document.querySelector("#kpi-depleted").textContent=n}function l(){const r=document.querySelector("#inventory-table-body");r&&(r.innerHTML=u.map(o=>{const e=m(o.id,o.inventory);return`
          <tr>
            <td style="font-weight:600; color:var(--text-primary);">${o.title}</td>
            <td style="font-family:monospace; font-size:0.8rem;">${o.sku}</td>
            <td>${o.inventory}</td>
            <td>
              <span class="badge ${e===0?"badge-sale":e<=3?"badge-gold":"badge-success"}">
                ${e} left
              </span>
            </td>
            <td style="text-align:right;">
              <div class="flex gap-xs justify-center align-center" style="width:140px; margin-left:auto;">
                <input type="number" class="form-input stock-edit-input" data-id="${o.id}" value="${e}" min="0" style="padding:0.3rem 0.5rem; text-align:center; font-size:0.85rem;">
                <button class="btn btn-dark save-stock-btn" data-id="${o.id}" style="padding:0.35rem 0.65rem; font-size:0.75rem;">Set</button>
              </div>
            </td>
          </tr>
        `}).join(""),r.querySelectorAll(".save-stock-btn").forEach(o=>{o.addEventListener("click",()=>{const e=parseInt(o.getAttribute("data-id")),t=r.querySelector(`.stock-edit-input[data-id="${e}"]`),n=parseInt(t.value);if(isNaN(n)||n<0){window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Invalid stock value",type:"error"}}));return}const s=localStorage.getItem(d)?JSON.parse(localStorage.getItem(d)):{};s[e]=n,localStorage.setItem(d,JSON.stringify(s)),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Updated stock level successfully.",type:"success"}})),l(),i()})}))}function f(){const r=document.querySelector("#admin-orders-body"),o=document.querySelector("#admin-orders-table-wrap"),e=document.querySelector("#no-admin-orders"),t=y();if(t.length===0){o.style.display="none",e.style.display="block";return}o.style.display="block",e.style.display="none",r.innerHTML=t.map(n=>`
        <tr>
          <td style="font-family:monospace; font-weight:600; color:var(--text-primary);">${n.order_id}</td>
          <td>${n.date}</td>
          <td>
            <strong>${n.billing.first_name} ${n.billing.last_name}</strong><br>
            <span class="text-muted" style="font-size:0.8rem;">${n.billing.email}</span>
          </td>
          <td>${n.item_count} items</td>
          <td style="font-weight:600; color:var(--accent-gold);">${c(n.value)}</td>
          <td><span class="badge badge-gold" style="font-size:0.7rem;">${n.payment_method}</span></td>
        </tr>
      `).join("")}function v(){const r=document.querySelector("#admin-users-body");if(!r)return;const o=localStorage.getItem(g),e=o?JSON.parse(o):[];if(e.length===0){r.innerHTML='<tr><td colspan="6" class="text-center text-muted">No client profiles.</td></tr>';return}r.innerHTML=e.map(t=>`
        <tr>
          <td style="font-family:monospace; font-size:0.8rem;">${t.customer_id}</td>
          <td style="font-weight:600; color:var(--text-primary);">${t.customer_first_name} ${t.customer_last_name}</td>
          <td>${t.customer_email}</td>
          <td>${t.customer_phone||"N/A"}</td>
          <td>${t.customer_city||"N/A"}, ${t.customer_country}</td>
          <td><span class="badge ${t.customer_type==="VIP"?"badge-gold":"badge-success"}">${t.customer_type}</span></td>
        </tr>
      `).join("")}function b(){const r=localStorage.getItem("tracking_gtm_enabled")==="true",o=localStorage.getItem("tracking_gtm_container_id")||"";document.querySelector("#gtm-enabled-checkbox").checked=r,document.querySelector("#gtm-id-input").value=o,document.querySelector("#gtm-config-form").addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector("#gtm-enabled-checkbox").checked,n=document.querySelector("#gtm-id-input").value.trim().toUpperCase();if(t&&(!n||!n.startsWith("GTM-"))){window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Invalid GTM container ID. Must start with GTM-",type:"error"}}));return}localStorage.setItem("tracking_gtm_enabled",t.toString()),localStorage.setItem("tracking_gtm_container_id",n),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"GTM configuration saved successfully! Reloading...",type:"success"}})),setTimeout(()=>{window.location.reload()},1e3)})}
