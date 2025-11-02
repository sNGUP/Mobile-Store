// ========== PRODUCTS DATA ==========
const products = [
  // ===== APPLE iPhones =====
  {
    id: 1, 
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 65999, 
    oldPrice: 72999, 
    image: "",
    specs: ["A17 Pro", "8GB RAM", "256GB", "5G"], 
    badge: "New", 
    badgeType: "new", 
    category: "apple" 
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 58999,
    oldPrice: 64999,
    image: "",
    specs: ["A17 Pro", "8GB RAM", "128GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "apple"
  },
  {
    id: 3,
    name: "iPhone 15 Plus",
    brand: "Apple",
    price: 52999,
    oldPrice: 58999,
    image: "",
    specs: ["A16 Bionic", "6GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 4,
    name: "iPhone 15",
    brand: "Apple",
    price: 46999,
    oldPrice: 51999,
    image: "",
    specs: ["A16 Bionic", "6GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 5,
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    price: 52999,
    oldPrice: 62999,
    image: "",
    specs: ["A16 Bionic", "6GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 6,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 46999,
    oldPrice: 54999,
    image: "",
    specs: ["A16 Bionic", "6GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 7,
    name: "iPhone 14 Plus",
    brand: "Apple",
    price: 42999,
    oldPrice: 49999,
    image: "",
    specs: ["A15 Bionic", "6GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 8,
    name: "iPhone 14",
    brand: "Apple",
    price: 38999,
    oldPrice: 44999,
    image: "",
    specs: ["A15 Bionic", "6GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 9,
    name: "iPhone 13",
    brand: "Apple",
    price: 32999,
    oldPrice: 38999,
    image: "",
    specs: ["A15 Bionic", "4GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 10,
    name: "iPhone 12",
    brand: "Apple",
    price: 26999,
    oldPrice: 32999,
    image: "",
    specs: ["A14 Bionic", "4GB RAM", "64GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 11,
    name: "iPhone SE (2022)",
    brand: "Apple",
    price: 21999,
    oldPrice: 26999,
    image: "",
    specs: ["A15 Bionic", "4GB RAM", "64GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },

  // ===== SAMSUNG Galaxy =====
  {
    id: 12,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 59999,
    oldPrice: 68999,
    image: "",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "samsung"
  },
  {
    id: 13,
    name: "Samsung Galaxy S24+",
    brand: "Samsung",
    price: 48999,
    oldPrice: 56999,
    image: "",
    specs: ["Exynos 2400", "12GB RAM", "256GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "samsung"
  },
  {
    id: 14,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    price: 42999,
    oldPrice: 49999,
    image: "",
    specs: ["Exynos 2400", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "samsung"
  },
  {
    id: 15,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 48999,
    oldPrice: 58999,
    image: "",
    specs: ["Snapdragon 8 Gen 2", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "samsung"
  },
  {
    id: 16,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    price: 34999,
    oldPrice: 42999,
    image: "",
    specs: ["Snapdragon 8 Gen 2", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "samsung"
  },
  {
    id: 17,
    name: "Samsung Galaxy Z Fold 5",
    brand: "Samsung",
    price: 82999,
    oldPrice: null,
    image: "",
    specs: ["Snapdragon 8 Gen 2", "12GB RAM", "256GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "samsung"
  },
  {
    id: 18,
    name: "Samsung Galaxy Z Flip 5",
    brand: "Samsung",
    price: 52999,
    oldPrice: null,
    image: "",
    specs: ["Snapdragon 8 Gen 2", "8GB RAM", "256GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "samsung"
  },
  {
    id: 19,
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    price: 18999,
    oldPrice: 22999,
    image: "",
    specs: ["Exynos 1380", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "samsung"
  },
  {
    id: 20,
    name: "Samsung Galaxy A34",
    brand: "Samsung",
    price: 14999,
    oldPrice: 17999,
    image: "",
    specs: ["Dimensity 1080", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "samsung"
  },
  {
    id: 21,
    name: "Samsung Galaxy A24",
    brand: "Samsung",
    price: 10999,
    oldPrice: 12999,
    image: "",
    specs: ["Helio G99", "6GB RAM", "128GB", "4G"],
    badge: "Sale",
    badgeType: "sale",
    category: "samsung"
  },

  // ===== XIAOMI =====
  {
    id: 22,
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    price: 42999,
    oldPrice: 49999,
    image: "",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "xiaomi"
  },
  {
    id: 23,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 36999,
    oldPrice: 42999,
    image: "",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "xiaomi"
  },
  {
    id: 24,
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi",
    price: 28999,
    oldPrice: 34999,
    image: "",
    specs: ["Dimensity 9200+", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 25,
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    price: 32999,
    oldPrice: 39999,
    image: "",
    specs: ["Snapdragon 8 Gen 2", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 26,
    name: "Xiaomi 13",
    brand: "Xiaomi",
    price: 26999,
    oldPrice: 32999,
    image: "",
    specs: ["Snapdragon 8 Gen 2", "8GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 27,
    name: "Redmi Note 13 Pro+",
    brand: "Xiaomi",
    price: 16999,
    oldPrice: 19999,
    image: "",
    specs: ["Dimensity 7200", "8GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 28,
    name: "Redmi Note 13 Pro",
    brand: "Xiaomi",
    price: 13999,
    oldPrice: 16999,
    image: "",
    specs: ["Helio G99", "8GB RAM", "256GB", "4G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 29,
    name: "POCO X6 Pro",
    brand: "Xiaomi",
    price: 14999,
    oldPrice: 17999,
    image: "",
    specs: ["Dimensity 8300", "12GB RAM", "512GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 30,
    name: "POCO F6",
    brand: "Xiaomi",
    price: 18999,
    oldPrice: 22999,
    image: "",
    specs: ["Snapdragon 8s Gen 3", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },

  // ===== OPPO =====
  {
    id: 31,
    name: "OPPO Find X7 Ultra",
    brand: "OPPO",
    price: 48999,
    oldPrice: 56999,
    image: "",
    specs: ["Snapdragon 8 Gen 3", "16GB RAM", "512GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "other"
  },
  {
    id: 32,
    name: "OPPO Reno 11 Pro",
    brand: "OPPO",
    price: 22999,
    oldPrice: 26999,
    image: "",
    specs: ["Dimensity 8200", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 33,
    name: "OPPO A78",
    brand: "OPPO",
    price: 10999,
    oldPrice: 12999,
    image: "",
    specs: ["Dimensity 700", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },

  // ===== REALME =====
  {
    id: 34,
    name: "Realme GT 5 Pro",
    brand: "Realme",
    price: 26999,
    oldPrice: 32999,
    image: "",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 35,
    name: "Realme 12 Pro+",
    brand: "Realme",
    price: 16999,
    oldPrice: 19999,
    image: "",
    specs: ["Snapdragon 7s Gen 2", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 36,
    name: "Realme C55",
    brand: "Realme",
    price: 7999,
    oldPrice: 9999,
    image: "",
    specs: ["Helio G88", "8GB RAM", "128GB", "4G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },

  // ===== ONEPLUS =====
  {
    id: 37,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 38999,
    oldPrice: 45999,
    image: "",
    specs: ["Snapdragon 8 Gen 3", "16GB RAM", "512GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 38,
    name: "OnePlus 11",
    brand: "OnePlus",
    price: 28999,
    oldPrice: 34999,
    image: "",
    specs: ["Snapdragon 8 Gen 2", "16GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 39,
    name: "OnePlus Nord 3",
    brand: "OnePlus",
    price: 18999,
    oldPrice: 22999,
    image: "",
    specs: ["Dimensity 9000", "16GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },

  // ===== HONOR =====
  {
    id: 40,
    name: "Honor Magic 6 Pro",
    brand: "Honor",
    price: 42999,
    oldPrice: 49999,
    image: "",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "512GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "other"
  },
  {
    id: 41,
    name: "Honor 90",
    brand: "Honor",
    price: 18999,
    oldPrice: 22999,
    image: "",
    specs: ["Snapdragon 7 Gen 1", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },

  // ===== VIVO =====
  {
    id: 42,
    name: "Vivo X100 Pro",
    brand: "Vivo",
    price: 46999,
    oldPrice: 54999,
    image: "",
    specs: ["Dimensity 9300", "16GB RAM", "512GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "other"
  },
  {
    id: 43,
    name: "Vivo V29",
    brand: "Vivo",
    price: 19999,
    oldPrice: 23999,
    image: "",
    specs: ["Snapdragon 778G", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },

  // ===== GOOGLE PIXEL =====
  {
    id: 44,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 52999,
    oldPrice: 59999,
    image: "",
    specs: ["Tensor G3", "12GB RAM", "256GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "other"
  },
  {
    id: 45,
    name: "Google Pixel 8",
    brand: "Google",
    price: 42999,
    oldPrice: 49999,
    image: "",
    specs: ["Tensor G3", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 46,
    name: "Google Pixel 7a",
    brand: "Google",
    price: 26999,
    oldPrice: 32999,
    image: "",
    specs: ["Tensor G2", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },

  // ===== NOTHING =====
  {
    id: 47,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 28999,
    oldPrice: 34999,
    image: "",
    specs: ["Snapdragon 8+ Gen 1", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 48,
    name: "Nothing Phone (1)",
    brand: "Nothing",
    price: 19999,
    oldPrice: 24999,
    image: "",
    specs: ["Snapdragon 778G+", "8GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  }
];

// ========== STATE MANAGEMENT ==========
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ========== LOCAL STORAGE HELPERS ==========
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistCount();
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  displayProducts(products);
  setupNavigation();
  setupSearchListener();
  updateCartCount();
  updateWishlistCount();
});

// ========== PRODUCT DISPLAY ==========
function displayProducts(productsToShow) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';

  productsToShow.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80'">
        <span class="product-badge ${product.badgeType}">${product.badge}</span>
        <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlistItem(${product.id})" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-specs">
          ${product.specs.map(spec => `<span class="spec-item">${spec}</span>`).join('')}
        </div>
        <div class="product-price">
          <span class="current-price">${product.price} EGP</span>
          ${product.oldPrice ? `<span class="old-price">${product.oldPrice} EGP</span>` : ''}
        </div>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
          <svg viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Add to Cart
        </button>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ========== NAVIGATION ==========
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
      
      const category = this.getAttribute('data-category');
      filterProducts(category);
    });
  });
}

function filterProducts(category) {
  let filtered = products;
  let title = 'Featured Phones';
  let desc = 'Discover the latest smartphones with amazing features and competitive prices';
  
  if (category === 'apple') {
    filtered = products.filter(p => p.category === 'apple');
    title = 'Apple iPhones';
    desc = 'Explore the latest iPhone models with cutting-edge technology';
  } else if (category === 'samsung') {
    filtered = products.filter(p => p.category === 'samsung');
    title = 'Samsung Galaxy';
    desc = 'Discover Samsung\'s powerful Galaxy series smartphones';
  } else if (category === 'xiaomi') {
    filtered = products.filter(p => p.category === 'xiaomi');
    title = 'Xiaomi Phones';
    desc = 'High-performance smartphones at competitive prices';
  } else if (category === 'deals') {
    filtered = products.filter(p => p.badgeType === 'sale');
    title = 'Hot Deals';
    desc = 'Amazing discounts on premium smartphones - Limited time offers!';
  }
  
  updateSectionHeader(title, desc);
  displayProducts(filtered);
}

function updateSectionHeader(title, desc) {
  const titleEl = document.getElementById('sectionTitle');
  const descEl = document.getElementById('sectionDesc');
  
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
}

// ========== SEARCH ==========
function setupSearchListener() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchProducts();
    }
  });
}

function searchProducts() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (searchTerm === '') {
    displayProducts(products);
    updateSectionHeader('Featured Phones', 'Discover the latest smartphones with amazing features and competitive prices');
    return;
  }
  
  const filtered = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.specs.some(spec => spec.toLowerCase().includes(searchTerm))
  );
  
  updateSectionHeader(`Search Results for "${searchTerm}"`, `Found ${filtered.length} product(s)`);
  displayProducts(filtered);
}

// ========== WISHLIST ==========
function toggleWishlistItem(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingIndex = wishlist.findIndex(item => item.id === productId);
  
  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1);
  } else {
    wishlist.push(product);
  }
  
  saveWishlist();
  displayProducts(products);
}

function toggleWishlist() {
  const popup = document.getElementById('wishlistPopup');
  if (!popup) return;
  
  popup.classList.add('active');
  displayWishlistItems();
}

function displayWishlistItems() {
  const container = document.getElementById('wishlistItems');
  if (!container) return;
  
  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-message">
        <svg viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <p>Your wishlist is empty</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = wishlist.map(item => `
    <div class="popup-item">
      <div class="popup-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="popup-item-info">
        <div class="popup-item-name">${item.name}</div>
        <div class="popup-item-price">${item.price} EGP</div>
        <div class="wishlist-actions">
          <button class="add-to-cart-btn-mini" onclick="moveToCart(${item.id})">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Add to Cart
          </button>
          <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist();
  displayWishlistItems();
  displayProducts(products);
}

// Wishlist to Cart
function moveToCart(productId) {
  const product = wishlist.find(item => item.id === productId);
  if (!product) return;
  
  // Add to cart
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }
  
  // Delete from wishlist
  wishlist = wishlist.filter(item => item.id !== productId);
  
  // Save
  saveCart();
  saveWishlist();
  
  displayWishlistItems();
  displayProducts(products);
  
  // Notification
  showMoveToCartNotification(product.name);
}

function showMoveToCartNotification(productName) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.innerHTML = `
    <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; stroke: white; fill: none; stroke-width: 2;">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>Added to cart!</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 2500);
}

function updateWishlistCount() {
  const countEl = document.getElementById('wishlistCount');
  if (countEl) countEl.textContent = wishlist.length;
}

// ========== CART ==========
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }
  
  saveCart();
  showAddToCartFeedback();
}

function showAddToCartFeedback() {
  const btn = event.target.closest('.add-to-cart-btn');
  if (!btn) return;
  
  const originalContent = btn.innerHTML;
  btn.textContent = 'Added!';
  btn.style.background = '#10b981';
  
  setTimeout(() => {
    btn.innerHTML = originalContent;
    btn.style.background = '';
  }, 2000);
}

function toggleCart() {
  const popup = document.getElementById('cartPopup');
  if (!popup) return;
  
  popup.classList.add('active');
  displayCartItems();
}

function displayCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-message">
        <svg viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  container.innerHTML = `
    ${cart.map(item => `
      <div class="popup-item">
        <div class="popup-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="popup-item-info">
          <div class="popup-item-name">${item.name} x${item.quantity}</div>
          <div class="popup-item-price">${item.price * item.quantity} EGP</div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `).join('')}
    <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <span style="font-size: 18px; font-weight: 600; color: #1f2937;">Total:</span>
        <span style="font-size: 24px; font-weight: 700; color: #2563eb;">${total} EGP</span>
      </div>
      <button class="checkout-btn" onclick="proceedToCheckout()">Proceed to Checkout</button>
    </div>
  `;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  displayCartItems();
}

function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (!countEl) return;
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEl.textContent = totalItems;
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty!', 'warning');
    return;
  }
  
  const cartData = encodeURIComponent(JSON.stringify(cart));
  window.location.href = `pages/checkout.html?cart=${cartData}`;
}

// ========== UI CONTROLS ==========
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) popup.classList.remove('active');
}

function closePopupOutside(event, popupId) {
  if (event.target.id === popupId) {
    closePopup(popupId);
  }
}

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.querySelector('.mobile-menu-btn');
  
  if (menu) menu.classList.toggle('active');
  if (btn) btn.classList.toggle('active');
}

function goToHome() {
  window.location.href = 'index.html';
}

function goToAccount() {
  const user = window.firebaseAuth?.currentUser;
  
  if (user) {
    window.location.href = 'pages/account.html';
  } else {
    toggleAccount();
  }
}

function toggleAccount() {
  const popup = document.getElementById('accountPopup');
  if (popup) popup.classList.add('active');
}

// ========== AUTHENTICATION ==========
function switchAuthTab(tab) {
  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');
  
  tabs.forEach(t => t.classList.remove('active'));
  forms.forEach(f => f.classList.remove('active'));
  
  if (tab === 'signin') {
    tabs[0]?.classList.add('active');
    document.getElementById('signinForm')?.classList.add('active');
  } else {
    tabs[1]?.classList.add('active');
    document.getElementById('signupForm')?.classList.add('active');
  }
}

async function handleSignIn(event) {
  event.preventDefault();
  
  const email = event.target[0].value;
  const password = event.target[1].value;
  
  try {
    const userCredential = await window.signInWithEmailAndPassword(window.firebaseAuth, email, password);
    const user = userCredential.user;
    
    showNotification(`Signed in as ${user.email}`, 'success', 'Welcome back!');
    closePopup('accountPopup');
    event.target.reset();
  } catch (error) {
    console.error('Sign in error:', error);
    
    const errorMessages = {
      'auth/user-not-found': 'No account found with this email.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/invalid-credential': 'Invalid email or password.'
    };
    
    const message = errorMessages[error.code] || error.message;
    showNotification(message, 'error', 'Failed to sign in');
  }
}

async function handleSignUp(event) {
  event.preventDefault();
  
  const name = event.target[0].value;
  const email = event.target[1].value;
  const password = event.target[2].value;
  const confirmPassword = event.target[3].value;
  
  if (password !== confirmPassword) {
    showNotification('Passwords do not match!', 'error');
    return;
  }
  
  if (password.length < 6) {
    showNotification('Password must be at least 6 characters long!', 'warning');
    return;
  }
  
  try {
    await window.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
    
    showNotification(`Welcome ${name}!`, 'success', 'Account created successfully!');
    closePopup('accountPopup');
    event.target.reset();
  } catch (error) {
    console.error('Sign up error:', error);
    
    const errorMessages = {
      'auth/email-already-in-use': 'This email is already registered.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/weak-password': 'Password is too weak.'
    };
    
    const message = errorMessages[error.code] || error.message;
    showNotification(message, 'error', 'Failed to create account');
  }
}

async function socialLogin(provider) {
  let authProvider;
  
  if (provider === 'google') {
    authProvider = new window.GoogleAuthProvider();
  } else if (provider === 'facebook') {
    authProvider = new window.FacebookAuthProvider();
  }
  
  try {
    const result = await window.signInWithPopup(window.firebaseAuth, authProvider);
    const user = result.user;
    
    showNotification(`Signed in as ${user.email || user.displayName}`, 'success', `Welcome!`);
    closePopup('accountPopup');
  } catch (error) {
    console.error('Social login error:', error);
    
    const errorMessages = {
      'auth/popup-closed-by-user': 'Login cancelled.',
      'auth/popup-blocked': 'Please allow popups for this site to use social login.'
    };
    
    const message = errorMessages[error.code] || error.message;
    
    if (message === 'Login cancelled.') {
      showNotification(message, 'info');
    } else {
      showNotification(message, 'error', `Failed to sign in with ${provider}`);
    }
  }
}

function updateUIForLoggedInUser(user) {
  console.log('Logged in as:', user.email);
}

function updateUIForLoggedOutUser() {
  console.log('User logged out');
}

async function handleSignOut() {
  try {
    await window.signOut(window.firebaseAuth);
    showNotification('Signed out successfully!', 'success');
  } catch (error) {
    console.error('Sign out error:', error);
    showNotification('Failed to sign out.', 'error');
  }
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info', title = '') {
  // Create container if it doesn't exist
  let container = document.querySelector('.notification-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
  }

  // Set title and icon based on type
  const icons = {
    success: '<polyline points="20 6 9 17 4 12"/>',
    error: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    warning: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
  };

  const titles = {
    success: title || 'Success!',
    error: title || 'Error!',
    warning: title || 'Warning!',
    info: title || 'Info'
  };

  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-icon">
      <svg viewBox="0 0 24 24">${icons[type]}</svg>
    </div>
    <div class="notification-content">
      <div class="notification-title">${titles[type]}</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(notification);

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 4000);
}
