#       Mobile Store - E-Commerce Platform

<div align="center">
  
  ![Mobile Store Banner](https://img.shields.io/badge/Mobile-Store-2563eb?style=for-the-badge&logo=apple&logoColor=white)
  
  **A modern, responsive e-commerce platform for mobile phones**
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
  
  [Live Demo](#) | [Documentation](#features) | [Report Bug](https://github.com/sNGUP/Mobile-Store/issues)
  
</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**Mobile Store** is a feature-rich, fully responsive e-commerce platform designed for selling mobile phones. Built with vanilla JavaScript and Firebase, it offers a seamless shopping experience with real-time authentication, dynamic product filtering, and a complete checkout system.

### Why Mobile Store?

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fully Responsive** - Works flawlessly on all devices
- **Fast & Lightweight** - No heavy frameworks, pure vanilla JS
- **Secure Authentication** - Firebase Auth with social login support
- **Complete E-Commerce Flow** - From browsing to checkout

---

## Features

### Shopping Experience
- **Product Catalog** - Browse through a curated selection of mobile phones
- **Smart Search** - Real-time search by name, brand, or specifications
- **Category Filtering** - Filter by Apple, Samsung, Xiaomi, and Hot Deals
- **Product Cards** - Detailed specs, pricing, and availability badges
- **Wishlist** - Save favorite products for later
- **Shopping Cart** - Add/remove items with quantity management

### User Management
- **Firebase Authentication** - Secure sign-in/sign-up system
- **Social Login** - Google and Facebook authentication
- **User Dashboard** - Personal account management
- **Order History** - Track previous purchases
- **Saved Addresses** - Store multiple shipping addresses
- **Profile Management** - Edit personal information

### Checkout Process
- **Multi-Step Checkout** - Shipping → Review → Confirmation
- **Address Management** - Save addresses for future orders
- **Order Summary** - Clear breakdown of items and pricing
- **Order Confirmation** - Unique order numbers and email notifications
- **Firestore Integration** - Orders stored in Firebase database

### Design & UX
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - CSS transitions and hover effects
- **Loading States** - Visual feedback for user actions
- **Empty States** - Informative messages for empty cart/wishlist
- **Error Handling** - User-friendly error messages

---

## Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Vanilla JS, no frameworks

### Backend & Services
- **Firebase Authentication** - User management
- **Cloud Firestore** - NoSQL database for orders and addresses
- **Firebase Hosting** - (Optional) Static site hosting

### Tools & Libraries
- **Unsplash API** - High-quality product images
- **LocalStorage** - Client-side data persistence
- **SVG Icons** - Scalable vector graphics

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Firebase account (for authentication & database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sNGUP/Mobile-Store.git
   cd Mobile-Store
   ```

2. **Configure Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password, Google, Facebook)
   - Enable Cloud Firestore
   - Copy your Firebase config

3. **Update Firebase Configuration**
   
   Open `index.html` and update the Firebase config:
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

4. **Launch the Application**
   
   Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code Live Server
   # Right-click index.html → Open with Live Server
   ```

5. **Access the Application**
   
   Navigate to `http://localhost:8000` in your browser

---

## Project Structure

```
Mobile-Store/
├── index.html              # Main landing page
├── CSS/
│   └── style.css          # Global styles and components
├── JS/
│   └── main.js            # Core functionality and logic
├── pages/
│   ├── account.html       # User account dashboard
│   └── checkout.html      # Checkout and order placement
└── images/
    ├── mobile_logo.png    # Main logo
    └── iconlogo.png       # Favicon
```

### File Descriptions

| File | Description |
|------|-------------|
| `index.html` | Homepage with product catalog and navigation |
| `style.css` | All styling, animations, and responsive design |
| `main.js` | Product data, cart management, authentication logic |
| `account.html` | User profile, orders, and address management |
| `checkout.html` | Multi-step checkout process |

---

## Screenshots

### Homepage
<img width="1918" height="959" alt="image" src="https://github.com/user-attachments/assets/836165b1-4d84-4316-952a-fcea41f634f6" />

### Shopping Cart
*Cart management with item quantities and totals*

### User Dashboard
*Account overview with orders and saved addresses*

### Checkout
*Multi-step checkout with shipping and order review*

---

## Configuration

### Firebase Setup

1. **Authentication Providers**
   - Enable Email/Password authentication
   - Configure Google OAuth client
   - Configure Facebook App for login

2. **Firestore Database Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /orders/{orderId} {
         allow read, write: if request.auth != null;
       }
       match /addresses/{addressId} {
         allow read, write: if request.auth != null;
       }
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

3. **Storage Rules** (if using images)
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

---

## Usage

### Adding Products

Edit the `products` array in `main.js`:

```javascript
{
  id: 1,
  name: "iPhone 15 Pro Max",
  brand: "Apple",
  price: 1199,
  oldPrice: 1399,
  image: "https://example.com/image.jpg",
  specs: ["A17 Pro", "8GB RAM", "256GB", "5G"],
  badge: "New",
  badgeType: "new",
  category: "apple"
}
```

### Customizing Styles

All styles are in `CSS/style.css`. Key variables:

```css
/* Primary colors */
--primary-blue: #2563eb;
--primary-dark: #1d4ed8;

/* Text colors */
--text-dark: #1f2937;
--text-gray: #6b7280;
```

### Managing Authentication

Authentication functions in `main.js`:
- `handleSignIn()` - Email/password login
- `handleSignUp()` - User registration
- `socialLogin()` - Google/Facebook login
- `handleSignOut()` - User logout

---

## Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and formatting
- Add comments for complex logic
- Test on multiple browsers
- Ensure mobile responsiveness
- Update README if needed

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Project Maintainer:** Your Name

- GitHub: [@sNGUP](https://github.com/sNGUP)
- Email: your.email@example.com
- Project Link: [https://github.com/sNGUP/Mobile-Store](https://github.com/sNGUP/Mobile-Store)

---

## Acknowledgments

- [Firebase](https://firebase.google.com/) - Backend infrastructure
- [Unsplash](https://unsplash.com/) - High-quality product images
- [Google Fonts](https://fonts.google.com/) - Typography
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons
- All contributors who helped improve this project

---

<div align="center">
  
  ### Star this repo if you find it helpful!
  
  **Made with care by [Abdulrahman]**
  
  ![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=sNGUP.Mobile-Store)
  
</div>
