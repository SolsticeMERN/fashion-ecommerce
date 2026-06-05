import{i as p,f as d,j as g,t as c,b as l,k as v,P as m}from"./main-yKqtEMRN.js";document.addEventListener("DOMContentLoaded",()=>{h(),f(),w()});function h(){const r=document.querySelector("#trending-grid");if(!r)return;const s=m.slice(0,4);r.innerHTML=s.map(t=>{const i=p(t.id),a=t.salePrice!==void 0;return`
          <div class="product-card" data-id="${t.id}">
            <div class="product-image-container">
              ${a?'<span class="badge badge-sale product-badge">Sale</span>':""}
              <a href="product.html?id=${t.id}">
                <img class="product-img" src="${t.images[0]}" alt="${t.title}">
              </a>
              <button class="wishlist-btn-icon ${i?"active":""}" data-id="${t.id}" title="${i?"Remove from Wishlist":"Add to Wishlist"}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${i?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <div class="product-quick-add">
                <button class="btn btn-primary quick-add-btn" data-id="${t.id}" style="width:100%; font-size:0.75rem; padding:0.5rem 1rem;">Quick Add</button>
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
                ${a?`<span class="price-sale">${d(t.salePrice)}</span><span class="price-original">${d(t.price)}</span>`:`<span class="price-regular">${d(t.price)}</span>`}
              </div>
            </div>
          </div>
        `}).join(""),r.querySelectorAll(".quick-add-btn").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const a=parseInt(t.getAttribute("data-id")),o=g(a,1);o&&(window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Added "${o.title}" to cart.`,type:"success"}})),c("add_to_cart",{currency:"USD",value:o.price,items:l([o])}))})}),r.querySelectorAll(".wishlist-btn-icon").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const a=parseInt(t.getAttribute("data-id")),o=v(a),e=m.find(u=>u.id===a),n=t.querySelector("svg");o?(t.classList.add("active"),n.setAttribute("fill","currentColor"),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Saved "${e.title}" to wishlist.`,type:"success"}})),c("add_to_wishlist",{currency:"USD",value:e.salePrice||e.price,items:l([{id:e.id,title:e.title,price:e.salePrice||e.price,sku:e.sku,category:e.category,quantity:1}])})):(t.classList.remove("active"),n.setAttribute("fill","none"),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Removed "${e.title}" from wishlist.`,type:"info"}})))})})}function f(){const r=document.querySelectorAll(".promo-banner"),s=Array.from(r).map((t,i)=>({promotion_id:t.getAttribute("data-promo-id"),promotion_name:t.getAttribute("data-promo-name"),creative_name:t.querySelector("img").getAttribute("alt"),creative_slot:`slot_${i+1}`}));s.length>0&&c("view_promotion",{promotions:s})}function w(){document.querySelectorAll(".promo-banner").forEach((s,t)=>{s.addEventListener("click",i=>{const a=s.getAttribute("data-promo-id"),o=s.getAttribute("data-promo-name"),e=s.querySelector("img").getAttribute("alt");if(c("select_promotion",{promotions:[{promotion_id:a,promotion_name:o,creative_name:e,creative_slot:`slot_${t+1}`}]}),i.target.tagName!=="A"){const n=s.querySelector("a").getAttribute("href");setTimeout(()=>{window.location.href=n},150)}})})}
