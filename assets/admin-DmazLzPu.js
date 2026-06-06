import{P as u,f as c}from"./main-Bc3VQrLm.js";import{g as m}from"./orders-0Kmp3V1W.js";const d="fashion_inventory_overrides",g="fashion_registered_users";document.addEventListener("DOMContentLoaded",()=>{y(),i(),l(),v(),f(),S(),document.querySelector("#reset-inventory-btn").addEventListener("click",()=>{localStorage.removeItem(d),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Inventory overrides reset to default values",type:"success"}})),l(),i()})});function y(){const s=document.querySelectorAll(".dashboard-nav-item[data-panel]"),n=document.querySelectorAll(".dashboard-content-panel");s.forEach(o=>{o.addEventListener("click",()=>{s.forEach(e=>e.classList.remove("active")),n.forEach(e=>e.classList.remove("active")),o.classList.add("active");const t=`panel-${o.getAttribute("data-panel")}`;document.querySelector(`#${t}`).classList.add("active")})})}function p(){const s=localStorage.getItem("fashion_guest_orders"),n=s?JSON.parse(s):[],o=localStorage.getItem(g);o&&JSON.parse(o);const t=[...n],e=localStorage.getItem("fashion_last_order");if(e){const r=JSON.parse(e);t.some(a=>a.order_id===r.order_id)||t.push(r)}return t.sort((r,a)=>a.order_id.localeCompare(r.order_id)),t}function i(){const s=p(),n=s.reduce((r,a)=>r+a.value,0),o=s.length,t=o>0?n/o:0;let e=0;u.forEach(r=>{m(r.id,r.inventory)<=0&&e++}),document.querySelector("#kpi-revenue").textContent=c(n),document.querySelector("#kpi-orders").textContent=o,document.querySelector("#kpi-aov").textContent=c(t),document.querySelector("#kpi-depleted").textContent=e}function l(){const s=document.querySelector("#inventory-table-body");s&&(s.innerHTML=u.map(n=>{const o=m(n.id,n.inventory);return`
          <tr>
            <td style="font-weight:600; color:var(--text-primary);">${n.title}</td>
            <td style="font-family:monospace; font-size:0.8rem;">${n.sku}</td>
            <td>${n.inventory}</td>
            <td>
              <span class="badge ${o===0?"badge-sale":o<=3?"badge-gold":"badge-success"}">
                ${o} left
              </span>
            </td>
            <td style="text-align:right;">
              <div class="flex gap-xs justify-center align-center" style="width:140px; margin-left:auto;">
                <input type="number" class="form-input stock-edit-input" data-id="${n.id}" value="${o}" min="0" style="padding:0.3rem 0.5rem; text-align:center; font-size:0.85rem;">
                <button class="btn btn-dark save-stock-btn" data-id="${n.id}" style="padding:0.35rem 0.65rem; font-size:0.75rem;">Set</button>
              </div>
            </td>
          </tr>
        `}).join(""),s.querySelectorAll(".save-stock-btn").forEach(n=>{n.addEventListener("click",()=>{const o=parseInt(n.getAttribute("data-id")),t=s.querySelector(`.stock-edit-input[data-id="${o}"]`),e=parseInt(t.value);if(isNaN(e)||e<0){window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Invalid stock value",type:"error"}}));return}const r=localStorage.getItem(d)?JSON.parse(localStorage.getItem(d)):{};r[o]=e,localStorage.setItem(d,JSON.stringify(r)),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Updated stock level successfully.",type:"success"}})),l(),i()})}))}function v(){const s=document.querySelector("#admin-orders-body"),n=document.querySelector("#admin-orders-table-wrap"),o=document.querySelector("#no-admin-orders"),t=p();if(t.length===0){n.style.display="none",o.style.display="block";return}n.style.display="block",o.style.display="none",s.innerHTML=t.map(e=>`
        <tr>
          <td style="font-family:monospace; font-weight:600; color:var(--text-primary);">${e.order_id}</td>
          <td>${e.date}</td>
          <td>
            <strong>${e.billing.first_name} ${e.billing.last_name}</strong><br>
            <span class="text-muted" style="font-size:0.8rem;">${e.billing.email}</span>
          </td>
          <td>${e.item_count} items</td>
          <td style="font-weight:600; color:var(--accent-gold);">${c(e.value)}</td>
          <td><span class="badge badge-gold" style="font-size:0.7rem;">${e.payment_method}</span></td>
        </tr>
      `).join("")}function f(){const s=document.querySelector("#admin-users-body");if(!s)return;const n=localStorage.getItem(g),o=n?JSON.parse(n):[];if(o.length===0){s.innerHTML='<tr><td colspan="6" class="text-center text-muted">No client profiles.</td></tr>';return}s.innerHTML=o.map(t=>`
        <tr>
          <td style="font-family:monospace; font-size:0.8rem;">${t.customer_id}</td>
          <td style="font-weight:600; color:var(--text-primary);">${t.customer_first_name} ${t.customer_last_name}</td>
          <td>${t.customer_email}</td>
          <td>${t.customer_phone||"N/A"}</td>
          <td>${t.customer_city||"N/A"}, ${t.customer_country}</td>
          <td><span class="badge ${t.customer_type==="VIP"?"badge-gold":"badge-success"}">${t.customer_type}</span></td>
        </tr>
      `).join("")}function S(){const s=localStorage.getItem("tracking_gtm_enabled")==="true",n=localStorage.getItem("tracking_gtm_container_id")||"",o=localStorage.getItem("tracking_meta_test_code")||"";document.querySelector("#gtm-enabled-checkbox").checked=s,document.querySelector("#gtm-id-input").value=n,document.querySelector("#capi-test-code-input").value=o,document.querySelector("#gtm-config-form").addEventListener("submit",t=>{t.preventDefault();const e=document.querySelector("#gtm-enabled-checkbox").checked,r=document.querySelector("#gtm-id-input").value.trim().toUpperCase();if(e&&(!r||!r.startsWith("GTM-"))){window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Invalid GTM container ID. Must start with GTM-",type:"error"}}));return}localStorage.setItem("tracking_gtm_enabled",e.toString()),localStorage.setItem("tracking_gtm_container_id",r),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"GTM configuration saved successfully! Reloading...",type:"success"}})),setTimeout(()=>{window.location.reload()},1e3)}),document.querySelector("#capi-config-form").addEventListener("submit",t=>{t.preventDefault();const e=document.querySelector("#capi-test-code-input").value.trim().toUpperCase();if(e&&!e.startsWith("TEST")){window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Invalid test event code. Must start with TEST",type:"error"}}));return}localStorage.setItem("tracking_meta_test_code",e),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Meta CAPI test code configuration saved successfully!",type:"success"}}))})}
