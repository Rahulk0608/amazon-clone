// Mock product catalogue. Image URLs point to Unsplash source images
// so the app has real product photography without shipping binary assets.

export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
  },
  {
    id: 'grocery',
    name: 'Grocery',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80',
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&q=80',
  },
]

export const products = [
  {
    id: 'p1',
    title: 'Wireless Over-Ear Headphones with Active Noise Cancellation',
    category: 'electronics',
    price: 4999,
    mrp: 7999,
    rating: 4.3,
    ratingCount: 2318,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    description:
      'Enjoy immersive sound with 40-hour battery life, active noise cancellation, and a foldable design built for daily commutes and travel.',
    stock: 24,
  },
  {
    id: 'p2',
    title: 'Smart Fitness Watch with Heart Rate & SpO2 Monitor',
    category: 'electronics',
    price: 2499,
    mrp: 3999,
    rating: 4.1,
    ratingCount: 5602,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    description:
      'Track workouts, sleep, and heart rate with a vibrant AMOLED display and up to 10 days of battery life. Water resistant up to 50m.',
    stock: 60,
  },
  {
    id: 'p3',
    title: '108MP Quad Camera Smartphone, 8GB RAM, 128GB Storage',
    category: 'electronics',
    price: 15999,
    mrp: 19999,
    rating: 4.4,
    ratingCount: 9876,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    description:
      'Capture stunning detail with a 108MP quad-camera setup, all-day battery, and a smooth 120Hz display for gaming and streaming.',
    stock: 15,
  },
  {
    id: 'p4',
    title: 'Portable Bluetooth Speaker, Deep Bass, IPX7 Waterproof',
    category: 'electronics',
    price: 1799,
    mrp: 2999,
    rating: 4.2,
    ratingCount: 3312,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    description:
      'Take your music anywhere with 12 hours of playtime, deep bass, and full waterproofing for pool days and outdoor adventures.',
    stock: 42,
  },
  {
    id: 'p5',
    title: "Men's Slim Fit Casual Cotton Shirt",
    category: 'fashion',
    price: 899,
    mrp: 1599,
    rating: 4.0,
    ratingCount: 1204,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    description:
      'A breathable slim-fit cotton shirt for everyday wear, available in multiple colours. Machine washable and wrinkle resistant.',
    stock: 80,
  },
  {
    id: 'p6',
    title: "Women's Running Shoes, Lightweight & Breathable",
    category: 'fashion',
    price: 2199,
    mrp: 3499,
    rating: 4.5,
    ratingCount: 4520,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    description:
      'Cushioned soles and a breathable knit upper make these ideal for daily runs, gym sessions, or all-day comfort.',
    stock: 35,
  },
  {
    id: 'p7',
    title: 'Genuine Leather Wallet with RFID Protection',
    category: 'fashion',
    price: 699,
    mrp: 1299,
    rating: 4.3,
    ratingCount: 987,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80',
    description:
      'Slim genuine-leather wallet with RFID-blocking lining, 6 card slots, and a dedicated coin pocket.',
    stock: 55,
  },
  {
    id: 'p8',
    title: 'Unisex Polarized Sunglasses, UV400 Protection',
    category: 'fashion',
    price: 599,
    mrp: 999,
    rating: 4.1,
    ratingCount: 2011,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    description:
      'Lightweight polarized lenses cut glare and block 100% of UVA/UVB rays, with a durable spring-hinge frame.',
    stock: 70,
  },
  {
    id: 'p9',
    title: 'Organic Assorted Dry Fruits Gift Box, 1kg',
    category: 'grocery',
    price: 1099,
    mrp: 1499,
    rating: 4.6,
    ratingCount: 1543,
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80',
    description:
      'A premium mix of almonds, cashews, pistachios, and raisins, vacuum-packed to preserve freshness. Great as a gift.',
    stock: 90,
  },
  {
    id: 'p10',
    title: 'Cold-Pressed Extra Virgin Olive Oil, 1L',
    category: 'grocery',
    price: 649,
    mrp: 899,
    rating: 4.4,
    ratingCount: 876,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    description:
      'First cold-pressed extra virgin olive oil with rich flavour, ideal for salads, cooking, and dressings.',
    stock: 110,
  },
  {
    id: 'p11',
    title: 'Whole Wheat Artisan Bread Loaf, Pack of 2',
    category: 'grocery',
    price: 149,
    mrp: 199,
    rating: 4.0,
    ratingCount: 402,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    description:
      'Freshly baked whole wheat bread with a soft crumb and crusty exterior. No preservatives added.',
    stock: 150,
  },
  {
    id: 'p12',
    title: 'Assorted Herbal Tea Sampler, 40 Bags',
    category: 'grocery',
    price: 349,
    mrp: 499,
    rating: 4.3,
    ratingCount: 690,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80',
    description:
      'A curated sampler of eight caffeine-free herbal blends, perfect for relaxing evenings or gifting.',
    stock: 120,
  },
  {
    id: 'p13',
    title: 'Non-Stick Cookware Set, 5 Pieces',
    category: 'home-kitchen',
    price: 2999,
    mrp: 4999,
    rating: 4.5,
    ratingCount: 2210,
    image: 'https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=600&q=80',
    description:
      'A complete 5-piece non-stick cookware set with heat-resistant handles, suitable for all stovetops including induction.',
    stock: 38,
  },
  {
    id: 'p14',
    title: 'Memory Foam Pillow, Orthopedic Cervical Support',
    category: 'home-kitchen',
    price: 899,
    mrp: 1499,
    rating: 4.2,
    ratingCount: 1650,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80',
    description:
      'Contoured memory foam pillow that supports the neck and shoulders, with a removable, washable cover.',
    stock: 65,
  },
  {
    id: 'p15',
    title: 'LED Desk Lamp with Wireless Charging Base',
    category: 'home-kitchen',
    price: 1299,
    mrp: 1999,
    rating: 4.3,
    ratingCount: 934,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    description:
      'Adjustable LED desk lamp with 5 brightness levels, 3 colour modes, and a built-in wireless charging pad.',
    stock: 48,
  },
  {
    id: 'p16',
    title: '600 Thread Count Cotton Bedsheet Set, Queen',
    category: 'home-kitchen',
    price: 1599,
    mrp: 2499,
    rating: 4.4,
    ratingCount: 1120,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
    description:
      'Luxuriously soft 600 thread-count cotton bedsheet set including 2 pillow covers. Fade resistant and breathable.',
    stock: 52,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}
