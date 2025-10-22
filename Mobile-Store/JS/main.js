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

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistCount();
}

document.addEventListener('DOMContentLoaded', function() {
  displayProducts(products);
  setupNavigation();
  updateCartCount();
  updateWishlistCount();
});

function displayProducts(productsToShow) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  productsToShow.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80'">
        <span class="product-badge ${product.badgeType}">${product.badge}</span>
        <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlistItem(${product.id})">
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
          <span class="current-price">$${product.price}</span>
          ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
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
  
  document.getElementById('sectionTitle').textContent = title;
  document.getElementById('sectionDesc').textContent = desc;
  displayProducts(filtered);
}

function searchProducts() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (searchTerm === '') {
    displayProducts(products);
    document.getElementById('sectionTitle').textContent = 'Featured Phones';
    document.getElementById('sectionDesc').textContent = 'Discover the latest smartphones with amazing features and competitive prices';
    return;
  }
  
  const filtered = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.specs.some(spec => spec.toLowerCase().includes(searchTerm))
  );
  
  document.getElementById('sectionTitle').textContent = `Search Results for "${searchTerm}"`;
  document.getElementById('sectionDesc').textContent = `Found ${filtered.length} product(s)`;
  displayProducts(filtered);
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchProducts();
  }
});

function toggleWishlistItem(productId) {
  const product = products.find(p => p.id === productId);
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
  popup.classList.add('active');
  displayWishlistItems();
}

function displayWishlistItems() {
  const container = document.getElementById('wishlistItems');
  
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
        <div class="popup-item-price">$${item.price}</div>
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
  document.getElementById('wishlistCount').textContent = wishlist.length;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }
  
  saveCart();
  
  const btn = event.target.closest('.add-to-cart-btn');
  btn.textContent = 'Added!';
  btn.style.background = '#10b981';
  
  setTimeout(() => {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; stroke: white; stroke-width: 2; fill: none;">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      Add to Cart
    `;
    btn.style.background = '';
  }, 2000);
}

function toggleCart() {
  const popup = document.getElementById('cartPopup');
  popup.classList.add('active');
  displayCartItems();
}

function displayCartItems() {
  const container = document.getElementById('cartItems');
  
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
          <div class="popup-item-price">$${item.price * item.quantity}</div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `).join('')}
    <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <span style="font-size: 18px; font-weight: 600; color: #1f2937;">Total:</span>
        <span style="font-size: 24px; font-weight: 700; color: #2563eb;">$${total}</span>
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
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = totalItems;
}

function proceedToCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  const cartData = encodeURIComponent(JSON.stringify(cart));
  window.location.href = `pages/checkout.html?cart=${cartData}`;
}

function closePopup(popupId) {
  document.getElementById(popupId).classList.remove('active');
}

function closePopupOutside(event, popupId) {
  if (event.target.id === popupId) {
    closePopup(popupId);
  }
}

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.querySelector('.mobile-menu-btn');
  menu.classList.toggle('active');
  btn.classList.toggle('active');
}

function toggleAccount() {
  const popup = document.getElementById('accountPopup');
  popup.classList.add('active');
}

function switchAuthTab(tab) {
  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');
  
  tabs.forEach(t => t.classList.remove('active'));
  forms.forEach(f => f.classList.remove('active'));
  
  if (tab === 'signin') {
    tabs[0].classList.add('active');
    document.getElementById('signinForm').classList.add('active');
  } else {
    tabs[1].classList.add('active');
    document.getElementById('signupForm').classList.add('active');
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
    let errorMessage = 'Failed to sign in. ';
    
    if (error.code === 'auth/user-not-found') {
      errorMessage += 'No account found with this email.';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage += 'Incorrect password.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage += 'Invalid email address.';
    } else if (error.code === 'auth/invalid-credential') {
      errorMessage += 'Invalid email or password.';
    } else {
      errorMessage += error.message;
    }
    
    alert(errorMessage);
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
    const userCredential = await window.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
    const user = userCredential.user;
    
    alert(`Account created successfully! Welcome ${name}!`);
    closePopup('accountPopup');
    event.target.reset();
  } catch (error) {
    console.error('Sign up error:', error);
    let errorMessage = 'Failed to create account. ';
    
    if (error.code === 'auth/email-already-in-use') {
      errorMessage += 'This email is already registered.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage += 'Invalid email address.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage += 'Password is too weak.';
    } else {
      errorMessage += error.message;
    }
    
    alert(errorMessage);
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
    
    if (error.code === 'auth/popup-closed-by-user') {
      alert('Login cancelled.');
    } else if (error.code === 'auth/popup-blocked') {
      alert('Please allow popups for this site to use social login.');
    } else {
      alert(`Failed to sign in with ${provider}: ${error.message}`);
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
    alert('Signed out successfully!');
  } catch (error) {
    console.error('Sign out error:', error);
    alert('Failed to sign out.');
  }
}

function goToHome() {
  window.location.href = 'index.html';
}

function goToAccount() {
  const user = window.firebaseAuth.currentUser;
  
  if (user) {
    window.location.href = 'pages/account.html';
  } else {
    toggleAccount();
  }

}
