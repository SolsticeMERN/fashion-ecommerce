import{A as o,p as l,f as d,j as c,t as p,b as h,k as u,P as m}from"./main-yKqtEMRN.js";document.addEventListener("DOMContentLoaded",()=>{r(),window.addEventListener("wishlist-updated",()=>{r()})});function r(){const a=o(),e=document.querySelector("#empty-wishlist-layout"),i=document.querySelector("#wishlist-grid-container");if(a.length===0){e.style.display="block",i.style.display="none";return}e.style.display="none",i.style.display="grid";const s=a.map(t=>l(t)).filter(Boolean);i.innerHTML=s.map(t=>{const n=t.salePrice!==void 0;return`
          <div class="product-card" data-id="${t.id}">
            <div class="product-image-container">
              ${n?'<span class="badge badge-sale product-badge">Sale</span>':""}
              <a href="product.html?id=${t.id}">
                <img class="product-img" src="${t.images[0]}" alt="${t.title}">
              </a>
              <button class="wishlist-btn-icon active" data-id="${t.id}" title="Remove from Wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <div class="product-quick-add">
                <button class="btn btn-primary wishlist-quick-add-btn" data-id="${t.id}" style="width:100%; font-size:0.75rem; padding:0.5rem 1rem;">Add to Cart</button>
              </div>
            </div>
            
            <div class="product-info">
              <span class="product-cat">${t.category}</span>
              <a href="product.html?id=${t.id}">
                <h3 class="product-name">${t.title}</h3>
              </a>
              <div class="product-rating">
                ${"&#9733;".repeat(Math.round(t.rating))}${"&#9734;".repeat(5-Math.round(t.rating))}
                <span>(${t.reviewCount})</span>
              </div>
              <div class="product-price-wrap">
                ${n?`<span class="price-sale">${d(t.salePrice)}</span><span class="price-original">${d(t.price)}</span>`:`<span class="price-regular">${d(t.price)}</span>`}
              </div>
            </div>
          </div>
        `}).join(""),g()}function g(){const a=document.querySelector("#wishlist-grid-container");a.querySelectorAll(".wishlist-quick-add-btn").forEach(e=>{e.addEventListener("click",()=>{const i=parseInt(e.getAttribute("data-id")),s=c(i,1);s&&(window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Added "${s.title}" to cart from wishlist.`,type:"success"}})),p("add_to_cart",{currency:"USD",value:s.price,items:h([s])}))})}),a.querySelectorAll(".wishlist-btn-icon").forEach(e=>{e.addEventListener("click",()=>{const i=parseInt(e.getAttribute("data-id")),s=u(i),t=m.find(n=>n.id===i);s||window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Removed "${t.title}" from wishlist.`,type:"info"}}))})})}
