// Auth JavaScript - Login and Signup Functionality with Backend API

// API Base URL
const API_BASE_URL = 'http://localhost:5000/api/auth';

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

// Login Form Submission with API Call
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Store in AuthContext
        AuthContext.login(data.token, data.user);
        Toast.success('Welcome back!');
        
        // Redirect to seller dashboard
        setTimeout(() => {
          window.location.href = 'seller-dashboard.html';
        }, 1000);
      } else {
        Toast.error(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      Toast.error('Server error. Please try again.');
    }
  });
}

// Signup Form Submission with API Call
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      state: document.getElementById('state').value,
      city: document.getElementById('city').value,
      interests: document.getElementById('interests').value ? document.getElementById('interests').value.split(',') : [],
      password: document.getElementById('password').value,
      confirmPassword: document.getElementById('confirm-password').value
    };
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      Toast.error('Passwords do not match!');
      return;
    }
    
    // Validate at least one interest selected
    if (formData.interests.length === 0) {
      Toast.error('Please select at least one industrial interest!');
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Store in AuthContext
        AuthContext.login(data.token, data.user);
        Toast.success('Account created successfully!');
        
        // Redirect to seller dashboard
        setTimeout(() => {
          window.location.href = 'seller-dashboard.html';
        }, 1000);
      } else {
        Toast.error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      Toast.error('Server error. Please try again.');
    }
  });
}

// Social Login Buttons (Placeholder)
document.querySelectorAll('.social-btn').forEach(button => {
  button.addEventListener('click', () => {
    const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
    // In production, this would redirect to OAuth flow
    Toast.error(`${provider} login - Coming soon!`);
  });
});

// Initialize auth page
