// MechSwap - Main JavaScript File

// Layout Injection Function
async function loadLayout() {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');


  if (navbarPlaceholder) {
    const navbarResponse = await fetch('navbar.html');
    const navbarHtml = await navbarResponse.text();
    navbarPlaceholder.innerHTML = navbarHtml;
  }

  // Show user profile if logged in
  showUserProfile();
}

// Show user profile if logged in
function showUserProfile() {
  const authButtons = document.getElementById('auth-buttons');
  const userProfile = document.getElementById('user-profile');
  const logoutBtn = document.getElementById('logout-btn');
  
  if (authButtons && userProfile) {
    const user = localStorage.getItem('user');
    
    if (user) {
      authButtons.style.display = 'none';
      userProfile.style.display = 'flex';
    } else {
      authButtons.style.display = 'flex';
      userProfile.style.display = 'none';
    }
    
    // Handle logout
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
      });
    }
  }
}

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', async function() {
  
  // Load navbar from partial file
  await loadLayout();
  
  // Add any other global functionality here
  initGlobalInteractions();
});

// Global interactions placeholder
function initGlobalInteractions() {
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add mobile menu functionality if needed
  initMobileMenu();
  
  // Initialize search functionality for product listings
  initSearchFunctionality();
  
  // Initialize filter toggle functionality
  initFilterToggle();
  
  // Initialize collapsible filter toggle functionality
  initCollapsibleFilterToggle();
  
  // Add any other global interactions
}

// Search simulation functionality
function initSearchFunctionality() {
  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.product-card');
  
  if (searchInput && productCards.length > 0) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase().trim();
      
      productCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        const location = card.getAttribute('data-location').toLowerCase();
        
        // Check if search term matches title, category, or location
        const matchesSearch = title.includes(searchTerm) || 
                            category.includes(searchTerm) || 
                            location.includes(searchTerm);
        
        if (matchesSearch || searchTerm === '') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

// Filter toggle functionality
function initFilterToggle() {
  const filterOptions = document.querySelectorAll('.filter-option');
  
  filterOptions.forEach(option => {
    option.addEventListener('click', function() {
      const checkbox = this.querySelector('input[type="checkbox"]');
      
      // Toggle checkbox state
      checkbox.checked = !checkbox.checked;
      
      // Toggle selected class
      if (checkbox.checked) {
        this.classList.add('selected');
      } else {
        this.classList.remove('selected');
      }
    });
  });
}

// Collapsible filter toggle function
function toggleFilter(filterId) {
  const filterGroup = document.getElementById(filterId);
  filterGroup.classList.toggle('active');
}

// Initialize collapsible filter toggle functionality
function initCollapsibleFilterToggle() {
  const collapsibleFilters = document.querySelectorAll('.collapsible-filter');
  
  collapsibleFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const filterId = this.getAttribute('data-filter-id');
      toggleFilter(filterId);
    });
  });
}

// Mobile menu placeholder
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
}

// Utility functions
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
    
    return isValid;
  }
}
