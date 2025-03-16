# 🏺Heritage Hands

## A Modern E-commerce Platform for Traditional Indian Artisanal Products

Heritage Hands is a full-stack e-commerce platform designed to showcase and sell traditional Indian handicrafts and artisanal products. The platform bridges the gap between skilled artisans and global consumers, bringing centuries-old craftsmanship to the modern market.

## ✨ Features

- **User Authentication** - Secure signup, login, and token-based session management
- **Product Browsing** - Browse products by categories with rich visual layouts
- **Shopping Cart** - Add, remove, and update product quantities in cart
- **Coupon System** - Apply discount coupons during checkout
- **Secure Payments** - Integrated Stripe payment gateway
- **AI-Powered Product Management** - Analyze product images using Google's Gemini AI to generate descriptions
- **Admin Dashboard** - Manage products and view sales analytics
- **Responsive Design** - Optimized for all device sizes

## 🛠️ Technologies Used

### Frontend
- React 18
- Zustand (state management)
- TailwindCSS (styling)
- Framer Motion (animations)
- Recharts (analytics visualization)
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Redis (caching)
- JWT (authentication)
- Cloudinary (image storage)
- Stripe (payment processing)
- Google Generative AI (Gemini API)

## 🏗️ Project Structure

```
pulkit-jain1-heritage-hands/
├── LICENSE
├── package.json
├── backend/          # Node.js/Express backend
│   ├── server.js     # Entry point
│   ├── controllers/  # Business logic
│   ├── lib/          # External services connectors
│   ├── middleware/   # Request/response middleware
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API endpoints
│   └── seeds/        # Database seeders
└── frontend/         # React frontend
    ├── public/       # Static assets
    └── src/
        ├── components/  # Reusable UI components
        ├── lib/         # Utility functions
        ├── pages/       # Page components
        └── stores/      # Zustand state stores
```

## 🚀 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- Redis
- Stripe account
- Cloudinary account
- Google AI API key (for Gemini integration)

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/heritage-hands.git
cd heritage-hands
```

2. Install dependencies
```bash
npm install
cd frontend
npm install
cd ..
```

3. Environment variables

Create a `.env` file in the root directory with the following variables:
```
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# JWT
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Redis
UPSTASH_REDIS_URL=your_redis_url

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173

# Google AI
GEMINI_API_KEY=your_gemini_api_key
```

4. Seed the database (optional)
```bash
node backend/seeds/seedDatabase.js
```

5. Start the development server
```bash
npm run dev
```

## 🔍 Usage

### Customer Features
- Browse products by categories
- Add products to cart
- Apply discount coupons
- Checkout securely with Stripe
- View order history

### Admin Features
- Access admin dashboard at `/secret-dashboard`
- Create and manage products
- Use AI to generate product descriptions
- Toggle featured products
- View sales analytics

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

