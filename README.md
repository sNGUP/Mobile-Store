# 📱 Mobile Store - Premium E-Commerce Platform

<div align="center">
  
  ![Mobile Store Banner](https://img.shields.io/badge/Mobile-Store-2563eb?style=for-the-badge&logo=apple&logoColor=white)
  
  **A modern, feature-rich e-commerce platform for mobile phones with advanced filtering and real-time product management**
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
  
  [Live Demo](#) | [Documentation](#features) | [Report Bug](https://github.com/sNGUP/Mobile-Store/issues)
  
</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [✨ New Features](#-new-features-2025)
- [Core Features](#-core-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Product Catalog](#-product-catalog)
- [Configuration](#-configuration)
- [Usage Guide](#-usage-guide)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Mobile Store** is a cutting-edge, fully responsive e-commerce platform designed specifically for mobile phone retail. Built with vanilla JavaScript and powered by Firebase, it delivers a seamless shopping experience with real-time authentication, advanced product filtering, persistent storage, and a complete checkout system.

### 🎯 Why Choose Mobile Store?

- **🎨 Modern UI/UX** - Professional design with smooth animations and micro-interactions
- **📱 Fully Responsive** - Optimized for all devices (Mobile, Tablet, Desktop)
- **⚡ Fast & Lightweight** - Pure vanilla JS, no heavy frameworks
- **🔒 Secure Authentication** - Firebase Auth with social login (Google & Facebook)
- **🛒 Complete E-Commerce Flow** - From browsing to order confirmation
- **🎯 Advanced Filtering** - Multi-parameter product filtering with real-time updates
- **💾 Persistent Storage** - Cart and wishlist data stored using Claude's storage API
- **🎥 Dynamic Hero Section** - Video backgrounds with auto-slideshow
- **📦 60+ Products** - Extensive catalog across 9 major brands

---

## ✨ New Features (2025)

### 🔍 Advanced Filter System
- **Multi-Parameter Filtering**
  - Filter by Brand, RAM, Storage, Network (5G/4G)
  - Camera specifications and Battery capacity
  - Product status (New Arrivals / On Sale)
  - Price range slider with live updates
- **Smart Filter Popup**
  - Beautiful modal interface with organized sections
  - Real-time product count updates
  - Reset and apply filter controls
  - Mobile-optimized responsive design

### 🎬 Enhanced Hero Section
- **Video Backgrounds** - Dynamic video hero slider with smooth transitions
- **Auto-Slideshow** - Automatic slide progression with video end detection
- **Fallback Handling** - Graceful error handling for video playback issues
- **Responsive Design** - Optimized video display across all devices

### 🛍️ Product Details Popup
- **Rich Product Information**
  - High-resolution product images with zoom
  - Detailed specifications in organized tabs
  - Available color variants display
  - Stock availability status
  - Customer ratings and reviews
- **Interactive Tabs**
  - Specifications tab with detailed specs grid
  - Available colors showcase
  - Shipping & delivery information
- **Quick Actions**
  - Add to cart directly from popup
  - Add to wishlist with visual feedback
  - Real-time stock updates

### 💾 Persistent Data Storage
- **Cart Persistence** - Shopping cart data saved across sessions
- **Wishlist Storage** - Favorite products remembered
- **Claude Storage API** - Utilizing advanced storage capabilities
- **Error Handling** - Robust error management with fallback mechanisms

### 📦 Expanded Product Catalog
- **60+ Premium Smartphones** across 9 major brands
- **Detailed Specifications** for each product:
  - Processor details (Snapdragon, Dimensity, Apple Silicon)
  - RAM and Storage configurations
  - Network capabilities (5G/4G)
  - Display specifications
  - Battery capacity
  - Camera systems (Main, Telephoto, Ultra-wide, Front)
  - Operating system
- **Multiple Color Variants** for most models
- **Dynamic Pricing** with old price comparisons
- **Stock Management** with availability indicators

### 🎨 UI/UX Enhancements
- **Interactive Sections**
  - Features section with hover effects
  - Popular categories grid
  - Customer testimonials
  - Newsletter subscription
  - Brand showcase cards
  - Promotional banners
- **Enhanced Navigation**
  - Category dropdown for additional brands
  - Smooth scroll behavior
  - Active state indicators
  - Mobile-friendly hamburger menu
- **Improved Animations**
  - Fade-in effects on scroll
  - Smooth transitions between states
  - Loading indicators
  - Success/error notifications

### 🔔 Advanced Notification System
- **Toast Notifications** with auto-dismiss
- **Color-Coded Alerts** (Success, Error, Warning, Info)
- **Progress Bar** showing auto-close countdown
- **Close Button** for manual dismissal
- **Stacked Display** for multiple notifications
- **Mobile Optimized** responsive positioning

### 📄 Enhanced Pages

#### 🏠 Home Page
- Dynamic video hero section
- Featured brands showcase
- Product categories grid
- Customer testimonials
- Newsletter subscription
- Feature highlights
- Promotional banners

#### 🛒 Checkout Page
- Multi-step checkout process (Shipping → Review → Complete)
- Egyptian governorate selection
- Address validation
- Order summary with itemized list
- Order confirmation with unique order number
- Firebase Firestore integration for order storage

#### 👤 Account Page
- User profile management
- Order history with detailed view
- Saved addresses management
- Profile editing capabilities
- Custom confirmation dialogs
- Enhanced notification system
- Responsive design for all devices

---

## 🚀 Core Features

### 🛍️ Shopping Experience
- **Product Catalog** - Browse 60+ smartphones across 9 brands
- **Smart Search** - Real-time search by name, brand, or specs
- **Advanced Filtering** - Multi-parameter filtering (Brand, RAM, Storage, Camera, Network, Battery, Price)
- **Product Details** - Comprehensive product information popup with tabs
- **Product Cards** - Detailed specs, pricing, and availability badges
- **Wishlist** - Save favorite products with persistent storage
- **Shopping Cart** - Add/remove items with quantity management and persistence

### 👤 User Management
- **Firebase Authentication** - Secure email/password sign-in
- **Social Login** - Google and Facebook authentication
- **User Dashboard** - Personal account management
- **Order History** - Track and view previous purchases
- **Saved Addresses** - Store multiple shipping addresses
- **Profile Management** - Edit personal information and preferences

### 💳 Checkout Process
- **Multi-Step Checkout** - Shipping → Review → Confirmation
- **Address Management** - Save addresses for future orders
- **Order Summary** - Clear breakdown with itemized list
- **Order Confirmation** - Unique order numbers and notifications
- **Firestore Integration** - Secure order storage in Firebase

### 🎨 Design & UX
- **Responsive Design** - Mobile-first approach with tablet and desktop optimization
- **Smooth Animations** - CSS transitions, hover effects, and micro-interactions
- **Loading States** - Visual feedback for all user actions
- **Empty States** - Informative messages for empty cart/wishlist
- **Error Handling** - User-friendly error messages and notifications
- **Accessibility** - ARIA labels and keyboard navigation support

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup with proper structure
- **CSS3** - Modern styling with Flexbox, Grid, and Animations
- **JavaScript (ES6+)** - Vanilla JS with async/await and modern features

### Backend & Services
- **Firebase Authentication** - User management and social login
- **Cloud Firestore** - NoSQL database for orders and addresses
- **Claude Storage API** - Persistent data storage for cart and wishlist
- **Firebase Hosting** - (Optional) Static site hosting

### APIs & Libraries
- **Firebase SDK (v10.7.1)** - Authentication and database
- **Unsplash API** - High-quality product images (optional)
- **Claude Storage API** - Key-value storage for persistent data

### Tools & Resources
- **Google Fonts** - Roboto font family
- **SVG Icons** - Custom scalable vector graphics
- **Video Assets** - Hero section background videos

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Code editor (VS Code recommended)
- Firebase account (free tier available)
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sNGUP/Mobile-Store.git
   cd Mobile-Store
   ```

2. **Configure Firebase**
   
   a. Create a new Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   
   b. Enable Authentication:
   - Navigate to Authentication → Sign-in method
   - Enable Email/Password
   - Enable Google (optional)
   - Enable Facebook (optional - requires Facebook App setup)
   
   c. Enable Cloud Firestore:
   - Navigate to Firestore Database
   - Click "Create database"
   - Start in production mode (configure rules later)
   
   d. Get your Firebase configuration:
   - Go to Project Settings → General
   - Scroll to "Your apps" section
   - Click the web icon (</>)
   - Copy the configuration object

3. **Update Firebase Configuration**
   
   Open `index.html` and update the Firebase config (around line 550):
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

4. **Configure Firestore Security Rules**
   
   In Firebase Console → Firestore Database → Rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /orders/{orderId} {
         allow read, write: if request.auth != null && 
           request.auth.uid == resource.data.userId;
       }
       match /addresses/{addressId} {
         allow read, write: if request.auth != null && 
           request.auth.uid == resource.data.userId;
       }
       match /users/{userId} {
         allow read, write: if request.auth != null && 
           request.auth.uid == userId;
       }
     }
   }
   ```

5. **Launch the Application**
   
   **Option A: Using Python**
   ```bash
   python -m http.server 8000
   ```
   
   **Option B: Using Node.js**
   ```bash
   npx http-server
   ```
   
   **Option C: Using VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index.html` → Open with Live Server

6. **Access the Application**
   
   Open your browser and navigate to:
   - Python: `http://localhost:8000`
   - Node.js: `http://localhost:8080`
   - Live Server: `http://127.0.0.1:5500`

---

## 📁 Project Structure

```
Mobile-Store/
├── index.html                 # Main landing page with product catalog
├── CSS/
│   └── style.css             # Global styles, components, and animations
├── JS/
│   ├── main.js               # Core functionality and UI logic
│   └── data.js               # Product data (60+ products)
├── pages/
│   ├── account.html          # User account dashboard
│   └── checkout.html         # Multi-step checkout process
├── images/
│   ├── mobile_logo.png       # Main application logo
│   ├── iconlogo.png          # Favicon
│   ├── Apple/                # Apple iPhone product images
│   ├── samsung/              # Samsung Galaxy product images
│   ├── Xiaomi/               # Xiaomi & Redmi product images
│   ├── oppo/                 # OPPO product images
│   ├── realme/               # Realme product images
│   ├── OnePlus/              # OnePlus product images
│   ├── honor/                # Honor product images
│   ├── vivo/                 # Vivo product images
│   ├── google/               # Google Pixel product images
│   └── nothing/              # Nothing Phone product images
└── videos/
    ├── hero-video-1.mp4      # Hero section background video
    └── hero-video-1.webm     # Hero section background video (WebM)
```

### File Descriptions

| File | Description | Lines of Code |
|------|-------------|---------------|
| `index.html` | Main page with hero section, categories, products, and footer | ~650 |
| `style.css` | Complete styling including responsive design and animations | ~2800 |
| `main.js` | All JavaScript functionality (cart, filters, auth, etc.) | ~1500 |
| `data.js` | Product database with 60+ smartphones | ~1200 |
| `account.html` | User profile, orders, and address management | ~550 |
| `checkout.html` | Multi-step checkout with Firebase integration | ~600 |

---

## 📦 Product Catalog

### Brands & Models (60+ Products)

#### 🍎 Apple (17 Models)
- iPhone 17 Pro Max, 17 Pro, 17
- iPhone 16 Pro Max, 16 Pro, 16
- iPhone 15 Pro Max, 15 Pro, 15 Plus, 15
- iPhone 14 Pro Max, 14 Pro, 14 Plus, 14
- iPhone 13, 12
- iPhone SE (2022)

#### 📱 Samsung (10 Models)
- Galaxy S24 Ultra, S24+, S24
- Galaxy S23 Ultra, S23
- Galaxy Z Fold 5, Z Flip 5
- Galaxy A54, A34, A24

#### 🔥 Xiaomi (9 Models)
- Xiaomi 14 Pro, 14
- Xiaomi 13T Pro, 13 Pro, 13
- Redmi Note 13 Pro+, 13 Pro
- POCO X6 Pro, X6

#### 🎯 OPPO (9 Models)
- Find X7 Ultra
- Reno 14, 11 Pro, 11
- A98, A78, A60, A5, A3

#### ⚡ Realme (3 Models)
- GT 5 Pro
- 12 Pro+
- C53

#### 1️⃣ OnePlus (3 Models)
- OnePlus 12, 11
- Nord 3

#### 🏆 Honor (2 Models)
- Magic 6 Pro
- Honor 90

#### 📸 Vivo (2 Models)
- X100 Pro
- V29

#### 🟢 Google Pixel (3 Models)
- Pixel 8 Pro, 8
- Pixel 7a

#### ⚫ Nothing (2 Models)
- Phone (2)
- Phone (1)

### Product Specifications

Each product includes:
- **Basic Info**: Name, Brand, Category
- **Pricing**: Current price, old price (if discounted), discount percentage
- **Images**: High-resolution product images
- **Quick Specs**: Processor, RAM, Storage, Network
- **Detailed Specs**:
  - Processor details
  - RAM configurations
  - Storage options
  - Network capabilities (5G/4G)
  - Screen size and technology
  - Battery capacity
  - Camera system (Main + additional lenses)
  - Front camera
  - Operating system
- **Additional**: Color variants, ratings, reviews, stock status, delivery time

---

## ⚙️ Configuration

### Firebase Setup

#### 1. Authentication Providers

**Email/Password:**
- Go to Authentication → Sign-in method
- Enable Email/Password
- (Optional) Enable email link sign-in

**Google OAuth:**
- Enable Google provider
- No additional configuration needed for web

**Facebook Login:**
- Create Facebook App at [Facebook Developers](https://developers.facebook.com/)
- Get App ID and App Secret
- Add to Firebase Authentication settings
- Configure OAuth redirect URLs

#### 2. Firestore Database Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Orders collection
    match /orders/{orderId} {
      allow read: if request.auth != null && 
        request.auth.uid == resource.data.userId;
      allow create: if request.auth != null;
    }
    
    // Addresses collection
    match /addresses/{addressId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // Users collection
    match /users/{userId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == userId;
    }
  }
}
```

#### 3. Storage Rules (if using Firebase Storage)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && 
        request.resource.size < 5 * 1024 * 1024;
    }
  }
}
```

### Claude Storage API

The application uses Claude's storage API for cart and wishlist persistence:

```javascript
// Save cart data
await window.storage.set('cart', JSON.stringify(cartData));

// Retrieve cart data
const result = await window.storage.get('cart');
const cart = result ? JSON.parse(result.value) : [];
```

**Note:** Claude Storage API is automatically available in the Claude.ai environment.

---

## 📖 Usage Guide

### Adding Products

Edit the `products` array in `JS/data.js`:

```javascript
{
  id: 61,
  name: "Example Phone Pro",
  brand: "Brand Name",
  price: 29999,
  oldPrice: 34999,
  image: "images/brand/product.webp",
  specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "5G"],
  badge: "New",
  badgeType: "new", // or "sale"
  category: "brandname",
  detailedSpecs: {
    processor: "Snapdragon 8 Gen 3",
    ram: "12GB",
    storage: "256GB / 512GB",
    network: "5G",
    screen: "6.7\" AMOLED",
    battery: "5000mAh",
    camera: "50MP + 12MP + 8MP",
    frontCamera: "32MP",
    os: "Android 14"
  },
  colors: ["Black", "White", "Blue"],
  description: "Product description here...",
  rating: 4.5,
  reviews: 120,
  inStock: true,
  delivery: "2-3 Days",
  freeShipping: true
}
```

### Customizing Styles

All styles are centralized in `CSS/style.css`. Key CSS variables:

```css
/* Primary Colors */
--primary-blue: #2563eb;
--primary-dark: #1d4ed8;
--primary-light: #3b82f6;

/* Text Colors */
--text-dark: #1f2937;
--text-gray: #6b7280;
--text-light: #9ca3af;

/* Background Colors */
--bg-light: #f8f9fa;
--bg-gray: #f3f4f6;

/* Success/Error */
--success: #10b981;
--error: #ef4444;
--warning: #f59e0b;
```

### Managing Authentication

Key authentication functions in `JS/main.js`:

```javascript
// Sign in with email/password
handleSignIn(event)

// Create new account
handleSignUp(event)

// Social login (Google/Facebook)
socialLogin(provider)

// Sign out current user
handleSignOut()

// Check authentication state
onAuthStateChanged(auth, (user) => {
  // Handle user state changes
})
```

### Filter System

The advanced filter system supports:
- Brand filtering
- RAM options
- Storage capacity
- Network type (5G/4G)
- Camera specifications
- Battery capacity ranges
- Product status (New/Sale)
- Price range slider
- Sorting options

Access filters through the "Filter Products" button on the products page.

### Cart & Wishlist Management

```javascript
// Add to cart
addToCart(productId)

// Remove from cart
removeFromCart(productId)

// Add to wishlist
toggleWishlistItem(productId)

// Move from wishlist to cart
moveToCart(productId)

// Proceed to checkout
proceedToCheckout()
```

---

## 📸 Screenshots

### Homepage
<img width="1918" height="959" alt="Homepage" src="https://github.com/user-attachments/assets/836165b1-4d84-4316-952a-fcea41f634f6" />

### Additional Screenshots
- Shopping Cart
- Product Details Popup
- Filter System
- User Dashboard
- Checkout Process
- Order Confirmation

*(Screenshots to be added)*

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and formatting conventions
- Add comprehensive comments for complex logic
- Test thoroughly on multiple browsers (Chrome, Firefox, Safari, Edge)
- Ensure mobile responsiveness on various screen sizes
- Update README documentation if adding new features
- Write clear, descriptive commit messages
- Include screenshots for UI changes

### Code Style

- **JavaScript**: ES6+ syntax, camelCase for variables/functions
- **CSS**: BEM-like naming, mobile-first approach
- **HTML**: Semantic tags, proper indentation
- **Comments**: Clear and concise explanations

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

```
MIT License

Copyright (c) 2025 Mobile Store

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

**Project Maintainer:** Abdulrahman

- 📧 Email: lsfe.ngup@gmail.com
- 🐙 GitHub: [@sNGUP](https://github.com/sNGUP)
- 🔗 Project Link: [https://github.com/sNGUP/Mobile-Store](https://github.com/sNGUP/Mobile-Store)

---

## 🙏 Acknowledgments

- [Firebase](https://firebase.google.com/) - Backend infrastructure and authentication
- [Unsplash](https://unsplash.com/) - High-quality product images
- [Google Fonts](https://fonts.google.com/) - Roboto font family
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons
- [Claude AI](https://claude.ai/) - Storage API for persistent data
- All contributors who helped improve this project

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product comparison tool
- [ ] Advanced search with autocomplete
- [ ] Customer reviews and ratings system
- [ ] Email notifications for order updates
- [ ] Admin dashboard for product management
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA) capabilities
- [ ] Product recommendation engine
- [ ] Live chat support
- [ ] Inventory management system

---

<div align="center">
  
  ### ⭐ Star this repo if you find it helpful!
  
  **Made with ❤️ by Abdulrahman**
  
  ![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=sNGUP.Mobile-Store)
  
  © 2025 Mobile Store. All rights reserved.
  
</div>
