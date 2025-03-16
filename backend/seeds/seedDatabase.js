import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/product.model.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    name: "Banarasi Silk Saree",
    description: "A meticulously woven silk saree, rich in traditional Banarasi motifs and craftsmanship.",
    price: 83.33,
    image: "https://example.com/banarasi-silk-saree.jpg",
    category: "handwoven-textiles",
    isFeatured: true
  },
  {
    name: "Kutch Embroidered Shawl",
    description: "Colorful woolen shawl embellished with intricate mirror-work embroidery from Kutch, Gujarat.",
    price: 33.33,
    image: "https://example.com/kutch-embroidered-shawl.jpg",
    category: "handwoven-textiles",
    isFeatured: false
  },
  {
    name: "Terracotta Tea Set",
    description: "Eco-friendly handmade terracotta tea set inspired by traditional Indian designs, ideal for evening tea conversations.",
    price: 19.33,
    image: "https://example.com/terracotta-tea-set.jpg",
    category: "pottery-ceramics",
    isFeatured: true
  },
  {
    name: "Blue Pottery Vase",
    description: "A beautifully glazed decorative vase from Jaipur's famous blue pottery artisans.",
    price: 12.67,
    image: "https://example.com/blue-pottery-vase.jpg",
    category: "pottery-ceramics",
    isFeatured: false
  },
  {
    name: "Dokra Necklace",
    description: "Exquisite tribal necklace handcrafted using ancient Dokra metal casting technique practiced by Odisha artisans.",
    price: 24.67,
    image: "https://example.com/dokra-necklace.jpg",
    category: "handcrafted-jewellery",
    isFeatured: true
  },
  {
    name: "Meenakari Bangles",
    description: "Vibrantly enameled bangles from Rajasthan, showcasing detailed hand-painted artistry.",
    price: 16.00,
    image: "https://example.com/meenakari-bangles.jpg",
    category: "handcrafted-jewellery",
    isFeatured: false
  },
  {
    name: "Channapatna Wooden Toys",
    description: "Eco-friendly, lacquered wooden toys made by skilled artisans from Karnataka, safe for children.",
    price: 8.67,
    image: "https://example.com/channapatna-wooden-toys.jpg",
    category: "wooden-craft-decor",
    isFeatured: false
  },
  {
    name: "Kashmiri Walnut-Wood Jewellery Box",
    description: "Intricately carved jewellery box made from premium walnut wood by skilled Kashmir artisans.",
    price: 29.33,
    image: "https://example.com/kashmiri-walnut-box.jpg",
    category: "wooden-craft-decor",
    isFeatured: true
  },
  {
    name: "Shantiniketan Leather Handbag",
    description: "Artistic leather handbag with intricate embossed patterns, handcrafted by Bengali leather artisans.",
    price: 24.00,
    image: "https://example.com/shantiniketan-handbag.jpg",
    category: "handmade-leather",
    isFeatured: true
  },
  {
    name: "Rajasthani Juttis",
    description: "Comfortable, handmade leather footwear adorned with traditional embroidery from Rajasthan.",
    price: 15.33,
    image: "https://example.com/rajasthani-juttis.jpg",
    category: "handmade-leather",
    isFeatured: false
  },
  {
    name: "Madhubani Wall Art",
    description: "Hand-painted Madhubani artwork showcasing vibrant themes of nature and mythology.",
    price: 42.67,
    image: "https://example.com/madhubani-wall-art.jpg",
    category: "traditional-paintings",
    isFeatured: true
  },
  {
    name: "Warli Canvas",
    description: "Authentic tribal Warli painting featuring the rustic elegance of Maharashtra's folk art.",
    price: 18.67,
    image: "https://example.com/warli-canvas.jpg",
    category: "traditional-paintings",
    isFeatured: false
  }
];

async function seedProducts() {
  try {
    await Product.deleteMany({});
    console.log('Deleted existing products');

    const insertedProducts = await Product.insertMany(products);
    console.log(`Inserted ${insertedProducts.length} products`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding products:', error);
    mongoose.connection.close();
  }
}

seedProducts();
