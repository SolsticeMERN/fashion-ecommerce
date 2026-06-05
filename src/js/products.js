export const PRODUCTS = [
  {
    id: 1,
    title: "Midnight Cashmere Trench Coat",
    sku: "W-COAT-MNC-001",
    price: 349.00,
    salePrice: 289.00,
    category: "Women",
    category2: "Outerwear",
    category3: "Coats",
    tags: ["Cashmere", "Trench", "Winter", "Luxury"],
    rating: 4.8,
    reviewCount: 34,
    description: "An elegant, double-breasted trench coat crafted from our finest Italian cashmere-wool blend. Features a tailored fit, adjustable belt, and structured shoulders for a timeless look that keeps you warm in style.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Midnight Black", value: "#0A0A0C" },
        { name: "Camel Tan", value: "#C19A6B" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    inventory: 12,
    relatedProducts: [2, 6, 8],
    crossSellProducts: [9, 10],
    upsellProducts: [7],
    reviews: [
      { author: "Evelyn K.", rating: 5, comment: "Absolutely gorgeous. The weight is perfect and the cashmere is incredibly soft. I get compliments every time I wear it.", date: "2026-05-15" },
      { author: "Sarah M.", rating: 4, comment: "Beautiful drape and very warm. Runs slightly large, so I size down.", date: "2026-05-28" }
    ]
  },
  {
    id: 2,
    title: "Heritage Leather Bomber Jacket",
    sku: "M-JACK-HLB-002",
    price: 399.00,
    category: "Men",
    category2: "Outerwear",
    category3: "Jackets",
    tags: ["Leather", "Bomber", "Classic", "Vintage"],
    rating: 4.9,
    reviewCount: 42,
    description: "Constructed from supple, full-grain distressed leather, this bomber jacket pays homage to heritage aviation design. Featuring heavy-duty brass zippers, ribbed cuffs, and a quilted satin lining for premium warmth.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Espresso Brown", value: "#3B2F2F" },
        { name: "Slate Black", value: "#1A1A1A" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    inventory: 5,
    relatedProducts: [7, 12, 14],
    crossSellProducts: [11, 15],
    upsellProducts: [1],
    reviews: [
      { author: "Michael T.", rating: 5, comment: "The leather quality is top-notch. Thick but flexible. Fits perfectly and looks better with age.", date: "2026-04-10" }
    ]
  },
  {
    id: 3,
    title: "Silk Slip Dress - Champagne",
    sku: "W-DRES-SSD-003",
    price: 189.00,
    salePrice: 149.00,
    category: "Women",
    category2: "Dresses",
    category3: "Satin",
    tags: ["Silk", "Slip Dress", "Cocktail", "Evening"],
    rating: 4.6,
    reviewCount: 28,
    description: "Cut on the bias for a fluid, figure-skimming fit, this pure mulberry silk slip dress features a delicate cowl neckline and adjustable spaghetti straps. The perfect piece for effortless transition from day to evening.",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Champagne Gold", value: "#F4E0A5" },
        { name: "Burgundy Red", value: "#800020" },
        { name: "Emerald Green", value: "#046307" }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    inventory: 18,
    relatedProducts: [6, 9, 13],
    crossSellProducts: [9, 10],
    upsellProducts: [1],
    reviews: [
      { author: "Elena R.", rating: 5, comment: "Stunning dress. The silk feels luxurious and the cut is highly flattering. The champagne color has a lovely sheen.", date: "2026-05-20" }
    ]
  },
  {
    id: 4,
    title: "Premium Linen Shirt - Ivory",
    sku: "M-SHIR-PLS-004",
    price: 89.00,
    category: "Men",
    category2: "Shirts",
    category3: "Linen",
    tags: ["Linen", "Summer", "Casual", "Breathable"],
    rating: 4.5,
    reviewCount: 19,
    description: "Crafted from 100% naturally breathable flax linen, this shirt features a relaxed fit, clean collar construction, and mother-of-pearl buttons. Enzyme washed for exceptional softness from the very first wear.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Ivory White", value: "#FFFFF0" },
        { name: "Sky Blue", value: "#87CEEB" },
        { name: "Sage Green", value: "#8A9A86" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    inventory: 24,
    relatedProducts: [5, 14],
    crossSellProducts: [11],
    upsellProducts: [12],
    reviews: [
      { author: "Dave H.", rating: 4, comment: "Very comfortable shirt for warm weather. Wrinkles as expected with linen, but looks relaxed.", date: "2026-05-02" }
    ]
  },
  {
    id: 5,
    title: "Urban Utility Cargo Pants",
    sku: "M-PANT-UUC-005",
    price: 119.00,
    category: "Men",
    category2: "Pants",
    category3: "Utility",
    tags: ["Cargo", "Utility", "Streetwear", "Cotton"],
    rating: 4.4,
    reviewCount: 23,
    description: "Engineered from a durable cotton-ripstop weave, these utility pants feature clean cargo pockets, articulated knees for full mobility, and adjustable ankle ties. Finished with a heavy garment wash for a lived-in feel.",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Olive Green", value: "#556B2F" },
        { name: "Slate Grey", value: "#708090" }
      ],
      sizes: ["28", "30", "32", "34", "36"]
    },
    inventory: 15,
    relatedProducts: [4, 14, 7],
    crossSellProducts: [11],
    upsellProducts: [2],
    reviews: [
      { author: "Jordan P.", rating: 5, comment: "Durable construction. The pocket layout is sleek rather than bulky. Highly recommend.", date: "2026-04-18" }
    ]
  },
  {
    id: 6,
    title: "Pleated Satin Skirt - Emerald",
    sku: "W-SKIR-PSS-006",
    price: 139.00,
    category: "Women",
    category2: "Skirts",
    category3: "Satin",
    tags: ["Pleated", "Satin", "Skirts", "Autumn"],
    rating: 4.7,
    reviewCount: 16,
    description: "This fluid midi skirt is crafted from premium satin with structured knife pleats that expand gracefully as you move. Features a comfortable hidden elastic waistband and a clean edge hem.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Emerald Green", value: "#046307" },
        { name: "Midnight Black", value: "#0A0A0C" }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    inventory: 3, // Low stock simulation
    relatedProducts: [3, 8, 9],
    crossSellProducts: [10],
    upsellProducts: [1],
    reviews: [
      { author: "Jessica S.", rating: 5, comment: "Beautiful movement! The emerald color is rich and elegant. Elastic waist makes it super comfortable.", date: "2026-05-11" }
    ]
  },
  {
    id: 7,
    title: "Minimalist Leather Chelsea Boots",
    sku: "M-SHOE-MLC-007",
    price: 249.00,
    category: "Men",
    category2: "Shoes",
    category3: "Boots",
    tags: ["Leather", "Chelsea", "Minimalist", "Footwear"],
    rating: 4.8,
    reviewCount: 31,
    description: "An dressy minimalist boot hand-constructed in Portugal from smooth calfskin leather. Featuring flexible elastic side panels, custom pull tabs, and a Blake-stitched leather sole with custom rubber inserts for traction.",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Charcoal Black", value: "#1F1F1F" },
        { name: "Chestnut Tan", value: "#8B5A2B" }
      ],
      sizes: ["8", "9", "10", "11", "12"]
    },
    inventory: 8,
    relatedProducts: [2, 12, 14],
    crossSellProducts: [15],
    upsellProducts: [2],
    reviews: [
      { author: "Arthur L.", rating: 5, comment: "Extremely comfortable right out of the box. Beautiful silhouette. Dress up or down.", date: "2026-05-01" }
    ]
  },
  {
    id: 8,
    title: "Chunky Knit Wool Cardigan",
    sku: "W-SWEA-CKW-008",
    price: 169.00,
    category: "Women",
    category2: "Sweaters",
    category3: "Knitwear",
    tags: ["Wool", "Chunky", "Knit", "Cardigan"],
    rating: 4.7,
    reviewCount: 22,
    description: "Knit from 100% extra-fine merino wool, this chunky oversized cardigan features a deep V-neckline, tortoise-shell buttons, and textured cable stitch panels. Perfectly cosy yet structurally sophisticated.",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Oatmeal Cream", value: "#EAE6DF" },
        { name: "Sage Mist", value: "#B2BEB5" }
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    inventory: 10,
    relatedProducts: [1, 6, 13],
    crossSellProducts: [10],
    upsellProducts: [1],
    reviews: [
      { author: "Chloe B.", rating: 4, comment: "Incredibly thick and cozy cardigan. Love the Oatmeal color. Pockets are a great size too.", date: "2026-05-30" }
    ]
  },
  {
    id: 9,
    title: "Gold Link Toggle Necklace",
    sku: "A-JEWL-GLT-009",
    price: 79.00,
    category: "Accessories",
    category2: "Jewelry",
    category3: "Necklaces",
    tags: ["Gold", "Jewelry", "Link", "Minimalist"],
    rating: 4.6,
    reviewCount: 18,
    description: "An classic staple piece. Double-dipped in 18k gold over recycled sterling silver, featuring a custom paperclip link pattern and a structural front toggle closure. Designed to be layered or worn solo.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "18K Gold Plated", value: "#FFD700" }
      ],
      sizes: ["One Size (18\")"]
    },
    inventory: 35,
    relatedProducts: [3, 10, 13],
    crossSellProducts: [10, 3],
    upsellProducts: [3],
    reviews: [
      { author: "Marie P.", rating: 5, comment: "Sturdy weight, beautiful shiny gold finish. Toggle is solid and holds securely.", date: "2026-05-09" }
    ]
  },
  {
    id: 10,
    title: "Suede Crossbody Bag - Espresso",
    sku: "A-BAG-SCB-010",
    price: 220.00,
    salePrice: 195.00,
    category: "Accessories",
    category2: "Bags",
    category3: "Leather Goods",
    tags: ["Suede", "Bag", "Crossbody", "Luxury"],
    rating: 4.8,
    reviewCount: 15,
    description: "Structured saddle silhouette handcrafted from Italian suede and smooth box-calf leather trims. Features a magnetic foldover flap, cotton canvas lining, and a internal zip pocket for secure organization.",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Espresso Suede", value: "#4B382A" },
        { name: "Black Suede", value: "#121212" }
      ],
      sizes: ["Medium"]
    },
    inventory: 7,
    relatedProducts: [1, 3, 8],
    crossSellProducts: [9, 15],
    upsellProducts: [1],
    reviews: [
      { author: "Nora D.", rating: 5, comment: "The suede is so rich. Compact but fits all my essentials. Magnetic lock works flawlessly.", date: "2026-04-29" }
    ]
  },
  {
    id: 11,
    title: "Classic Aviator Sunglasses",
    sku: "A-GLASS-CAS-011",
    price: 125.00,
    category: "Accessories",
    category2: "Eyewear",
    category3: "Sunglasses",
    tags: ["Sunglasses", "Aviator", "Classic", "UV-Protection"],
    rating: 4.5,
    reviewCount: 14,
    description: "Timeless aviator styling built with lightweight Japanese titanium frames, polarizing dark grey scratch-resistant lenses, and acetate temple tips. Complete 100% UVA/UVB ray shielding.",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Gold Frame", value: "#DAA520" },
        { name: "Black Frame", value: "#000000" }
      ],
      sizes: ["Standard"]
    },
    inventory: 40,
    relatedProducts: [2, 4, 5],
    crossSellProducts: [4],
    upsellProducts: [2],
    reviews: [
      { author: "Tom C.", rating: 5, comment: "Extremely light frames. Polarization makes everything crystal clear. Very satisfied.", date: "2026-05-18" }
    ]
  },
  {
    id: 12,
    title: "Luxury Tailored Blazer",
    sku: "M-SUIT-LTB-012",
    price: 299.00,
    category: "Men",
    category2: "Suits",
    category3: "Blazers",
    tags: ["Tailored", "Blazer", "Wool", "Office"],
    rating: 4.7,
    reviewCount: 11,
    description: "Crafted in dynamic hopsack wool from renowned Biella mills, this unstructured blazer offers a modern drape, soft shoulders, and patch utility pockets. Wrinkle resistant and highly breathable.",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Navy Blue", value: "#002040" },
        { name: "Charcoal Grey", value: "#36454F" }
      ],
      sizes: ["38R", "40R", "42R", "44R"]
    },
    inventory: 9,
    relatedProducts: [2, 7, 14],
    crossSellProducts: [15],
    upsellProducts: [7],
    reviews: [
      { author: "Gavin W.", rating: 4, comment: "Fantastic hopsack drape. Lightweight enough for spring. Tailoring is clean and smart.", date: "2026-05-25" }
    ]
  },
  {
    id: 13,
    title: "Wide-Leg Crepe Trousers",
    sku: "W-PANT-WLC-013",
    price: 149.00,
    category: "Women",
    category2: "Pants",
    category3: "Formal",
    tags: ["Wide-Leg", "Crepe", "Formal", "High-Waist"],
    rating: 4.6,
    reviewCount: 20,
    description: "Cut with a flattering high-waist and deep double pleats, these trousers are crafted from fluid Japanese crepe. Features structured side slash pockets and clean back welt pockets.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Cream White", value: "#FFFDD0" },
        { name: "Midnight Black", value: "#0A0A0C" }
      ],
      sizes: ["0", "2", "4", "6", "8", "10"]
    },
    inventory: 14,
    relatedProducts: [1, 3, 8],
    crossSellProducts: [9, 10],
    upsellProducts: [1],
    reviews: [
      { author: "Rebecca V.", rating: 5, comment: "Drapes beautifully. Long enough to wear with high heels. Extremely sleek fabric.", date: "2026-05-19" }
    ]
  },
  {
    id: 14,
    title: "Ribbed Mock Neck Knit",
    sku: "M-SWEA-RMN-014",
    price: 99.00,
    salePrice: 79.00,
    category: "Men",
    category2: "Sweaters",
    category3: "Knitwear",
    tags: ["Ribbed", "Mock-Neck", "Knit", "Winter"],
    rating: 4.6,
    reviewCount: 16,
    description: "Knitted from a premium extra-fine merino and cotton blend in a dense vertical cardigan rib. Classic mock neck collar provides a structured, modern frame, perfect for clean layering under topcoats.",
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Oatmeal Grey", value: "#BEBFC5" },
        { name: "Obsidian Black", value: "#151515" }
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    inventory: 18,
    relatedProducts: [2, 4, 7],
    crossSellProducts: [15],
    upsellProducts: [12],
    reviews: [
      { author: "Mark D.", rating: 5, comment: "The mock neck height is perfect, doesn't choke. Warm, soft material and is holding its shape well.", date: "2026-05-04" }
    ]
  },
  {
    id: 15,
    title: "Cashmere Scarf - Oatmeal",
    sku: "A-SCAR-CSO-015",
    price: 110.00,
    category: "Accessories",
    category2: "Scarves",
    category3: "Winter Accessories",
    tags: ["Cashmere", "Scarf", "Oatmeal", "Warmth"],
    rating: 4.8,
    reviewCount: 25,
    description: "Sumptuously soft cashmere scarf spun in a historic Scottish mill. Trimmed with clean twist fringes, this generous size scarf protects from winds with insulating warmth.",
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600"
    ],
    variants: {
      colors: [
        { name: "Oatmeal Cream", value: "#DFD9D0" },
        { name: "Camel", value: "#C19A6B" },
        { name: "Charcoal Grey", value: "#4A4A4A" }
      ],
      sizes: ["One Size"]
    },
    inventory: 22,
    relatedProducts: [1, 2, 8],
    crossSellProducts: [10],
    upsellProducts: [1],
    reviews: [
      { author: "Julia T.", rating: 5, comment: "Incredibly soft. Worth every penny. The oatmeal is a beautiful neutral shade.", date: "2026-05-22" }
    ]
  }
];

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

export function getRelatedProducts(product, limit = 4) {
  if (!product || !product.relatedProducts) return [];
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter(Boolean)
    .slice(0, limit);
}
export function getUpsellProducts(product, limit = 4) {
  if (!product || !product.upsellProducts) return [];
  return product.upsellProducts
    .map(id => getProductById(id))
    .filter(Boolean)
    .slice(0, limit);
}
export function getCrossSellProducts(product, limit = 4) {
  if (!product || !product.crossSellProducts) return [];
  return product.crossSellProducts
    .map(id => getProductById(id))
    .filter(Boolean)
    .slice(0, limit);
}
