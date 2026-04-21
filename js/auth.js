// Auth JavaScript - Login and Signup Functionality

// State/City Data for Hierarchical Dropdowns
const stateCityData = {
  'maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
  'delhi': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
  'karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
  'tamil-nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'],
  'gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
  'rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer']
};

// DOM Elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const chipsContainer = document.getElementById('chips-container');
const interestsInput = document.getElementById('interests');

// Toggle Password Visibility
document.querySelectorAll('.toggle-password').forEach(button => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
});

// Hierarchical State/City Dropdowns
if (stateSelect && citySelect) {
  stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    
    // Clear existing options
    citySelect.innerHTML = '<option value="">Select City</option>';
    
    if (selectedState && stateCityData[selectedState]) {
      // Enable city dropdown and populate options
      citySelect.disabled = false;
      stateCityData[selectedState].forEach(city => {
        const option = document.createElement('option');
        option.value = city.toLowerCase().replace(/\s+/g, '-');
        option.textContent = city;
        citySelect.appendChild(option);
      });
    } else {
      // Disable city dropdown if no state selected
      citySelect.disabled = true;
      citySelect.innerHTML = '<option value="">Select State First</option>';
    }
  });
}

// Multi-select Chip Interface for Industrial Interests
if (chipsContainer && interestsInput) {
  const chips = chipsContainer.querySelectorAll('.chip');
  const selectedInterests = [];
  
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const value = chip.getAttribute('data-value');
      
      if (chip.classList.contains('selected')) {
        // Remove from selected
        chip.classList.remove('selected');
        const index = selectedInterests.indexOf(value);
        if (index > -1) {
          selectedInterests.splice(index, 1);
        }
      } else {
        // Add to selected
        chip.classList.add('selected');
        selectedInterests.push(value);
      }
      
      // Update hidden input
      interestsInput.value = selectedInterests.join(',');
    });
  });
}

// Login Form Submission with Redirect
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login (in production, this would be an API call)
    console.log('Login attempt:', { email, password });
    
    // Set localStorage for logged in state
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({ email }));
    
    // Redirect to seller dashboard
    window.location.href = 'seller-dashboard.html';
  });
}

// Signup Form Submission with Redirect
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      company: document.getElementById('company').value,
      state: document.getElementById('state').value,
      city: document.getElementById('city').value,
      interests: document.getElementById('interests').value,
      password: document.getElementById('password').value,
      confirmPassword: document.getElementById('confirm-password').value
    };
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Validate at least one interest selected
    if (!formData.interests) {
      alert('Please select at least one industrial interest!');
      return;
    }
    
    // Simulate signup (in production, this would be an API call)
    console.log('Signup attempt:', formData);
    
    // Set localStorage for logged in state
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({ email: formData.email }));
    
    // Redirect to seller dashboard
    window.location.href = 'seller-dashboard.html';
  });
}

// Social Login Buttons (Placeholder)
document.querySelectorAll('.social-btn').forEach(button => {
  button.addEventListener('click', () => {
    const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
    console.log(`${provider} login clicked`);
    // In production, this would redirect to OAuth flow
    alert(`${provider} login - Coming soon!`);
  });
});

// Initialize auth page
console.log('Auth page initialized');
