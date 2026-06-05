(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const F=[{id:1,title:"Midnight Cashmere Trench Coat",sku:"W-COAT-MNC-001",price:349,salePrice:289,category:"Women",category2:"Outerwear",category3:"Coats",tags:["Cashmere","Trench","Winter","Luxury"],rating:4.8,reviewCount:34,description:"An elegant, double-breasted trench coat crafted from our finest Italian cashmere-wool blend. Features a tailored fit, adjustable belt, and structured shoulders for a timeless look that keeps you warm in style.",images:["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600","https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Midnight Black",value:"#0A0A0C"},{name:"Camel Tan",value:"#C19A6B"}],sizes:["XS","S","M","L","XL"]},inventory:12,relatedProducts:[2,6,8],crossSellProducts:[9,10],upsellProducts:[7],reviews:[{author:"Evelyn K.",rating:5,comment:"Absolutely gorgeous. The weight is perfect and the cashmere is incredibly soft. I get compliments every time I wear it.",date:"2026-05-15"},{author:"Sarah M.",rating:4,comment:"Beautiful drape and very warm. Runs slightly large, so I size down.",date:"2026-05-28"}]},{id:2,title:"Heritage Leather Bomber Jacket",sku:"M-JACK-HLB-002",price:399,category:"Men",category2:"Outerwear",category3:"Jackets",tags:["Leather","Bomber","Classic","Vintage"],rating:4.9,reviewCount:42,description:"Constructed from supple, full-grain distressed leather, this bomber jacket pays homage to heritage aviation design. Featuring heavy-duty brass zippers, ribbed cuffs, and a quilted satin lining for premium warmth.",images:["https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600","https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Espresso Brown",value:"#3B2F2F"},{name:"Slate Black",value:"#1A1A1A"}],sizes:["S","M","L","XL","XXL"]},inventory:5,relatedProducts:[7,12,14],crossSellProducts:[11,15],upsellProducts:[1],reviews:[{author:"Michael T.",rating:5,comment:"The leather quality is top-notch. Thick but flexible. Fits perfectly and looks better with age.",date:"2026-04-10"}]},{id:3,title:"Silk Slip Dress - Champagne",sku:"W-DRES-SSD-003",price:189,salePrice:149,category:"Women",category2:"Dresses",category3:"Satin",tags:["Silk","Slip Dress","Cocktail","Evening"],rating:4.6,reviewCount:28,description:"Cut on the bias for a fluid, figure-skimming fit, this pure mulberry silk slip dress features a delicate cowl neckline and adjustable spaghetti straps. The perfect piece for effortless transition from day to evening.",images:["https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=600","https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Champagne Gold",value:"#F4E0A5"},{name:"Burgundy Red",value:"#800020"},{name:"Emerald Green",value:"#046307"}],sizes:["XS","S","M","L"]},inventory:18,relatedProducts:[6,9,13],crossSellProducts:[9,10],upsellProducts:[1],reviews:[{author:"Elena R.",rating:5,comment:"Stunning dress. The silk feels luxurious and the cut is highly flattering. The champagne color has a lovely sheen.",date:"2026-05-20"}]},{id:4,title:"Premium Linen Shirt - Ivory",sku:"M-SHIR-PLS-004",price:89,category:"Men",category2:"Shirts",category3:"Linen",tags:["Linen","Summer","Casual","Breathable"],rating:4.5,reviewCount:19,description:"Crafted from 100% naturally breathable flax linen, this shirt features a relaxed fit, clean collar construction, and mother-of-pearl buttons. Enzyme washed for exceptional softness from the very first wear.",images:["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600","https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Ivory White",value:"#FFFFF0"},{name:"Sky Blue",value:"#87CEEB"},{name:"Sage Green",value:"#8A9A86"}],sizes:["S","M","L","XL","XXL"]},inventory:24,relatedProducts:[5,14],crossSellProducts:[11],upsellProducts:[12],reviews:[{author:"Dave H.",rating:4,comment:"Very comfortable shirt for warm weather. Wrinkles as expected with linen, but looks relaxed.",date:"2026-05-02"}]},{id:5,title:"Urban Utility Cargo Pants",sku:"M-PANT-UUC-005",price:119,category:"Men",category2:"Pants",category3:"Utility",tags:["Cargo","Utility","Streetwear","Cotton"],rating:4.4,reviewCount:23,description:"Engineered from a durable cotton-ripstop weave, these utility pants feature clean cargo pockets, articulated knees for full mobility, and adjustable ankle ties. Finished with a heavy garment wash for a lived-in feel.",images:["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Olive Green",value:"#556B2F"},{name:"Slate Grey",value:"#708090"}],sizes:["28","30","32","34","36"]},inventory:15,relatedProducts:[4,14,7],crossSellProducts:[11],upsellProducts:[2],reviews:[{author:"Jordan P.",rating:5,comment:"Durable construction. The pocket layout is sleek rather than bulky. Highly recommend.",date:"2026-04-18"}]},{id:6,title:"Pleated Satin Skirt - Emerald",sku:"W-SKIR-PSS-006",price:139,category:"Women",category2:"Skirts",category3:"Satin",tags:["Pleated","Satin","Skirts","Autumn"],rating:4.7,reviewCount:16,description:"This fluid midi skirt is crafted from premium satin with structured knife pleats that expand gracefully as you move. Features a comfortable hidden elastic waistband and a clean edge hem.",images:["https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Emerald Green",value:"#046307"},{name:"Midnight Black",value:"#0A0A0C"}],sizes:["XS","S","M","L"]},inventory:3,relatedProducts:[3,8,9],crossSellProducts:[10],upsellProducts:[1],reviews:[{author:"Jessica S.",rating:5,comment:"Beautiful movement! The emerald color is rich and elegant. Elastic waist makes it super comfortable.",date:"2026-05-11"}]},{id:7,title:"Minimalist Leather Chelsea Boots",sku:"M-SHOE-MLC-007",price:249,category:"Men",category2:"Shoes",category3:"Boots",tags:["Leather","Chelsea","Minimalist","Footwear"],rating:4.8,reviewCount:31,description:"An dressy minimalist boot hand-constructed in Portugal from smooth calfskin leather. Featuring flexible elastic side panels, custom pull tabs, and a Blake-stitched leather sole with custom rubber inserts for traction.",images:["https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=600","https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Charcoal Black",value:"#1F1F1F"},{name:"Chestnut Tan",value:"#8B5A2B"}],sizes:["8","9","10","11","12"]},inventory:8,relatedProducts:[2,12,14],crossSellProducts:[15],upsellProducts:[2],reviews:[{author:"Arthur L.",rating:5,comment:"Extremely comfortable right out of the box. Beautiful silhouette. Dress up or down.",date:"2026-05-01"}]},{id:8,title:"Chunky Knit Wool Cardigan",sku:"W-SWEA-CKW-008",price:169,category:"Women",category2:"Sweaters",category3:"Knitwear",tags:["Wool","Chunky","Knit","Cardigan"],rating:4.7,reviewCount:22,description:"Knit from 100% extra-fine merino wool, this chunky oversized cardigan features a deep V-neckline, tortoise-shell buttons, and textured cable stitch panels. Perfectly cosy yet structurally sophisticated.",images:["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Oatmeal Cream",value:"#EAE6DF"},{name:"Sage Mist",value:"#B2BEB5"}],sizes:["S","M","L","XL"]},inventory:10,relatedProducts:[1,6,13],crossSellProducts:[10],upsellProducts:[1],reviews:[{author:"Chloe B.",rating:4,comment:"Incredibly thick and cozy cardigan. Love the Oatmeal color. Pockets are a great size too.",date:"2026-05-30"}]},{id:9,title:"Gold Link Toggle Necklace",sku:"A-JEWL-GLT-009",price:79,category:"Accessories",category2:"Jewelry",category3:"Necklaces",tags:["Gold","Jewelry","Link","Minimalist"],rating:4.6,reviewCount:18,description:"An classic staple piece. Double-dipped in 18k gold over recycled sterling silver, featuring a custom paperclip link pattern and a structural front toggle closure. Designed to be layered or worn solo.",images:["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"18K Gold Plated",value:"#FFD700"}],sizes:['One Size (18")']},inventory:35,relatedProducts:[3,10,13],crossSellProducts:[10,3],upsellProducts:[3],reviews:[{author:"Marie P.",rating:5,comment:"Sturdy weight, beautiful shiny gold finish. Toggle is solid and holds securely.",date:"2026-05-09"}]},{id:10,title:"Suede Crossbody Bag - Espresso",sku:"A-BAG-SCB-010",price:220,salePrice:195,category:"Accessories",category2:"Bags",category3:"Leather Goods",tags:["Suede","Bag","Crossbody","Luxury"],rating:4.8,reviewCount:15,description:"Structured saddle silhouette handcrafted from Italian suede and smooth box-calf leather trims. Features a magnetic foldover flap, cotton canvas lining, and a internal zip pocket for secure organization.",images:["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Espresso Suede",value:"#4B382A"},{name:"Black Suede",value:"#121212"}],sizes:["Medium"]},inventory:7,relatedProducts:[1,3,8],crossSellProducts:[9,15],upsellProducts:[1],reviews:[{author:"Nora D.",rating:5,comment:"The suede is so rich. Compact but fits all my essentials. Magnetic lock works flawlessly.",date:"2026-04-29"}]},{id:11,title:"Classic Aviator Sunglasses",sku:"A-GLASS-CAS-011",price:125,category:"Accessories",category2:"Eyewear",category3:"Sunglasses",tags:["Sunglasses","Aviator","Classic","UV-Protection"],rating:4.5,reviewCount:14,description:"Timeless aviator styling built with lightweight Japanese titanium frames, polarizing dark grey scratch-resistant lenses, and acetate temple tips. Complete 100% UVA/UVB ray shielding.",images:["https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Gold Frame",value:"#DAA520"},{name:"Black Frame",value:"#000000"}],sizes:["Standard"]},inventory:40,relatedProducts:[2,4,5],crossSellProducts:[4],upsellProducts:[2],reviews:[{author:"Tom C.",rating:5,comment:"Extremely light frames. Polarization makes everything crystal clear. Very satisfied.",date:"2026-05-18"}]},{id:12,title:"Luxury Tailored Blazer",sku:"M-SUIT-LTB-012",price:299,category:"Men",category2:"Suits",category3:"Blazers",tags:["Tailored","Blazer","Wool","Office"],rating:4.7,reviewCount:11,description:"Crafted in dynamic hopsack wool from renowned Biella mills, this unstructured blazer offers a modern drape, soft shoulders, and patch utility pockets. Wrinkle resistant and highly breathable.",images:["https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Navy Blue",value:"#002040"},{name:"Charcoal Grey",value:"#36454F"}],sizes:["38R","40R","42R","44R"]},inventory:9,relatedProducts:[2,7,14],crossSellProducts:[15],upsellProducts:[7],reviews:[{author:"Gavin W.",rating:4,comment:"Fantastic hopsack drape. Lightweight enough for spring. Tailoring is clean and smart.",date:"2026-05-25"}]},{id:13,title:"Wide-Leg Crepe Trousers",sku:"W-PANT-WLC-013",price:149,category:"Women",category2:"Pants",category3:"Formal",tags:["Wide-Leg","Crepe","Formal","High-Waist"],rating:4.6,reviewCount:20,description:"Cut with a flattering high-waist and deep double pleats, these trousers are crafted from fluid Japanese crepe. Features structured side slash pockets and clean back welt pockets.",images:["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Cream White",value:"#FFFDD0"},{name:"Midnight Black",value:"#0A0A0C"}],sizes:["0","2","4","6","8","10"]},inventory:14,relatedProducts:[1,3,8],crossSellProducts:[9,10],upsellProducts:[1],reviews:[{author:"Rebecca V.",rating:5,comment:"Drapes beautifully. Long enough to wear with high heels. Extremely sleek fabric.",date:"2026-05-19"}]},{id:14,title:"Ribbed Mock Neck Knit",sku:"M-SWEA-RMN-014",price:99,salePrice:79,category:"Men",category2:"Sweaters",category3:"Knitwear",tags:["Ribbed","Mock-Neck","Knit","Winter"],rating:4.6,reviewCount:16,description:"Knitted from a premium extra-fine merino and cotton blend in a dense vertical cardigan rib. Classic mock neck collar provides a structured, modern frame, perfect for clean layering under topcoats.",images:["https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Oatmeal Grey",value:"#BEBFC5"},{name:"Obsidian Black",value:"#151515"}],sizes:["S","M","L","XL"]},inventory:18,relatedProducts:[2,4,7],crossSellProducts:[15],upsellProducts:[12],reviews:[{author:"Mark D.",rating:5,comment:"The mock neck height is perfect, doesn't choke. Warm, soft material and is holding its shape well.",date:"2026-05-04"}]},{id:15,title:"Cashmere Scarf - Oatmeal",sku:"A-SCAR-CSO-015",price:110,category:"Accessories",category2:"Scarves",category3:"Winter Accessories",tags:["Cashmere","Scarf","Oatmeal","Warmth"],rating:4.8,reviewCount:25,description:"Sumptuously soft cashmere scarf spun in a historic Scottish mill. Trimmed with clean twist fringes, this generous size scarf protects from winds with insulating warmth.",images:["https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600"],variants:{colors:[{name:"Oatmeal Cream",value:"#DFD9D0"},{name:"Camel",value:"#C19A6B"},{name:"Charcoal Grey",value:"#4A4A4A"}],sizes:["One Size"]},inventory:22,relatedProducts:[1,2,8],crossSellProducts:[10],upsellProducts:[1],reviews:[{author:"Julia T.",rating:5,comment:"Incredibly soft. Worth every penny. The oatmeal is a beautiful neutral shade.",date:"2026-05-22"}]}];function A(t){return F.find(e=>e.id===parseInt(t))}function ae(t,e=4){return!t||!t.relatedProducts?[]:t.relatedProducts.map(s=>A(s)).filter(Boolean).slice(0,e)}function oe(t,e=4){return!t||!t.upsellProducts?[]:t.upsellProducts.map(s=>A(s)).filter(Boolean).slice(0,e)}const O="fashion_cart",B="fashion_wishlist",L="fashion_coupon",z="fashion_recently_viewed",_={WELCOME20:{type:"percent",value:20},FASHION10:{type:"percent",value:10},SAVESHIP:{type:"shipping",value:0}};function h(){const t=localStorage.getItem(O);return t?JSON.parse(t):[]}function S(t){localStorage.setItem(O,JSON.stringify(t)),window.dispatchEvent(new CustomEvent("cart-updated",{detail:t}))}function I(){const t=localStorage.getItem(B);return t?JSON.parse(t):[]}function W(t){localStorage.setItem(B,JSON.stringify(t)),window.dispatchEvent(new CustomEvent("wishlist-updated",{detail:t}))}function R(){return localStorage.getItem(L)||null}function U(t){const e=t?t.trim().toUpperCase():null;return e?_[e]?(localStorage.setItem(L,e),window.dispatchEvent(new CustomEvent("coupon-updated",{detail:e})),{success:!0,message:`Coupon ${e} applied!`,discount:_[e]}):{success:!1,message:"Invalid coupon code"}:(localStorage.removeItem(L),window.dispatchEvent(new CustomEvent("coupon-updated",{detail:null})),{success:!0,message:"Coupon removed"})}function $(){const t=localStorage.getItem(z);return t?JSON.parse(t):[]}function ie(t){let e=$();e=e.filter(s=>s!==t),e.unshift(t),e=e.slice(0,5),localStorage.setItem(z,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("recently-viewed-updated",{detail:e}))}function ne(t,e=1,s=null,a=null){const r=A(t);if(!r)return null;const i=s||(r.variants.colors[0]?r.variants.colors[0].name:"Default"),o=a||r.variants.sizes[0]||"One Size";let n=h();const d=n.findIndex(l=>l.id===t&&l.color===i&&l.size===o),c=r.salePrice||r.price;return d>-1?n[d].quantity+=e:n.push({id:r.id,title:r.title,price:c,originalPrice:r.price,sku:r.sku,image:r.images[0],category:r.category,category2:r.category2,category3:r.category3,color:i,size:o,quantity:e}),S(n),{id:t,title:r.title,price:c,quantity:e,color:i,size:o,category:r.category}}function E(t,e,s,a){let r=h();const i=r.findIndex(o=>o.id===t&&o.color===e&&o.size===s);if(i>-1)if(a<=0){const o=r[i];return r.splice(i,1),S(r),{removed:!0,item:o}}else return r[i].quantity=a,S(r),{removed:!1,item:r[i]};return null}function H(t,e,s){return E(t,e,s,0)}function ce(t){let e=I();const s=e.indexOf(t);let a=!1;return s>-1?e.splice(s,1):(e.push(t),a=!0),W(e),a}function le(t){return I().includes(t)}function q(){const e=h().reduce((c,l)=>c+l.price*l.quantity,0);let s=0;const a=R();let r=!1;if(a&&_[a]){const c=_[a];c.type==="percent"?s=e*(c.value/100):c.type==="shipping"&&(r=!0)}const i=Math.max(0,e-s),o=i*.05;let n=15;(e===0||e-s>=150||r)&&(n=0);const d=i+o+n;return{subtotal:parseFloat(e.toFixed(2)),discount:parseFloat(s.toFixed(2)),tax:parseFloat(o.toFixed(2)),shipping:parseFloat(n.toFixed(2)),total:parseFloat(d.toFixed(2))}}function de(){S([]),U(null)}function J(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function V(t){const e=Date.now(),s=Math.floor(Math.random()*1e6);return`evt_${t.toLowerCase()}_${e}_${s}`}function G(){let t=localStorage.getItem("tracking_client_id");if(!t){const e=Math.floor(Math.random()*1e9),s=Math.floor(Date.now()/1e3);t=`GA1.1.${e}.${s}`,localStorage.setItem("tracking_client_id",t)}return t}function K(){let t=sessionStorage.getItem("tracking_session_id");return t||(t=Math.floor(Math.random()*1e9).toString(),sessionStorage.setItem("tracking_session_id",t)),t}function x(t,e,s=365){const a=new Date;a.setTime(a.getTime()+s*24*60*60*1e3);const r="; expires="+a.toUTCString();document.cookie=t+"="+(e||"")+r+"; path=/; SameSite=Lax; Secure"}function p(t){const e=t+"=",s=document.cookie.split(";");for(let a=0;a<s.length;a++){let r=s[a];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null}function M(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}async function m(t){if(!t)return null;const e=t.trim().toLowerCase();if(window.crypto&&window.crypto.subtle)try{const o=new TextEncoder().encode(e),n=await window.crypto.subtle.digest("SHA-256",o);return Array.from(new Uint8Array(n)).map(l=>l.toString(16).padStart(2,"0")).join("")}catch(o){console.warn("Subtle crypto error, using fallback hashing:",o)}let s=5381,a=52711;for(let o=0;o<e.length;o++){const n=e.charCodeAt(o);s=(s<<5)+s^n,a=(a<<5)+a^n}const r=Math.abs(s).toString(16).padStart(8,"0"),i=Math.abs(a).toString(16).padStart(8,"0");return r+i}function D(){const t={},e=window.location.search.substring(1);if(!e)return t;const s=e.split("&");for(let a=0;a<s.length;a++){const r=s[a].split("=");r[0]&&(t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||""))}return t}const T="fashion_current_user",v="fashion_registered_users",P=[{customer_id:"usr_default_77",customer_email:"customer@example.com",customer_phone:"+15551234567",customer_first_name:"Eleanor",customer_last_name:"Vance",customer_address:"742 Evergreen Terrace",customer_city:"Springfield",customer_state:"IL",customer_country:"US",customer_postal_code:"62704",customer_type:"VIP",password:"password123",orders:[{order_id:"ord_1024",date:"2026-05-12",total:420,items:3,status:"Delivered"},{order_id:"ord_1011",date:"2026-04-05",total:110,items:1,status:"Delivered"}]}];function k(){const t=localStorage.getItem(v);return t?JSON.parse(t):(localStorage.setItem(v,JSON.stringify(P)),P)}function f(){const t=localStorage.getItem(T);return t?JSON.parse(t):null}function ue(t){const e=k();if(e.find(a=>a.customer_email.toLowerCase()===t.email.toLowerCase()))return{success:!1,message:"Email already registered"};const s={customer_id:"usr_"+J().substring(0,8),customer_email:t.email,customer_phone:t.phone||"",customer_first_name:t.firstName||"",customer_last_name:t.lastName||"",customer_address:t.address||"",customer_city:t.city||"",customer_state:t.state||"",customer_country:t.country||"US",customer_postal_code:t.zip||"",customer_type:"Retail",password:t.password,orders:[]};return e.push(s),localStorage.setItem(v,JSON.stringify(e)),C(s),{success:!0,user:s}}function me(t,e){const a=k().find(r=>r.customer_email.toLowerCase()===t.toLowerCase()&&r.password===e);return a?(C(a),{success:!0,user:a}):{success:!1,message:"Invalid email or password"}}function j(){localStorage.removeItem(T),window.dispatchEvent(new CustomEvent("auth-changed",{detail:null}))}function ge(t){const e=f();if(!e)return{success:!1,message:"Not logged in"};const s={...e,customer_phone:t.phone??e.customer_phone,customer_first_name:t.firstName??e.customer_first_name,customer_last_name:t.lastName??e.customer_last_name,customer_address:t.address??e.customer_address,customer_city:t.city??e.customer_city,customer_state:t.state??e.customer_state,customer_country:t.country??e.customer_country,customer_postal_code:t.zip??e.customer_postal_code};C(s);const a=k(),r=a.findIndex(i=>i.customer_id===e.customer_id);return r>-1&&(a[r]=s,localStorage.setItem(v,JSON.stringify(a))),{success:!0,user:s}}function pe(t){const e=f();if(!e)return;e.orders=e.orders||[],e.orders.unshift(t),C(e);const s=k(),a=s.findIndex(r=>r.customer_id===e.customer_id);a>-1&&(s[a].orders=e.orders,localStorage.setItem(v,JSON.stringify(s)))}function C(t){const e={...t};delete e.password,localStorage.setItem(T,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("auth-changed",{detail:e}))}const w="fashion_server_tracking_events",b="fashion_client_tracking_events";function N(){const t=D();if(["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(r=>{t[r]&&sessionStorage.setItem(r,t[r])}),["gclid","gbraid","wbraid","fbclid","ttclid"].forEach(r=>{t[r]&&x(`track_${r}`,t[r],30)}),t.fbclid){const i=`fb.1.${Date.now()}.${t.fbclid}`;x("_fbc",i,30)}let a=p("_fbp");if(!a){const r=Date.now(),i=Math.floor(Math.random()*1e9);a=`fb.1.${r}.${i}`,x("_fbp",a,90)}}function X(){const t=D(),e=f();return{client_id:G(),session_id:K(),user_id:e?e.customer_id:null,external_id:e?e.customer_id:null,fbc:p("_fbc")||p("track_fbclid")||null,fbp:p("_fbp")||null,gclid:p("track_gclid")||t.gclid||null,gbraid:p("track_gbraid")||t.gbraid||null,wbraid:p("track_wbraid")||t.wbraid||null,ttclid:p("track_ttclid")||t.ttclid||null,utm_source:sessionStorage.getItem("utm_source")||null,utm_medium:sessionStorage.getItem("utm_medium")||null,utm_campaign:sessionStorage.getItem("utm_campaign")||null,utm_content:sessionStorage.getItem("utm_content")||null,utm_term:sessionStorage.getItem("utm_term")||null}}function Y(t=!0){const e=f();return!e||!t?{}:{customer_id:e.customer_id,customer_email:e.customer_email,customer_phone:e.customer_phone,customer_first_name:e.customer_first_name,customer_last_name:e.customer_last_name,customer_city:e.customer_city,customer_state:e.customer_state,customer_country:e.customer_country,customer_postal_code:e.customer_postal_code,customer_type:e.customer_type||"Retail"}}function y(t){return t.map((e,s)=>({item_id:e.id.toString(),item_name:e.title,item_brand:"Aura Wear",item_category:e.category,item_category2:e.category2||"",item_category3:e.category3||"",item_variant:`${e.color} / ${e.size}`,item_sku:e.sku,price:e.price,quantity:e.quantity,currency:"USD",index:s+1}))}async function g(t,e={}){N();const s=V(t),a=X(),r=Y(),i={email:r.customer_email?await m(r.customer_email):null,phone:r.customer_phone?await m(r.customer_phone):null,first_name:r.customer_first_name?await m(r.customer_first_name):null,last_name:r.customer_last_name?await m(r.customer_last_name):null,city:r.customer_city?await m(r.customer_city):null,state:r.customer_state?await m(r.customer_state):null,country:r.customer_country?await m(r.customer_country):null,zip_code:r.customer_postal_code?await m(r.customer_postal_code):null,external_id:r.customer_id?await m(r.customer_id):null},o={event_name:t,event_id:s,event_time:Math.floor(Date.now()/1e3),user_data:{...a,...r,hashed:i},custom_data:e};window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:t,event_id:s,client_id:a.client_id,session_id:a.session_id,user_properties:{user_id:a.user_id,customer_type:r.customer_type},ecommerce:e});const n=localStorage.getItem(b)?JSON.parse(localStorage.getItem(b)):[];n.unshift({timestamp:new Date().toLocaleTimeString(),eventName:t,eventId:s,payload:{event:t,event_id:s,...e}}),localStorage.setItem(b,JSON.stringify(n.slice(0,50))),window.dispatchEvent(new CustomEvent("tracking-event-triggered",{detail:{eventName:t,type:"client"}})),Q(o)}function Q(t){const e=localStorage.getItem(w)?JSON.parse(localStorage.getItem(w)):[],s={data:[{event_name:t.event_name,event_time:t.event_time,event_id:t.event_id,event_source_url:window.location.href,action_source:"website",user_data:{em:t.user_data.hashed.email,ph:t.user_data.hashed.phone,fn:t.user_data.hashed.first_name,ln:t.user_data.hashed.last_name,ct:t.user_data.hashed.city,st:t.user_data.hashed.state,country:t.user_data.hashed.country,db:null,zp:t.user_data.hashed.zip_code,external_id:t.user_data.hashed.external_id,client_ip_address:"192.168.1.1",client_user_agent:navigator.userAgent,fbc:t.user_data.fbc,fbp:t.user_data.fbp},custom_data:{currency:t.custom_data.currency||"USD",value:t.custom_data.value||0,content_type:"product",contents:t.custom_data.items?t.custom_data.items.map(a=>({id:a.item_id,quantity:a.quantity,price:a.price})):[]}}]};e.unshift({timestamp:new Date().toLocaleTimeString(),eventName:t.event_name,eventId:t.event_id,capiPayload:s}),localStorage.setItem(w,JSON.stringify(e.slice(0,50))),window.dispatchEvent(new CustomEvent("tracking-event-triggered",{detail:{eventName:t.event_name,type:"server"}}))}function Z(){localStorage.removeItem(b),localStorage.removeItem(w),window.dispatchEvent(new CustomEvent("tracking-logs-cleared"))}class ee extends HTMLElement{connectedCallback(){this.render(),this.setupListeners(),this.updateCartCount(),this.updateWishlistCount(),this.updateAuthStatus()}render(){var a,r,i,o,n;f(),this.innerHTML=`
      <div class="header-container">
        <div class="container header-inner">
          <a href="index.html" class="logo">AURA<span>WEAR</span></a>
          
          <ul class="nav-menu">
            <li><a href="index.html" class="nav-link" id="nav-home">Home</a></li>
            <li><a href="shop.html" class="nav-link" id="nav-shop">Shop</a></li>
            <li><a href="about.html" class="nav-link" id="nav-about">About</a></li>
            <li><a href="contact.html" class="nav-link" id="nav-contact">Contact</a></li>
            <li><a href="faq.html" class="nav-link" id="nav-faq">FAQs</a></li>
          </ul>
          
          <div class="header-actions">
            <button class="action-btn" id="search-trigger" title="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            <a href="wishlist.html" class="action-btn" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span class="badge-count" id="wishlist-badge" style="display:none;">0</span>
            </a>
            
            <button class="action-btn" id="cart-trigger" title="Shopping Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span class="badge-count" id="cart-badge" style="display:none;">0</span>
            </button>
            
            <span class="flex align-center gap-xs" id="auth-actions-wrap">
              <!-- Auth actions are loaded dynamically -->
            </span>
          </div>
        </div>
      </div>

      <!-- Search Overlay Modal -->
      <div id="search-modal" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.9); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); z-index:2000; opacity:0; pointer-events:none; transition:var(--transition-normal); display:flex; align-items:center; justify-content:center;">
        <div id="search-modal-close" style="position:absolute; top:24px; right:24px; color:var(--text-secondary); cursor:pointer; font-size:2rem; transition:var(--transition-fast);">&times;</div>
        <div class="container" style="max-width:600px; text-align:center;">
          <h3 style="font-size:1.8rem; margin-bottom:var(--spacing-md); text-transform:uppercase; letter-spacing:0.05em; color:var(--accent-gold);">Search Products</h3>
          <form id="search-form" style="display:flex; border-bottom:2px solid var(--accent-gold); padding:0.5rem 0;">
            <input type="text" id="search-input" placeholder="Type here..." autocomplete="off" style="width:100%; font-size:1.5rem; color:#fff; background:none; border:none; outline:none; text-align:center;">
            <button type="submit" style="color:var(--accent-gold); cursor:pointer; padding:0 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Slide-out Cart Drawer -->
      <div class="cart-drawer-overlay" id="cart-overlay">
        <div class="cart-drawer" id="cart-drawer-panel">
          <div class="cart-drawer-header">
            <span class="cart-drawer-title">Shopping Cart (<span id="cart-drawer-badge">0</span>)</span>
            <span class="cart-drawer-close" id="cart-drawer-close-btn">&times;</span>
          </div>
          
          <div class="cart-drawer-items" id="cart-drawer-items-list">
            <!-- Dynamic Cart Items Rendered Here -->
          </div>
          
          <div class="cart-drawer-footer">
            <div class="cart-subtotal-row">
              <span>Subtotal:</span>
              <span id="cart-drawer-subtotal">$0.00</span>
            </div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:var(--spacing-md); text-align:center;">Shipping & taxes calculated at checkout.</p>
            <div class="flex flex-col gap-sm">
              <a href="cart.html" class="btn btn-secondary text-center" style="width:100%;">View Cart</a>
              <a href="checkout.html" class="btn btn-primary text-center" id="drawer-checkout-btn" style="width:100%;">Proceed to Checkout</a>
            </div>
          </div>
        </div>
      </div>
    `;const s=window.location.pathname.split("/").pop();s==="index.html"||s===""?(a=this.querySelector("#nav-home"))==null||a.classList.add("active"):s==="shop.html"?(r=this.querySelector("#nav-shop"))==null||r.classList.add("active"):s==="about.html"?(i=this.querySelector("#nav-about"))==null||i.classList.add("active"):s==="contact.html"?(o=this.querySelector("#nav-contact"))==null||o.classList.add("active"):s==="faq.html"&&((n=this.querySelector("#nav-faq"))==null||n.classList.add("active"))}setupListeners(){const e=this.querySelector("#search-trigger"),s=this.querySelector("#search-modal"),a=this.querySelector("#search-modal-close"),r=this.querySelector("#search-form"),i=this.querySelector("#search-input"),o=this.querySelector("#cart-trigger"),n=this.querySelector("#cart-overlay"),d=this.querySelector("#cart-drawer-close-btn");e.addEventListener("click",()=>{s.style.opacity="1",s.style.pointerEvents="auto",i.focus()}),a.addEventListener("click",()=>{s.style.opacity="0",s.style.pointerEvents="none"}),r.addEventListener("submit",c=>{c.preventDefault();const l=i.value.trim();l&&(g("search",{search_term:l}),window.location.href=`shop.html?search=${encodeURIComponent(l)}`)}),o.addEventListener("click",()=>{this.openCartDrawer()}),d.addEventListener("click",()=>{this.closeCartDrawer()}),n.addEventListener("click",c=>{c.target===n&&this.closeCartDrawer()}),window.addEventListener("cart-updated",()=>{this.updateCartCount(),this.renderCartDrawerItems()}),window.addEventListener("wishlist-updated",()=>{this.updateWishlistCount()}),window.addEventListener("auth-changed",()=>{this.updateAuthStatus()})}openCartDrawer(){this.querySelector("#cart-overlay").classList.add("active"),this.renderCartDrawerItems();const s=h();if(s.length>0){const a=q();g("view_cart",{currency:"USD",value:a.subtotal,items:y(s)})}}closeCartDrawer(){this.querySelector("#cart-overlay").classList.remove("active")}updateCartCount(){const s=h().reduce((i,o)=>i+o.quantity,0),a=this.querySelector("#cart-badge"),r=this.querySelector("#cart-drawer-badge");a&&(s>0?(a.textContent=s,a.style.display="flex"):a.style.display="none"),r&&(r.textContent=s)}updateWishlistCount(){const e=I(),s=this.querySelector("#wishlist-badge");s&&(e.length>0?(s.textContent=e.length,s.style.display="flex"):s.style.display="none")}updateAuthStatus(){const e=this.querySelector("#auth-actions-wrap");if(!e)return;const s=f();s?(e.innerHTML=`
        <a href="dashboard.html" class="action-btn" title="Account Dashboard" style="font-size:0.8rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:4px; color:var(--accent-gold);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
          </svg>
          ${s.customer_first_name||"Account"}
        </a>
        <button class="action-btn" id="logout-trigger" title="Log Out" style="color:var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      `,e.querySelector("#logout-trigger").addEventListener("click",()=>{j(),g("logout"),window.location.href="index.html"})):e.innerHTML=`
        <a href="login.html" class="action-btn" title="Log In" style="font-size:0.8rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:4px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
          </svg>
          Login
        </a>
      `}renderCartDrawerItems(){const e=this.querySelector("#cart-drawer-items-list"),s=this.querySelector("#cart-drawer-subtotal"),a=this.querySelector("#drawer-checkout-btn");if(!e)return;const r=h(),i=q();if(s&&(s.textContent=M(i.subtotal)),r.length===0){e.innerHTML=`
        <div class="cart-drawer-empty">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-muted);">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>Your shopping cart is empty.</p>
          <a href="shop.html" class="btn btn-primary" style="margin-top:var(--spacing-sm);">Shop New Arrivals</a>
        </div>
      `,a&&(a.style.pointerEvents="none");return}a&&(a.style.pointerEvents="auto"),e.innerHTML=r.map(o=>`
      <div class="drawer-item" data-id="${o.id}" data-color="${o.color}" data-size="${o.size}">
        <img class="drawer-item-img" src="${o.image}" alt="${o.title}">
        
        <div class="drawer-item-info">
          <div class="drawer-item-name">${o.title}</div>
          <div class="drawer-item-meta">${o.color} / ${o.size}</div>
          
          <div class="drawer-item-qty-price">
            <div class="qty-control">
              <span class="qty-btn dec-qty">&minus;</span>
              <span class="qty-val">${o.quantity}</span>
              <span class="qty-btn inc-qty">&plus;</span>
            </div>
            <span style="font-weight:600;">${M(o.price*o.quantity)}</span>
          </div>
        </div>
        
        <div class="drawer-item-remove remove-item-btn">&times;</div>
      </div>
    `).join(""),this.querySelectorAll(".drawer-item").forEach(o=>{const n=parseInt(o.getAttribute("data-id")),d=o.getAttribute("data-color"),c=o.getAttribute("data-size"),l=r.find(u=>u.id===n&&u.color===d&&u.size===c);o.querySelector(".dec-qty").addEventListener("click",()=>{const u=E(n,d,c,l.quantity-1);u&&u.removed&&g("remove_from_cart",{currency:"USD",value:u.item.price,items:y([u.item])})}),o.querySelector(".inc-qty").addEventListener("click",()=>{E(n,d,c,l.quantity+1),g("add_to_cart",{currency:"USD",value:l.price,items:y([{...l,quantity:1}])})}),o.querySelector(".remove-item-btn").addEventListener("click",()=>{const u=H(n,d,c);u&&g("remove_from_cart",{currency:"USD",value:u.item.price*u.item.quantity,items:y([u.item])})})})}}customElements.define("app-header",ee);class te extends HTMLElement{connectedCallback(){this.render(),this.setupNewsletter()}render(){this.innerHTML=`
      <div class="container">
        <div class="footer-grid">
          <div class="footer-logo-wrap">
            <a href="index.html" class="logo" style="margin-bottom: var(--spacing-md);">AURA<span>WEAR</span></a>
            <p>A premium apparel experience curated for the modern minimalist. Structured lines, luxury organic fibers, and responsible design.</p>
            <div class="footer-socials">
              <a href="#" class="social-link" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="social-link" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" class="social-link" title="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM10 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="footer-title">Collections</h4>
            <ul class="footer-links">
              <li><a href="shop.html?category=Women">Women's Apparel</a></li>
              <li><a href="shop.html?category=Men">Men's Capsule</a></li>
              <li><a href="shop.html?category=Accessories">Luxe Accessories</a></li>
              <li><a href="shop.html">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="footer-title">Customer Care</h4>
            <ul class="footer-links">
              <li><a href="faq.html">FAQs</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="about.html">About Our Brand</a></li>
              <li><a href="shipping.html">Shipping Details</a></li>
              <li><a href="refunds.html">Returns & Refunds</a></li>
            </ul>
          </div>
          
          <div class="footer-newsletter">
            <h4 class="footer-title">Newsletter</h4>
            <p>Subscribe to receive 15% off your first order, access to private collections, and weekly editorial drops.</p>
            <form class="newsletter-form" id="footer-newsletter-form">
              <input type="email" class="newsletter-input" id="newsletter-email-input" placeholder="Your Email Address" required autocomplete="email">
              <button type="submit" class="newsletter-btn">Join</button>
            </form>
            <div id="newsletter-success-msg" style="display:none; color:var(--color-success); font-size:0.85rem; margin-top:var(--spacing-sm); font-weight:500;">
              Welcome to Aura Wear! Check your inbox for your 15% code.
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div>&copy; 2026 Aura Wear Apparel Co. All Rights Reserved.</div>
          <div class="footer-bottom-links">
            <a href="privacy.html">Privacy Policy</a>
            <span style="color:var(--text-muted);">|</span>
            <a href="terms.html">Terms & Conditions</a>
          </div>
        </div>
      </div>
    `}setupNewsletter(){const e=this.querySelector("#footer-newsletter-form"),s=this.querySelector("#newsletter-email-input"),a=this.querySelector("#newsletter-success-msg");e&&e.addEventListener("submit",r=>{r.preventDefault();const i=s.value.trim();i&&(g("generate_lead",{lead_source:"footer_newsletter",email_address:i}),g("contact_form_submit",{form_id:"footer_newsletter_form",form_name:"Footer Newsletter Subscription",lead_email:i}),e.style.display="none",a&&(a.style.display="block"),window.dispatchEvent(new CustomEvent("show-toast",{detail:{message:"Successfully subscribed to our newsletter! Code: WELCOME20",type:"success"}})))})}}customElements.define("app-footer",te);class re extends HTMLElement{constructor(){super(),this.activeTab="client",this.isOpen=!1}connectedCallback(){this.render(),this.setupListeners(),this.updateLogs()}render(){this.innerHTML=`
      <div class="analytics-debugger-trigger" id="debugger-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>

      <div class="analytics-debugger-panel" id="debugger-panel">
        <div class="debugger-header">
          <div class="debugger-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-gold);">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            TRACKING LOG CONSOLE
          </div>
          <div class="flex gap-sm align-center">
            <button class="debugger-clear" id="debugger-clear-btn">CLEAR</button>
            <div class="debugger-close" id="debugger-close-btn">&times;</div>
          </div>
        </div>
        
        <div class="debugger-tabs">
          <div class="debugger-tab ${this.activeTab==="client"?"active":""}" data-tab="client">
            BROWSER DATA LAYER
          </div>
          <div class="debugger-tab ${this.activeTab==="server"?"active":""}" data-tab="server">
            SERVER CONVERSIONS API
          </div>
        </div>
        
        <div class="debugger-console" id="debugger-console-list">
          <!-- Logs go here -->
        </div>
      </div>
    `}setupListeners(){const e=this.querySelector("#debugger-trigger"),s=this.querySelector("#debugger-panel"),a=this.querySelector("#debugger-close-btn"),r=this.querySelector("#debugger-clear-btn"),i=this.querySelectorAll(".debugger-tab");e.addEventListener("click",()=>{this.isOpen=!this.isOpen,s.classList.toggle("active",this.isOpen),e.classList.remove("has-pulse"),this.isOpen&&this.updateLogs()}),a.addEventListener("click",()=>{this.isOpen=!1,s.classList.remove("active")}),r.addEventListener("click",()=>{Z(),this.updateLogs()}),i.forEach(o=>{o.addEventListener("click",()=>{i.forEach(n=>n.classList.remove("active")),o.classList.add("active"),this.activeTab=o.getAttribute("data-tab"),this.updateLogs()})}),window.addEventListener("tracking-event-triggered",o=>{const{type:n}=o.detail;this.isOpen||e.classList.add("has-pulse"),this.updateLogs()}),window.addEventListener("tracking-logs-cleared",()=>{this.updateLogs()})}updateLogs(){const e=this.querySelector("#debugger-console-list");if(e)if(this.activeTab==="client"){const s=localStorage.getItem("tracking_client_events")?JSON.parse(localStorage.getItem("tracking_client_events")):[];if(s.length===0){e.innerHTML=`
          <div class="debugger-console-empty">
            No browser tracking events pushed yet.<br>
            <span style="font-size:0.65rem;color:var(--text-muted);">Events are pushed to window.dataLayer</span>
          </div>
        `;return}e.innerHTML=s.map(a=>`
        <div class="debugger-item-log">
          <div class="debugger-log-meta">
            <span class="debugger-log-event">${a.eventName}</span>
            <span>${a.timestamp}</span>
          </div>
          <div style="font-size:0.65rem; margin-bottom: 4px; color:var(--text-muted);">
            Event ID: <span style="color:var(--accent-gold); font-family:monospace;">${a.eventId}</span>
          </div>
          <pre class="debugger-log-payload">${this.syntaxHighlight(a.payload)}</pre>
        </div>
      `).join("")}else{const s=localStorage.getItem("fashion_server_tracking_events")?JSON.parse(localStorage.getItem("fashion_server_tracking_events")):[];if(s.length===0){e.innerHTML=`
          <div class="debugger-console-empty">
            No server-side API requests queued.<br>
            <span style="font-size:0.65rem;color:var(--text-muted);">Simulates Meta CAPI / GTM Server Streams</span>
          </div>
        `;return}e.innerHTML=s.map(a=>`
        <div class="debugger-item-log">
          <div class="debugger-log-meta">
            <span class="debugger-log-event" style="color: #e5c07b;">${a.eventName} (CAPI Stream)</span>
            <span>${a.timestamp}</span>
          </div>
          <div style="font-size:0.65rem; margin-bottom: 4px; color:var(--text-muted);">
            Event ID: <span style="color:var(--accent-gold); font-family:monospace;">${a.eventId}</span> 
            <span class="debugger-log-tag server">Deduplicated</span>
          </div>
          <pre class="debugger-log-payload">${this.syntaxHighlight(a.capiPayload)}</pre>
        </div>
      `).join("")}}syntaxHighlight(e){return typeof e!="string"&&(e=JSON.stringify(e,void 0,2)),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,function(s){let a="number";return/^"/.test(s)?/:$/.test(s)?a="key":a="string":/true|false/.test(s)?a="boolean":/null/.test(s)&&(a="null"),'<span class="'+a+'">'+s+"</span>"})}}customElements.define("analytics-debugger",re);(function(){const t=localStorage.getItem("tracking_gtm_enabled")==="true",e=localStorage.getItem("tracking_gtm_container_id");if(t&&e&&e.trim().toUpperCase().startsWith("GTM-")){const s=e.trim().toUpperCase();console.log(`[Aura Wear Tracking] Auto-injecting GTM Container: ${s}`),function(a,r,i,o,n){a[o]=a[o]||[],a[o].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var d=r.getElementsByTagName(i)[0],c=r.createElement(i),l="";c.async=!0,c.src="https://www.googletagmanager.com/gtm.js?id="+n+l,d.parentNode.insertBefore(c,d)}(window,document,"script","dataLayer",s),document.addEventListener("DOMContentLoaded",()=>{const a=document.createElement("noscript"),r=document.createElement("iframe");r.src=`https://www.googletagmanager.com/ns.html?id=${s}`,r.height="0",r.width="0",r.style.display="none",r.style.visibility="hidden",a.appendChild(r),document.body.insertBefore(a,document.body.firstChild)})}})();document.addEventListener("DOMContentLoaded",()=>{if(N(),!document.querySelector(".toast-container")){const s=document.createElement("div");s.className="toast-container",document.body.appendChild(s)}if(!document.querySelector("analytics-debugger")){const s=document.createElement("analytics-debugger");document.body.appendChild(s)}window.addEventListener("show-toast",s=>{const{message:a,type:r}=s.detail;se(a,r)});const e=window.location.pathname.split("/").pop()||"index.html";g("page_view",{page_title:document.title,page_location:window.location.href,page_path:window.location.pathname,page_identifier:e.replace(".html","")})});function se(t,e="success"){const s=document.querySelector(".toast-container");if(!s)return;const a=document.createElement("div");a.className=`toast toast-${e}`;let r="var(--accent-gold)";e==="success"&&(r="var(--color-success)"),e==="error"&&(r="var(--color-error)"),e==="warning"&&(r="var(--color-warning)"),a.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${r}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      ${e==="success"?'<polyline points="9 11 12 14 22 4"></polyline>':e==="error"?'<line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>':'<line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
    </svg>
    <div class="toast-message">${t}</div>
    <span class="toast-close">&times;</span>
  `,s.appendChild(a),a.querySelector(".toast-close").addEventListener("click",()=>{a.remove()}),setTimeout(()=>{a.style.animation="slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse",setTimeout(()=>{a.remove()},300)},4500)}export{I as A,F as P,q as a,y as b,R as c,U as d,f as e,M as f,h as g,ge as h,le as i,ne as j,ce as k,j as l,me as m,ue as n,D as o,A as p,ie as q,H as r,ae as s,g as t,E as u,oe as v,$ as w,J as x,pe as y,de as z};
