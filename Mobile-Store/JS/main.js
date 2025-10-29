// ========== PRODUCTS DATA ==========
const products = [
  {
    id: 1, 
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199, 
    oldPrice: 1399, 
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",
    specs: ["A17 Pro", "8GB RAM", "256GB", "5G"], 
    badge: "New", 
    badgeType: "new", 
    category: "apple" 
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1099,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "512GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "samsung"
  },
  {
    id: 3,
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    price: 799,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 899,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1663499482523-1c0d2b15ea82?w=500&q=80",
    specs: ["A16 Bionic", "6GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
  },
  {
    id: 5,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 699,
    oldPrice: 849,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
    specs: ["Snapdragon 8 Gen 3", "16GB RAM", "512GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "other"
  },
  {
    id: 6,
    name: "Samsung Galaxy Z Fold 5",
    brand: "Samsung",
    price: 1599,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80",
    specs: ["Snapdragon 8 Gen 2", "12GB RAM", "512GB", "5G"],
    badge: "New",
    badgeType: "new",
    category: "samsung"
  },
  {
    id: 7,
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi",
    price: 649,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1592286927505-b9e4c3a26588?w=500&q=80",
    specs: ["Dimensity 9200+", "12GB RAM", "256GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "xiaomi"
  },
  {
    id: 8,
    name: "iPhone 13",
    brand: "Apple",
    price: 599,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80",
    specs: ["A15 Bionic", "4GB RAM", "128GB", "5G"],
    badge: "Sale",
    badgeType: "sale",
    category: "apple"
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
        <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
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
    alert('Your cart is empty!');
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
    
    alert(`Welcome back! Signed in as ${user.email}`);
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
    alert(`Failed to sign in. ${message}`);
  }
}

async function handleSignUp(event) {
  event.preventDefault();
  
  const name = event.target[0].value;
  const email = event.target[1].value;
  const password = event.target[2].value;
  const confirmPassword = event.target[3].value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters long!');
    return;
  }
  
  try {
    await window.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
    
    alert(`Account created successfully! Welcome ${name}!`);
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
    alert(`Failed to create account. ${message}`);
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
    
    alert(`Welcome! Signed in with ${provider} as ${user.email || user.displayName}`);
    closePopup('accountPopup');
  } catch (error) {
    console.error('Social login error:', error);
    
    const errorMessages = {
      'auth/popup-closed-by-user': 'Login cancelled.',
      'auth/popup-blocked': 'Please allow popups for this site to use social login.'
    };
    
    const message = errorMessages[error.code] || error.message;
    alert(message === 'Login cancelled.' ? message : `Failed to sign in with ${provider}: ${message}`);
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
    alert('Signed out successfully!');
  } catch (error) {
    console.error('Sign out error:', error);
    alert('Failed to sign out.');
  }
}
