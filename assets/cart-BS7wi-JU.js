import{g as d,a as y,t as i,b as l,f as r,c as v,u as m,r as f,d as g}from"./main-CzH93fxP.js";document.addEventListener("DOMContentLoaded",()=>{u(),C();const o=d();if(o.length>0){const e=y();i("view_cart",{currency:"USD",value:e.subtotal,items:l(o)})}});function u(){const o=d(),e=document.querySelector("#empty-cart-layout"),s=document.querySelector("#active-cart-layout");if(o.length===0){e&&(e.style.display="block"),s&&(s.style.display="none");return}e&&(e.style.display="none"),s&&(s.style.display="grid");const n=document.querySelector("#cart-items-container");n.innerHTML=o.map(t=>`
        <div class="cart-row" data-id="${t.id}" data-color="${t.color}" data-size="${t.size}">
          <div class="cart-product-cell">
            <img class="cart-product-img" src="${t.image}" alt="${t.title}">
            <div class="cart-product-info">
              <a href="product.html?id=${t.id}" class="cart-product-name" style="font-weight:600;">${t.title}</a>
              <span class="cart-product-meta">Color: ${t.color} | Size: ${t.size}</span>
            </div>
          </div>
          
          <div class="cart-price-cell">
            ${r(t.price)}
          </div>
          
          <div>
            <div class="qty-control" style="width:fit-content;">
              <span class="qty-btn dec-qty-btn">&minus;</span>
              <span class="qty-val">${t.quantity}</span>
              <span class="qty-btn inc-qty-btn">&plus;</span>
            </div>
          </div>
          
          <div class="cart-price-cell text-right" style="font-weight:600;">
            ${r(t.price*t.quantity)}
            <button class="remove-cart-item" style="display:inline-block; margin-left:12px; font-size:1.2rem; line-height:1; vertical-align:middle;" title="Remove item">&times;</button>
          </div>
        </div>
      `).join(""),p(),q()}function p(){const o=y();document.querySelector("#summary-subtotal").textContent=r(o.subtotal),document.querySelector("#summary-shipping").textContent=o.shipping===0?"FREE":r(o.shipping),document.querySelector("#summary-tax").textContent=r(o.tax),document.querySelector("#summary-total").textContent=r(o.total);const e=document.querySelector("#summary-discount-row"),s=document.querySelector("#summary-discount");o.discount>0?(s.textContent=`-${r(o.discount)}`,e.style.display="flex"):e.style.display="none";const n=v(),t=document.querySelector("#coupon-code-input"),a=document.querySelector("#coupon-alert-msg");n&&(t.value=n,a.style.display="block",a.style.color="var(--color-success)",a.textContent=`Promo code "${n}" is active!`)}function q(){const o=d();document.querySelectorAll(".cart-row").forEach(e=>{const s=parseInt(e.getAttribute("data-id")),n=e.getAttribute("data-color"),t=e.getAttribute("data-size"),a=o.find(c=>c.id===s&&c.color===n&&c.size===t);e.querySelector(".dec-qty-btn").addEventListener("click",()=>{const c=m(s,n,t,a.quantity-1);c&&(c.removed?(window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Removed "${c.item.title}" from cart.`,type:"info"}})),i("remove_from_cart",{currency:"USD",value:c.item.price,items:l([c.item])})):i("remove_from_cart",{currency:"USD",value:a.price,items:l([{...a,quantity:1}])}),u())}),e.querySelector(".inc-qty-btn").addEventListener("click",()=>{m(s,n,t,a.quantity+1)&&(i("add_to_cart",{currency:"USD",value:a.price,items:l([{...a,quantity:1}])}),u())}),e.querySelector(".remove-cart-item").addEventListener("click",()=>{const c=f(s,n,t);c&&(window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Removed "${c.item.title}" from cart.`,type:"info"}})),i("remove_from_cart",{currency:"USD",value:c.item.price*c.item.quantity,items:l([c.item])}),u())})})}function C(){const o=document.querySelector("#coupon-code-input"),e=document.querySelector("#apply-coupon-btn"),s=document.querySelector("#coupon-alert-msg");e.addEventListener("click",()=>{const n=o.value.trim(),t=g(n);s.style.display="block",t.success?(s.style.color="var(--color-success)",s.textContent=t.message,window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:t.message,type:"success"}})),p(),u()):(s.style.color="var(--color-error)",s.textContent=t.message,window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:t.message,type:"error"}})))})}
