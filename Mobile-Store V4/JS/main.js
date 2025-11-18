// ========== DEBOUNCE ==========
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// ========== STATE MANAGEMENT ==========
let wishlist = [];
let cart = [];

async function loadData() {
  try {
    const cartData = await window.storage.get('cart');
    const wishlistData = await window.storage.get('wishlist');
    
    cart = cartData ? JSON.parse(cartData.value) : [];
    wishlist = wishlistData ? JSON.parse(wishlistData.value) : [];
  } catch (error) {
    cart = [];
    wishlist = [];
  }
}

async function saveCart() {
  try {
    await window.storage.set('cart', JSON.stringify(cart));
    updateCartCount();
  } catch (error) {
    console.error('Failed to save cart');
  }
}

async function saveWishlist() {
  try {
    await window.storage.set('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
  } catch (error) {
    console.error('Failed to save wishlist');
  }
}

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', async function() {
  await loadData(); 
  filterProducts('home');
  setupNavigation();
  setupSearchListener();
  updateCartCount();
  updateWishlistCount();
});

// ========== PRODUCT DISPLAY ==========
function displayProducts(productsToShow) {
  const heroSection = document.querySelector('.hero-section');
  const brandsSection = document.querySelector('.brands-section');
  const promoBanners = document.querySelector('.promo-banners');
  const productsListContainer = document.getElementById('products-list-container');
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';

  productsToShow.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = function(e) {
      // Don't open if clicking wishlist or add to cart buttons
      if (e.target.closest('.wishlist-btn') || e.target.closest('.add-to-cart-btn')) {
        return;
      }
      openProductDetails(product.id);
    };
    card.style.cursor = 'pointer';
    
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80'">
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
            ${product.specs.slice(0, 3).map(spec => `<span class="spec-item">${spec}</span>`).join('')}
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
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-more-btn)');
  const dropdownLinks = document.querySelectorAll('.nav-dropdown-link');
  
  // Handle main nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      dropdownLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
      
      const category = this.getAttribute('data-category');
      filterProducts(category);
    });
  });
  
  // Handle dropdown links
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      dropdownLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
      
      const category = this.getAttribute('data-category');
      filterProducts(category);
      
      // Close dropdown
      const moreMenu = document.getElementById('moreMenu');
      const moreBtn = document.querySelector('.nav-more-btn');
      if (moreMenu) moreMenu.classList.remove('active');
      if (moreBtn) moreBtn.classList.remove('active');
    });
  });
}

// Toggle More Dropdown
function toggleMoreMenu(event) {
  event.stopPropagation();
  const moreMenu = document.getElementById('moreMenu');
  const moreBtn = event.currentTarget;
  
  if (moreMenu && moreBtn) {
    moreMenu.classList.toggle('active');
    moreBtn.classList.toggle('active');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const moreMenu = document.getElementById('moreMenu');
  const moreBtn = document.querySelector('.nav-more-btn');
  
  if (moreMenu && moreBtn && !event.target.closest('.nav-dropdown')) {
    moreMenu.classList.remove('active');
    moreBtn.classList.remove('active');
  }
});

function filterProducts(category) {
  const heroSection = document.querySelector('.hero-section');
  const brandsSection = document.querySelector('.brands-section');
  const promoBanners = document.querySelector('.promo-banners');
  const productsListContainer = document.getElementById('products-list-container');
  const featuresSection = document.querySelector('.features-section');
  const categoriesSection = document.querySelector('.categories-section');
  const testimonialsSection = document.querySelector('.testimonials-section');
  const newsletterSection = document.querySelector('.newsletter-section');
  
  let filtered = products;
  let title = 'Featured Phones';
  let desc = 'Discover the latest smartphones with amazing features and competitive prices';
  
  if (category === 'home') {
    if (productsListContainer) productsListContainer.style.display = 'none';
    if (heroSection) heroSection.style.display = 'block';
    if (brandsSection) brandsSection.style.display = 'grid';
    if (promoBanners) promoBanners.style.display = 'grid';
    if (featuresSection) featuresSection.style.display = 'grid';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (testimonialsSection) testimonialsSection.style.display = 'block';
    if (newsletterSection) newsletterSection.style.display = 'block';
    return; 
  }
  
  if (heroSection) heroSection.style.display = 'none';
  if (brandsSection) brandsSection.style.display = 'none';
  if (promoBanners) promoBanners.style.display = 'none';
  if (featuresSection) featuresSection.style.display = 'none';
  if (categoriesSection) categoriesSection.style.display = 'none';
  if (testimonialsSection) testimonialsSection.style.display = 'none';
  if (newsletterSection) newsletterSection.style.display = 'none';
  if (productsListContainer) productsListContainer.style.display = 'block';
  
  if (category === 'all') {
    filtered = products;
    title = 'All Phones';
    desc = 'Browse our complete collection of smartphones';
  } else if (category === 'apple') {
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
  } else if (category === 'OPPO') {
    filtered = products.filter(p => p.category === 'OPPO');
    title = 'Oppo';
    desc = 'Discover Oppo\'s powerful series smartphones';
  } else if (category === 'Realme') {
    filtered = products.filter(p => p.category === 'Realme');
    title = 'Realme';
    desc = 'Realme smartphones at competitive prices';
  } else if (category === 'ONEPLUS') {
    filtered = products.filter(p => p.category === 'ONEPLUS');
    title = 'OnePlus';
    desc = 'OnePlus smartphones at competitive prices';
  } else if (category === 'HONOR') {
    filtered = products.filter(p => p.category === 'HONOR');
    title = 'Honor';
    desc = 'Honor smartphones at competitive prices';
  } else if (category === 'Vivo') {
    filtered = products.filter(p => p.category === 'Vivo');
    title = 'Vivo';
    desc = 'Vivo smartphones at competitive prices';
  } else if (category === 'GOOGLE PIXEL') {
    filtered = products.filter(p => p.category === 'GOOGLE PIXEL');
    title = 'Google Pixel';
    desc = 'Google Pixel smartphones at competitive prices';
  } else if (category === 'NOTHING') {
    filtered = products.filter(p => p.category === 'NOTHING');
    title = 'Nothing';
    desc = 'Nothing smartphones at competitive prices';
  } else if (category === 'deals') {
    filtered = products.filter(p => p.badgeType === 'sale');
    title = 'Hot Deals';
    desc = 'Amazing discounts on premium smartphones - Limited time offers!';
  }
  
updateSectionHeader(title, desc);
  
// Initialize filters for the products page
initializeFilters();

// Reset filter UI only (don't apply filters yet)
resetFilters();

// Display the category filtered products
displayProducts(filtered);

// Update result count
const resultCount = document.getElementById('resultCount');
const totalCount = document.getElementById('totalCount');
if (resultCount) resultCount.textContent = filtered.length;
if (totalCount) totalCount.textContent = products.length;
}

// ========== FILTER MULTIPLE BRANDS ==========
function filterMultipleBrands(brandsList) {
  const heroSection = document.querySelector('.hero-section');
  const brandsSection = document.querySelector('.brands-section');
  const promoBanners = document.querySelector('.promo-banners');
  const productsListContainer = document.getElementById('products-list-container');
  const featuresSection = document.querySelector('.features-section');
  const categoriesSection = document.querySelector('.categories-section');
  const testimonialsSection = document.querySelector('.testimonials-section');
  const newsletterSection = document.querySelector('.newsletter-section');
  
  if (heroSection) heroSection.style.display = 'none';
  if (brandsSection) brandsSection.style.display = 'none';
  if (promoBanners) promoBanners.style.display = 'none';
  if (featuresSection) featuresSection.style.display = 'none';
  if (categoriesSection) categoriesSection.style.display = 'none';
  if (testimonialsSection) testimonialsSection.style.display = 'none';
  if (newsletterSection) newsletterSection.style.display = 'none';
  if (productsListContainer) productsListContainer.style.display = 'block';
  
  let filtered = products.filter(p => brandsList.includes(p.category.toLowerCase()));
  
  updateSectionHeader('Premium Phones', 'Apple & Samsung flagship devices');
  
  initializeFilters();
  resetFilters();
  
  displayProducts(filtered);
  
  const resultCount = document.getElementById('resultCount');
  const totalCount = document.getElementById('totalCount');
  if (resultCount) resultCount.textContent = filtered.length;
  if (totalCount) totalCount.textContent = products.length;
}
// ========== FILTER BY PRICE RANGE ==========
function filterByPriceRange(minPrice, maxPrice, title, description) {
  const heroSection = document.querySelector('.hero-section');
  const brandsSection = document.querySelector('.brands-section');
  const promoBanners = document.querySelector('.promo-banners');
  const productsListContainer = document.getElementById('products-list-container');
  const featuresSection = document.querySelector('.features-section');
  const categoriesSection = document.querySelector('.categories-section');
  const testimonialsSection = document.querySelector('.testimonials-section');
  const newsletterSection = document.querySelector('.newsletter-section');
  
  if (heroSection) heroSection.style.display = 'none';
  if (brandsSection) brandsSection.style.display = 'none';
  if (promoBanners) promoBanners.style.display = 'none';
  if (featuresSection) featuresSection.style.display = 'none';
  if (categoriesSection) categoriesSection.style.display = 'none';
  if (testimonialsSection) testimonialsSection.style.display = 'none';
  if (newsletterSection) newsletterSection.style.display = 'none';
  if (productsListContainer) productsListContainer.style.display = 'block';
  
  let filtered = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
  
  filtered.sort((a, b) => a.price - b.price);
  
  updateSectionHeader(title, description);
  
  initializeFilters();
  resetFilters();
  
  displayProducts(filtered);
  
  const resultCount = document.getElementById('resultCount');
  const totalCount = document.getElementById('totalCount');
  if (resultCount) resultCount.textContent = filtered.length;
  if (totalCount) totalCount.textContent = products.length;
}

function updateSectionHeader(title, desc) {
  const titleEl = document.getElementById('sectionTitle');
  const descEl = document.getElementById('sectionDesc');
  
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
}

// ========== SEARCH ==========
const debouncedSearch = debounce(searchProducts, 300);

function setupSearchListener() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', debouncedSearch);
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
  
  const detailsPopup = document.getElementById('productDetailsPopup');
  if (detailsPopup && detailsPopup.classList.contains('active')) {
    openProductDetails(productId);
  }
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
  
  const detailsPopup = document.getElementById('productDetailsPopup');
  if (detailsPopup && detailsPopup.classList.contains('active')) {
    setTimeout(() => {
      openProductDetails(productId);
    }, 2100); 
  }
}

function showAddToCartFeedback() {
  const btn = event.target.closest('.add-to-cart-btn, .detail-add-cart-btn');
  if (!btn) return;
  
  const originalContent = btn.innerHTML;
  btn.innerHTML = 'Added!';
  btn.style.background = '#10b981';
  btn.style.transform = 'scale(0.95)';

  setTimeout(() => {
    btn.innerHTML = originalContent;
    btn.style.background = '';
    btn.style.transform = '';
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
  filterProducts('home');
  
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.nav-dropdown-link').forEach(l => l.classList.remove('active'));
  
  const homeLink = document.querySelector('.nav-link[data-category="home"]');
  if (homeLink) homeLink.classList.add('active');
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
// Add text truncation styles dynamically
const style = document.createElement('style');
style.textContent = `
  .product-name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
document.head.appendChild(style);

// ========== NEWSLETTER SUBSCRIPTION ==========
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = event.target[0].value;
  
  showNotification(`Thank you! We'll send updates to ${email}`, 'success', 'Subscribed!');
  event.target.reset();
}

// ========== AUTO SLIDER WITH VIDEO ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const videos = document.querySelectorAll('.hero-video');
let autoSlideInterval = null;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    const video = slide.querySelector('.hero-video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
  
  slides[index].classList.add('active');
  const activeVideo = slides[index].querySelector('.hero-video');
  if (activeVideo) {
    activeVideo.play();
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function setupAutoSlide() {
  videos.forEach((video, index) => {
    video.addEventListener('ended', function() {
      if (slides[index].classList.contains('active')) {
        nextSlide();
      }
    });
    
    video.addEventListener('error', function() {
      console.log('Video error, using fallback timing');
      if (slides[index].classList.contains('active')) {
        setTimeout(nextSlide, 8000); 
      }
    });
  });
}

if (videos.length > 0) {
  videos[0].play();
  setupAutoSlide();
}

// ========== PRODUCT DETAILS POPUP ==========
function openProductDetails(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const popup = document.getElementById('productDetailsPopup');
  const body = document.getElementById('productDetailsBody');
  
  if (!popup || !body) return;
  
  // Calculate discount
  let discount = '';
  if (product.oldPrice) {
    const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    discount = `<span class="detail-discount">-${discountPercent}%</span>`;
  }
  
  // Rating
  const rating = product.rating || 4.5;
  const reviews = product.reviews || 0;
  const stars = '⭐'.repeat(Math.floor(rating));
  
  // Check wishlist
  const isInWishlist = wishlist.some(item => item.id === productId);
  
  // Check for detailed specs
  const hasDetailedSpecs = product.detailedSpecs;
  const hasColors = product.colors && product.colors.length > 0;
  const description = product.description || 'No description available for this product.';
  
  body.innerHTML = `
    <div class="product-detail-hero">
      <div class="product-detail-image">
        <span class="product-detail-badge ${product.badgeType}">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80'">
      </div>
      
      <div class="product-detail-info">
        <div class="product-detail-brand">${product.brand}</div>
        <h3 class="product-detail-name">${product.name}</h3>
        
        <div class="product-detail-rating">
          <span class="rating-stars">${stars}</span>
          <span class="rating-text">${rating}/5 (${reviews} reviews)</span>
        </div>
        
        <div class="product-detail-price">
          <span class="detail-current-price">${product.price.toLocaleString()} EGP</span>
          ${product.oldPrice ? `<span class="detail-old-price">${product.oldPrice.toLocaleString()} EGP</span>` : ''}
          ${discount}
        </div>
        
        <p class="product-detail-description">${description}</p>
        
        <div class="product-detail-stock">
          <svg style="width: 20px; height: 20px; stroke: ${product.inStock !== false ? '#10b981' : '#ef4444'}; fill: none; stroke-width: 2;" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="${product.inStock !== false ? 'stock-available' : 'stock-unavailable'}">
            ${product.inStock !== false ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <div class="product-detail-actions">
          <button class="detail-add-cart-btn" onclick="addToCart(${product.id}); event.stopPropagation();">
            <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; stroke: white; fill: none; stroke-width: 2;">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Add to Cart
          </button>
          <button class="detail-wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlistItem(${product.id}); event.stopPropagation();">
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div class="product-detail-tabs">
      <div class="detail-tabs-nav">
        <button class="detail-tab-btn active" onclick="switchDetailTab(event, 'specs')">Specifications</button>
        ${hasColors ? '<button class="detail-tab-btn" onclick="switchDetailTab(event, \'colors\')">Available Colors</button>' : ''}
        <button class="detail-tab-btn" onclick="switchDetailTab(event, 'shipping')">Shipping & Delivery</button>
      </div>
      
      <div class="detail-tab-content active" id="detail-tab-specs">
        ${hasDetailedSpecs ? `
          <div class="specs-grid">
            <div class="spec-item-detail">
              <div class="spec-label">Processor</div>
              <div class="spec-value">${product.detailedSpecs.processor}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">RAM</div>
              <div class="spec-value">${product.detailedSpecs.ram}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">Storage</div>
              <div class="spec-value">${product.detailedSpecs.storage}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">Network</div>
              <div class="spec-value">${product.detailedSpecs.network}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">Display</div>
              <div class="spec-value">${product.detailedSpecs.screen}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">Battery</div>
              <div class="spec-value">${product.detailedSpecs.battery}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">Rear Camera</div>
              <div class="spec-value">${product.detailedSpecs.camera}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">Front Camera</div>
              <div class="spec-value">${product.detailedSpecs.frontCamera}</div>
            </div>
            <div class="spec-item-detail">
              <div class="spec-label">Operating System</div>
              <div class="spec-value">${product.detailedSpecs.os}</div>
            </div>
          </div>
        ` : `
          <div class="specs-grid">
            ${product.specs.map(spec => `
              <div class="spec-item-detail">
                <div class="spec-value">${spec}</div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
      
      ${hasColors ? `
        <div class="detail-tab-content" id="detail-tab-colors">
          <div class="colors-list">
            ${product.colors.map(color => `
              <div class="color-option">${color}</div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="detail-tab-content" id="detail-tab-shipping">
        <div class="shipping-info">
          <h4>
            <svg style="width: 24px; height: 24px; stroke: #2563eb; fill: none; stroke-width: 2;" viewBox="0 0 24 24">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            Shipping Information
          </h4>
          <p><strong>Delivery Time:</strong> ${product.delivery || '2-5 Business Days'}</p>
          <p><strong>Shipping:</strong> ${product.freeShipping !== false ? 'Free shipping across Egypt' : 'Shipping fee calculated at checkout'}</p>
          <p><strong>Delivery:</strong> Delivered through certified shipping companies</p>
          <p><strong>Warranty:</strong> Official warranty for 1 year on all products</p>
        </div>
      </div>
    </div>
  `;
  
  popup.classList.add('active');
}

// Switch between tabs
function switchDetailTab(event, tabName) {
  // Remove active from all buttons
  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Remove active from all contents
  document.querySelectorAll('.detail-tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // Add active to clicked button
  event.target.classList.add('active');
  
  // Show selected content
  const contentId = `detail-tab-${tabName}`;
  const content = document.getElementById(contentId);
  if (content) {
    content.classList.add('active');
  }
}
// ========== FILTER POPUP SYSTEM ==========
let filterState = {
  brands: [],
  minPrice: 0,
  maxPrice: 100000,
  ram: [],
  storage: [],
  network: [],
  camera: [],
  battery: [],
  status: [],
  sortBy: 'default'
};

let tempFilterState = {...filterState};

// Open Filter Popup
function openFilterPopup() {
  const popup = document.getElementById('filterPopup');
  if (popup) {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Copy current filters to temp
    tempFilterState = JSON.parse(JSON.stringify(filterState));
    
    // Update UI to reflect current filters
    updateFilterUI();
  }
}

// Close Filter Popup
function closeFilterPopup() {
  const popup = document.getElementById('filterPopup');
  if (popup) {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close popup when clicking outside
function closeFilterPopupOutside(event) {
  if (event.target.id === 'filterPopup') {
    closeFilterPopup();
  }
}

// Initialize Filters
function initializeFilters() {
  setupPriceRange();
  generateFilterOptions();
  updateFilterCounts();
}

// Generate Filter Options
// Generate Filter Options
function generateFilterOptions() {
  const brands = [...new Set(products.map(p => p.brand))];
  const rams = [...new Set(products.flatMap(p => {
    const ramSpec = p.specs.find(s => s.includes('RAM'));
    return ramSpec ? [ramSpec] : [];
  }))].sort();
  
  const storages = [...new Set(products.flatMap(p => {
    const storageSpec = p.specs.find(s => s.match(/\d+GB/) && !s.includes('RAM'));
    return storageSpec ? [storageSpec] : [];
  }))].sort();
  
  // Network
  const networks = ['5G', '4G'];
  
  // Camera detailedSpecs
  const cameras = [...new Set(products.flatMap(p => {
    if (p.detailedSpecs && p.detailedSpecs.camera) {
      return [p.detailedSpecs.camera];
    }
    return [];
  }))].sort();
  
  // Battery 
  const batteryRanges = [
    { label: 'Less than 4000mAh', min: 0, max: 3999 },
    { label: '4000-4500mAh', min: 4000, max: 4500 },
    { label: '4500-5000mAh', min: 4500, max: 5000 },
    { label: '5000mAh and above', min: 5000, max: 10000 }
  ];
  
  const statuses = [...new Set(products.map(p => p.badgeType))];

  // Brand Filters
  const brandFilters = document.getElementById('brandFilters');
  if (brandFilters) {
    brandFilters.innerHTML = brands.map(brand => {
      const count = products.filter(p => p.brand === brand).length;
      return `
        <div class="filter-option">
          <input type="checkbox" id="brand-${brand}" value="${brand}" onchange="updateTempFilter('brands', '${brand}')">
          <label for="brand-${brand}">${brand}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join('');
  }

  // RAM Filters
  const ramFilters = document.getElementById('ramFilters');
  if (ramFilters) {
    ramFilters.innerHTML = rams.map(ram => {
      const count = products.filter(p => p.specs.includes(ram)).length;
      const displayRam = ram.replace(' RAM', '');
      return `
        <div class="filter-option">
          <input type="checkbox" id="ram-${ram}" value="${ram}" onchange="updateTempFilter('ram', '${ram}')">
          <label for="ram-${ram}">${displayRam}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join('');
  }

  // Storage Filters
  const storageFilters = document.getElementById('storageFilters');
  if (storageFilters) {
    storageFilters.innerHTML = storages.map(storage => {
      const count = products.filter(p => p.specs.includes(storage)).length;
      return `
        <div class="filter-option">
          <input type="checkbox" id="storage-${storage}" value="${storage}" onchange="updateTempFilter('storage', '${storage}')">
          <label for="storage-${storage}">${storage}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join('');
  }

  // Network Filters (5G & 4G only)
  const networkFilters = document.getElementById('networkFilters');
  if (networkFilters) {
    networkFilters.innerHTML = networks.map(network => {
      const count = products.filter(p => p.specs.includes(network)).length;
      return `
        <div class="filter-option">
          <input type="checkbox" id="network-${network}" value="${network}" onchange="updateTempFilter('network', '${network}')">
          <label for="network-${network}">${network}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join('');
  }

  // Camera Filters (Rear Camera)
  const cameraFilters = document.getElementById('cameraFilters');
  if (cameraFilters) {
    cameraFilters.innerHTML = cameras.map(camera => {
      const count = products.filter(p => p.detailedSpecs && p.detailedSpecs.camera === camera).length;
      return `
        <div class="filter-option">
          <input type="checkbox" id="camera-${camera.replace(/\s+/g, '-')}" value="${camera}" onchange="updateTempFilter('camera', \`${camera}\`)">
          <label for="camera-${camera.replace(/\s+/g, '-')}">${camera}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join('');
  }

  // Battery Filters
  const batteryFilters = document.getElementById('batteryFilters');
  if (batteryFilters) {
    batteryFilters.innerHTML = batteryRanges.map((range, index) => {
      const count = products.filter(p => {
        if (p.detailedSpecs && p.detailedSpecs.battery) {
          const batteryValue = parseInt(p.detailedSpecs.battery.match(/\d+/));
          return batteryValue >= range.min && batteryValue <= range.max;
        }
        return false;
      }).length;
      return `
        <div class="filter-option">
          <input type="checkbox" id="battery-${index}" value="${range.label}" onchange="updateTempFilter('battery', '${range.label}')">
          <label for="battery-${index}">${range.label}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join('');
  }

  // Status Filters
  const statusFilters = document.getElementById('statusFilters');
  if (statusFilters) {
    statusFilters.innerHTML = statuses.map(status => {
      const count = products.filter(p => p.badgeType === status).length;
      const displayName = status === 'new' ? 'New Arrivals' : 'On Sale';
      return `
        <div class="filter-option">
          <input type="checkbox" id="status-${status}" value="${status}" onchange="updateTempFilter('status', '${status}')">
          <label for="status-${status}">${displayName}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join('');
  }
}

// Setup Price Range
function setupPriceRange() {
  const minRange = document.getElementById('minRange');
  const maxRange = document.getElementById('maxRange');
  const minInput = document.getElementById('minInput');
  const maxInput = document.getElementById('maxInput');
  const rangeSelected = document.getElementById('rangeSelected');

  if (!minRange || !maxRange) return;

  function updateRangeSlider() {
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);
    
    if (maxVal - minVal < 1000) {
      if (event.target === minRange) {
        minRange.value = maxVal - 1000;
      } else {
        maxRange.value = minVal + 1000;
      }
    }
    
    const minPercent = (minRange.value / minRange.max) * 100;
    const maxPercent = (maxRange.value / maxRange.max) * 100;
    
    if (rangeSelected) {
      rangeSelected.style.left = minPercent + '%';
      rangeSelected.style.width = (maxPercent - minPercent) + '%';
    }
    
    if (minInput) minInput.value = minRange.value;
    if (maxInput) maxInput.value = maxRange.value;
    
    tempFilterState.minPrice = parseInt(minRange.value);
    tempFilterState.maxPrice = parseInt(maxRange.value);
  }

  minRange.addEventListener('input', updateRangeSlider);
  maxRange.addEventListener('input', updateRangeSlider);

  if (minInput) {
    minInput.addEventListener('change', function() {
      minRange.value = this.value;
      updateRangeSlider();
    });
  }

  if (maxInput) {
    maxInput.addEventListener('change', function() {
      maxRange.value = this.value;
      updateRangeSlider();
    });
  }
  
  updateRangeSlider();
}

// Update Temporary Filter State
function updateTempFilter(filterType, value) {
  const index = tempFilterState[filterType].indexOf(value);
  
  if (index > -1) {
    tempFilterState[filterType].splice(index, 1);
  } else {
    tempFilterState[filterType].push(value);
  }
}

// Update Filter UI to reflect current state
function updateFilterUI() {
  // Update checkboxes
  document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
    const filterType = cb.id.split('-')[0];
    const value = cb.value;
    
    let isChecked = false;
    
    if (filterType === 'brand') {
      isChecked = tempFilterState.brands.includes(value);
    } else if (filterType === 'ram') {
      isChecked = tempFilterState.ram.includes(value);
    } else if (filterType === 'storage') {
      isChecked = tempFilterState.storage.includes(value);
    } else if (filterType === 'network') {
      isChecked = tempFilterState.network.includes(value);
    } else if (filterType === 'camera') {
    isChecked = tempFilterState.camera.includes(value);
    } else if (filterType === 'battery') {
    isChecked = tempFilterState.battery.includes(value);
    } else if (filterType === 'status') {
      isChecked = tempFilterState.status.includes(value);
    }
    
    cb.checked = isChecked;
  });

  // Update price range
  const minRange = document.getElementById('minRange');
  const maxRange = document.getElementById('maxRange');
  const minInput = document.getElementById('minInput');
  const maxInput = document.getElementById('maxInput');
  const rangeSelected = document.getElementById('rangeSelected');

  if (minRange) minRange.value = tempFilterState.minPrice;
  if (maxRange) maxRange.value = tempFilterState.maxPrice;
  if (minInput) minInput.value = tempFilterState.minPrice;
  if (maxInput) maxInput.value = tempFilterState.maxPrice;

  if (rangeSelected) {
    const minPercent = (tempFilterState.minPrice / 100000) * 100;
    const maxPercent = (tempFilterState.maxPrice / 100000) * 100;
    rangeSelected.style.left = minPercent + '%';
    rangeSelected.style.width = (maxPercent - minPercent) + '%';
  }

  // Update sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = tempFilterState.sortBy;
}

// Update Filter Counts
function updateFilterCounts() {
  const resultCount = document.getElementById('resultCount');
  const totalCount = document.getElementById('totalCount');
  
  if (resultCount) resultCount.textContent = products.length;
  if (totalCount) totalCount.textContent = products.length;
}

// Apply Filters and Close Popup
function applyFiltersAndClose() {
  // Update sort from select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    tempFilterState.sortBy = sortSelect.value;
  }
  
  // Copy temp state to actual filter state
  filterState = JSON.parse(JSON.stringify(tempFilterState));
  
  // Apply filters
  applyFilters();
  
  // Close popup
  closeFilterPopup();
  
  // Show notification
  showNotification('Filters applied successfully!', 'success');
}

// Apply Filters (without closing popup)
// Apply Filters (without closing popup)
function applyFilters() {
  let filtered = [...products];

  // Brand Filter
  if (filterState.brands.length > 0) {
    filtered = filtered.filter(p => filterState.brands.includes(p.brand));
  }

  // Price Filter
  filtered = filtered.filter(p => p.price >= filterState.minPrice && p.price <= filterState.maxPrice);

  // RAM Filter
  if (filterState.ram.length > 0) {
    filtered = filtered.filter(p => filterState.ram.some(ram => p.specs.includes(ram)));
  }

  // Storage Filter
  if (filterState.storage.length > 0) {
    filtered = filtered.filter(p => filterState.storage.some(storage => p.specs.includes(storage)));
  }

  // Network Filter
  if (filterState.network.length > 0) {
    filtered = filtered.filter(p => filterState.network.some(network => p.specs.includes(network)));
  }

  // Camera Filter
  if (filterState.camera.length > 0) {
    filtered = filtered.filter(p => 
      p.detailedSpecs && filterState.camera.includes(p.detailedSpecs.camera)
    );
  }

  // Battery Filter
  if (filterState.battery.length > 0) {
    filtered = filtered.filter(p => {
      if (!p.detailedSpecs || !p.detailedSpecs.battery) return false;
      
      const batteryValue = parseInt(p.detailedSpecs.battery.match(/\d+/));
      
      return filterState.battery.some(range => {
        if (range === 'Less than 4000mAh') return batteryValue < 4000;
        if (range === '4000-4500mAh') return batteryValue >= 4000 && batteryValue <= 4500;
        if (range === '4500-5000mAh') return batteryValue > 4500 && batteryValue <= 5000;
        if (range === '5000mAh and above') return batteryValue > 5000;
        return false;
      });
    });
  }

  // Status Filter
  if (filterState.status.length > 0) {
    filtered = filtered.filter(p => filterState.status.includes(p.badgeType));
  }

  // Sort
  switch(filterState.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  // Update counts
  const resultCount = document.getElementById('resultCount');
  const totalCount = document.getElementById('totalCount');
  
  if (resultCount) resultCount.textContent = filtered.length;
  if (totalCount) totalCount.textContent = products.length;

  // Display filtered products
  displayProducts(filtered);
}

// Reset Filters
function resetFilters() {
  filterState = {
    brands: [],
    minPrice: 0,
    maxPrice: 100000,
    ram: [],
    storage: [],
    network: [],
    camera: [],
    battery: [],
    status: [],
    sortBy: 'default'
  };
  
  tempFilterState = {...filterState};

  // Reset all checkboxes
  document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => cb.checked = false);

  // Reset price inputs
  const minRange = document.getElementById('minRange');
  const maxRange = document.getElementById('maxRange');
  const minInput = document.getElementById('minInput');
  const maxInput = document.getElementById('maxInput');

  if (minRange) minRange.value = 0;
  if (maxRange) maxRange.value = 100000;
  if (minInput) minInput.value = 0;
  if (maxInput) maxInput.value = 100000;

  // Reset sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'default';

  // Update slider visuals
  const rangeSelected = document.getElementById('rangeSelected');
  if (rangeSelected) {
    rangeSelected.style.left = '0%';
    rangeSelected.style.width = '100%';
  }

  // DON'T call applyFilters() here - just reset the UI
}
  
  tempFilterState = {...filterState};

  // Reset all checkboxes
  document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => cb.checked = false);

  // Reset price inputs
  const minRange = document.getElementById('minRange');
  const maxRange = document.getElementById('maxRange');
  const minInput = document.getElementById('minInput');
  const maxInput = document.getElementById('maxInput');

  if (minRange) minRange.value = 0;
  if (maxRange) maxRange.value = 100000;
  if (minInput) minInput.value = 0;
  if (maxInput) maxInput.value = 100000;

  // Reset sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'default';

  // Update slider visuals
  const rangeSelected = document.getElementById('rangeSelected');
  if (rangeSelected) {
    rangeSelected.style.left = '0%';
    rangeSelected.style.width = '100%';
  }

  // Apply reset filters
  applyFilters();
