import{P as h,o as p,i as y,f as v,t as d,b as u,j as w,k as S}from"./main-gtee8xAa.js";let l=null,n=null;document.addEventListener("DOMContentLoaded",()=>{q(),L(),c(),C()});function q(){const t={},s=new Set;h.forEach(e=>{e.variants&&e.variants.colors&&e.variants.colors.forEach(i=>{t[i.name]=i.value}),e.variants&&e.variants.sizes&&e.variants.sizes.forEach(i=>s.add(i))});const a=document.querySelector("#color-filter-list"),r=document.querySelector("#size-filter-list");a.innerHTML=Object.entries(t).map(([e,i])=>`
        <div class="swatch-color" data-color="${e}" style="background-color: ${i};" title="${e}"></div>
      `).join(""),r.innerHTML=Array.from(s).map(e=>`
        <div class="swatch-size" data-size="${e}">${e}</div>
      `).join("")}function L(){const t=p();t.category&&document.querySelectorAll(".filter-category").forEach(s=>{s.value===t.category&&(s.checked=!0)}),t.search&&(document.querySelector("#sidebar-search-input").value=t.search,document.querySelector("#shop-page-title").textContent=`Search: "${t.search}"`)}function E(){const t=Array.from(document.querySelectorAll(".filter-category:checked")).map(e=>e.value),s=document.querySelector("#sidebar-search-input").value.trim().toLowerCase();let a=h.filter(e=>{if(t.length>0&&!t.includes(e.category))return!1;if(s){const i=e.title.toLowerCase().includes(s),o=e.description.toLowerCase().includes(s),m=e.category.toLowerCase().includes(s),f=e.tags.some(g=>g.toLowerCase().includes(s));if(!i&&!o&&!m&&!f)return!1}return!(l&&!(e.variants.colors&&e.variants.colors.some(o=>o.name===l))||n&&!(e.variants.sizes&&e.variants.sizes.includes(n)))});const r=document.querySelector("#shop-sort").value;return r==="price-asc"?a.sort((e,i)=>(e.salePrice||e.price)-(i.salePrice||i.price)):r==="price-desc"?a.sort((e,i)=>(i.salePrice||i.price)-(e.salePrice||e.price)):r==="rating"&&a.sort((e,i)=>i.rating-e.rating),a}function c(){const t=document.querySelector("#shop-products-grid"),s=document.querySelector("#results-count");if(!t)return;const a=E();if(s.textContent=a.length,a.length===0){t.innerHTML=`
          <div style="grid-column: 1/-1; text-align: center; padding: var(--spacing-xxl) 0; color: var(--text-muted);">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:var(--spacing-md);">
              <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <p>No products found matching the selected filters.</p>
          </div>
        `;return}t.innerHTML=a.map(r=>{const e=y(r.id),i=r.salePrice!==void 0;return`
          <div class="product-card" data-id="${r.id}">
            <div class="product-image-container">
              ${i?'<span class="badge badge-sale product-badge">Sale</span>':""}
              <a href="${generateProductUrl(r.id,r.title)}" class="product-link" data-id="${r.id}">
                <img class="product-img" src="${r.images[0]}" alt="${r.title}">
              </a>
              <button class="wishlist-btn-icon ${e?"active":""}" data-id="${r.id}" title="${e?"Remove from Wishlist":"Add to Wishlist"}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <div class="product-quick-add">
                <button class="btn btn-primary quick-add-btn" data-id="${r.id}" style="width:100%; font-size:0.75rem; padding:0.5rem 1rem;">Quick Add</button>
              </div>
            </div>
            
            <div class="product-info">
              <span class="product-cat">${r.category}</span>
              <a href="${generateProductUrl(r.id,r.title)}" class="product-link" data-id="${r.id}">
                <h3 class="product-name">${r.title}</h3>
              </a>
              <div class="product-rating">
                ${"&#9733;".repeat(Math.round(r.rating))}${"&#9734;".repeat(5-Math.round(r.rating))}
                <span>(${r.reviewCount})</span>
              </div>
              <div class="product-price-wrap">
                ${i?`<span class="price-sale">${v(r.salePrice)}</span><span class="price-original">${v(r.price)}</span>`:`<span class="price-regular">${v(r.price)}</span>`}
              </div>
            </div>
          </div>
        `}).join(""),$(),d("view_item_list",{item_list_name:"Shop Catalog List",items:u(a.slice(0,12))})}function $(){const t=document.querySelector("#shop-products-grid");t.querySelectorAll(".quick-add-btn").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const r=parseInt(s.getAttribute("data-id")),e=w(r,1);e&&(window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Added "${e.title}" to cart.`,type:"success"}})),d("add_to_cart",{currency:"USD",value:e.price,items:u([e])}))})}),t.querySelectorAll(".wishlist-btn-icon").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const r=parseInt(s.getAttribute("data-id")),e=S(r),i=h.find(m=>m.id===r),o=s.querySelector("svg");e?(s.classList.add("active"),o.setAttribute("fill","currentColor"),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Saved "${i.title}" to wishlist.`,type:"success"}})),d("add_to_wishlist",{currency:"USD",value:i.salePrice||i.price,items:u([{id:i.id,title:i.title,price:i.salePrice||i.price,sku:i.sku,category:i.category,quantity:1}])})):(s.classList.remove("active"),o.setAttribute("fill","none"),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Removed "${i.title}" from wishlist.`,type:"info"}})))})}),t.querySelectorAll(".product-link").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const r=parseInt(s.getAttribute("data-id")),e=h.find(i=>i.id===r);d("select_item",{item_list_name:"Shop Catalog List",items:u([e])}),setTimeout(()=>{window.location.href=s.getAttribute("href")},150)})})}function C(){document.querySelectorAll(".filter-category").forEach(t=>{t.addEventListener("change",()=>{c()})}),document.querySelector("#sidebar-search-form").addEventListener("submit",t=>{t.preventDefault();const s=document.querySelector("#sidebar-search-input").value.trim();document.querySelector("#shop-page-title").textContent=s?`Search: "${s}"`:"Shop All Products",s&&d("search",{search_term:s}),c()}),document.querySelectorAll(".swatch-color").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-color");l===s?(l=null,t.classList.remove("active")):(document.querySelectorAll(".swatch-color").forEach(a=>a.classList.remove("active")),l=s,t.classList.add("active")),c()})}),document.querySelectorAll(".swatch-size").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-size");n===s?(n=null,t.classList.remove("active")):(document.querySelectorAll(".swatch-size").forEach(a=>a.classList.remove("active")),n=s,t.classList.add("active")),c()})}),document.querySelector("#shop-sort").addEventListener("change",()=>{c()}),document.querySelector("#reset-filters-btn").addEventListener("click",()=>{document.querySelectorAll(".filter-category").forEach(t=>t.checked=!1),document.querySelector("#sidebar-search-input").value="",document.querySelectorAll(".swatch-color").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".swatch-size").forEach(t=>t.classList.remove("active")),document.querySelector("#shop-sort").value="featured",document.querySelector("#shop-page-title").textContent="Shop All Products",l=null,n=null,c()})}
