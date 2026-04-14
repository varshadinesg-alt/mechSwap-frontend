// MechSwap - Main JavaScript File

// Placeholder function for handling State/City dropdown logic
function initLocationDropdowns(stateSelectId, citySelectId) {
  // Initialize state dropdown
  populateStates(stateSelectId);
  
  // Initialize city dropdown behavior
  populateCities(stateSelectId, citySelectId);
}

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', function() {
  console.log('MechSwap - Main.js loaded');
  
  // Initialize location dropdowns when page loads
  // Example usage: initLocationDropdowns('state', 'city');
  
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
  
  // Add any other global interactions
  console.log('Global interactions initialized');
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

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initLocationDropdowns,
    validateForm
  };
}
