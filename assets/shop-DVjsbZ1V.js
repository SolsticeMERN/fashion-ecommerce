import{P as h,o as g,i as y,f as v,t as d,b as u,j as w,k as S}from"./main-pGUSfpDf.js";let l=null,n=null;document.addEventListener("DOMContentLoaded",()=>{q(),L(),c(),C()});function q(){const t={},s=new Set;h.forEach(e=>{e.variants&&e.variants.colors&&e.variants.colors.forEach(r=>{t[r.name]=r.value}),e.variants&&e.variants.sizes&&e.variants.sizes.forEach(r=>s.add(r))});const a=document.querySelector("#color-filter-list"),i=document.querySelector("#size-filter-list");a.innerHTML=Object.entries(t).map(([e,r])=>`
        <div class="swatch-color" data-color="${e}" style="background-color: ${r};" title="${e}"></div>
      `).join(""),i.innerHTML=Array.from(s).map(e=>`
        <div class="swatch-size" data-size="${e}">${e}</div>
      `).join("")}function L(){const t=g();t.category&&document.querySelectorAll(".filter-category").forEach(s=>{s.value===t.category&&(s.checked=!0)}),t.search&&(document.querySelector("#sidebar-search-input").value=t.search,document.querySelector("#shop-page-title").textContent=`Search: "${t.search}"`)}function E(){const t=Array.from(document.querySelectorAll(".filter-category:checked")).map(e=>e.value),s=document.querySelector("#sidebar-search-input").value.trim().toLowerCase();let a=h.filter(e=>{if(t.length>0&&!t.includes(e.category))return!1;if(s){const r=e.title.toLowerCase().includes(s),o=e.description.toLowerCase().includes(s),m=e.category.toLowerCase().includes(s),f=e.tags.some(p=>p.toLowerCase().includes(s));if(!r&&!o&&!m&&!f)return!1}return!(l&&!(e.variants.colors&&e.variants.colors.some(o=>o.name===l))||n&&!(e.variants.sizes&&e.variants.sizes.includes(n)))});const i=document.querySelector("#shop-sort").value;return i==="price-asc"?a.sort((e,r)=>(e.salePrice||e.price)-(r.salePrice||r.price)):i==="price-desc"?a.sort((e,r)=>(r.salePrice||r.price)-(e.salePrice||e.price)):i==="rating"&&a.sort((e,r)=>r.rating-e.rating),a}function c(){const t=document.querySelector("#shop-products-grid"),s=document.querySelector("#results-count");if(!t)return;const a=E();if(s.textContent=a.length,a.length===0){t.innerHTML=`
          <div style="grid-column: 1/-1; text-align: center; padding: var(--spacing-xxl) 0; color: var(--text-muted);">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:var(--spacing-md);">
              <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <p>No products found matching the selected filters.</p>
          </div>
        `;return}t.innerHTML=a.map(i=>{const e=y(i.id),r=i.salePrice!==void 0;return`
          <div class="product-card" data-id="${i.id}">
            <div class="product-image-container">
              ${r?'<span class="badge badge-sale product-badge">Sale</span>':""}
              <a href="product.html?id=${i.id}" class="product-link" data-id="${i.id}">
                <img class="product-img" src="${i.images[0]}" alt="${i.title}">
              </a>
              <button class="wishlist-btn-icon ${e?"active":""}" data-id="${i.id}" title="${e?"Remove from Wishlist":"Add to Wishlist"}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <div class="product-quick-add">
                <button class="btn btn-primary quick-add-btn" data-id="${i.id}" style="width:100%; font-size:0.75rem; padding:0.5rem 1rem;">Quick Add</button>
              </div>
            </div>
            
            <div class="product-info">
              <span class="product-cat">${i.category}</span>
              <a href="product.html?id=${i.id}" class="product-link" data-id="${i.id}">
                <h3 class="product-name">${i.title}</h3>
              </a>
              <div class="product-rating">
                ${"&#9733;".repeat(Math.round(i.rating))}${"&#9734;".repeat(5-Math.round(i.rating))}
                <span>(${i.reviewCount})</span>
              </div>
              <div class="product-price-wrap">
                ${r?`<span class="price-sale">${v(i.salePrice)}</span><span class="price-original">${v(i.price)}</span>`:`<span class="price-regular">${v(i.price)}</span>`}
              </div>
            </div>
          </div>
        `}).join(""),$(),d("view_item_list",{item_list_name:"Shop Catalog List",items:u(a.slice(0,12))})}function $(){const t=document.querySelector("#shop-products-grid");t.querySelectorAll(".quick-add-btn").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=parseInt(s.getAttribute("data-id")),e=w(i,1);e&&(window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Added "${e.title}" to cart.`,type:"success"}})),d("add_to_cart",{currency:"USD",value:e.price,items:u([e])}))})}),t.querySelectorAll(".wishlist-btn-icon").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=parseInt(s.getAttribute("data-id")),e=S(i),r=h.find(m=>m.id===i),o=s.querySelector("svg");e?(s.classList.add("active"),o.setAttribute("fill","currentColor"),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Saved "${r.title}" to wishlist.`,type:"success"}})),d("add_to_wishlist",{currency:"USD",value:r.salePrice||r.price,items:u([{id:r.id,title:r.title,price:r.salePrice||r.price,sku:r.sku,category:r.category,quantity:1}])})):(s.classList.remove("active"),o.setAttribute("fill","none"),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:`Removed "${r.title}" from wishlist.`,type:"info"}})))})}),t.querySelectorAll(".product-link").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=parseInt(s.getAttribute("data-id")),e=h.find(r=>r.id===i);d("select_item",{item_list_name:"Shop Catalog List",items:u([e])}),setTimeout(()=>{window.location.href=s.getAttribute("href")},150)})})}function C(){document.querySelectorAll(".filter-category").forEach(t=>{t.addEventListener("change",()=>{c()})}),document.querySelector("#sidebar-search-form").addEventListener("submit",t=>{t.preventDefault();const s=document.querySelector("#sidebar-search-input").value.trim();document.querySelector("#shop-page-title").textContent=s?`Search: "${s}"`:"Shop All Products",s&&d("search",{search_term:s}),c()}),document.querySelectorAll(".swatch-color").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-color");l===s?(l=null,t.classList.remove("active")):(document.querySelectorAll(".swatch-color").forEach(a=>a.classList.remove("active")),l=s,t.classList.add("active")),c()})}),document.querySelectorAll(".swatch-size").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-size");n===s?(n=null,t.classList.remove("active")):(document.querySelectorAll(".swatch-size").forEach(a=>a.classList.remove("active")),n=s,t.classList.add("active")),c()})}),document.querySelector("#shop-sort").addEventListener("change",()=>{c()}),document.querySelector("#reset-filters-btn").addEventListener("click",()=>{document.querySelectorAll(".filter-category").forEach(t=>t.checked=!1),document.querySelector("#sidebar-search-input").value="",document.querySelectorAll(".swatch-color").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".swatch-size").forEach(t=>t.classList.remove("active")),document.querySelector("#shop-sort").value="featured",document.querySelector("#shop-page-title").textContent="Shop All Products",l=null,n=null,c()})}
