// Seller Dashboard JavaScript

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const contentViews = document.querySelectorAll('.content-view');
const profileForm = document.getElementById('profile-form');
const securityForm = document.getElementById('security-form');
const machineryTableBody = document.getElementById('machinery-table-body');

// View Switching Functionality
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const view = item.getAttribute('data-view');
    
    // Handle logout
    if (item.classList.contains('logout')) {
      if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
      }
      return;
    }
    
    // Switch active nav item
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
    
    // Switch content view
    contentViews.forEach(view => view.classList.remove('active'));
    const targetView = document.getElementById(view);
    if (targetView) {
      targetView.classList.add('active');
    }
  });
});

// LocalStorage Logic for Profile
function saveProfileToLocalStorage(data) {
  localStorage.setItem('sellerProfile', JSON.stringify(data));
}

function loadProfileFromLocalStorage() {
  const savedProfile = localStorage.getItem('sellerProfile');
  if (savedProfile) {
    const profileData = JSON.parse(savedProfile);
    
    // Populate form fields
    document.getElementById('company-name').value = profileData.companyName || '';
    document.getElementById('gst-number').value = profileData.gstNumber || '';
    document.getElementById('factory-address').value = profileData.factoryAddress || '';
  }
}

// Profile Form Submission
if (profileForm) {
  // Load saved profile on page load
  loadProfileFromLocalStorage();
  
  // Real-time error clearing on input
  const inputs = profileForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorElement = input.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.classList.remove('visible');
      }
    });
  });
  
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    let isValid = true;
    
    inputs.forEach(input => {
      const value = input.value.trim();
      const errorElement = input.parentElement.querySelector('.error-message');
      
      if (!value) {
        input.classList.add('error');
        if (errorElement) {
          errorElement.classList.add('visible');
        }
        isValid = false;
      }
    });
    
    if (!isValid) {
      return;
    }
    
    const profileData = {
      companyName: document.getElementById('company-name').value,
      gstNumber: document.getElementById('gst-number').value,
      factoryAddress: document.getElementById('factory-address').value
    };
    
    saveProfileToLocalStorage(profileData);
    alert('Profile saved successfully!');
  });
}

// Security Form Submission
if (securityForm) {
  // Real-time error clearing on input
  const inputs = securityForm.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorElement = input.parentElement.querySelector('.error-message:not(.password-match)');
      if (errorElement) {
        errorElement.classList.remove('visible');
      }
      
      // Check password match on new password or confirm password input
      if (input.id === 'new-password' || input.id === 'confirm-password') {
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const matchError = document.getElementById('confirm-password').parentElement.querySelector('.error-message.password-match');
        
        if (newPassword && confirmPassword && newPassword !== confirmPassword) {
          matchError.classList.add('visible');
        } else {
          matchError.classList.remove('visible');
        }
      }
    });
  });
  
  securityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    let isValid = true;
    
    inputs.forEach(input => {
      const value = input.value.trim();
      const errorElement = input.parentElement.querySelector('.error-message:not(.password-match)');
      
      if (!value) {
        input.classList.add('error');
        if (errorElement) {
          errorElement.classList.add('visible');
        }
        isValid = false;
      }
    });
    
    if (!isValid) {
      return;
    }
    
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const matchError = document.getElementById('confirm-password').parentElement.querySelector('.error-message.password-match');
    
    // Password match validation
    if (newPassword !== confirmPassword) {
      matchError.classList.add('visible');
      return;
    }
    
    // Password length validation
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    
    // Simulate password change
    alert('Password changed successfully!');
    securityForm.reset();
    // Clear all error messages
    inputs.forEach(input => {
      input.classList.remove('error');
      const errorElement = input.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.classList.remove('visible');
      }
    });
  });
}

// Delete Functionality for Machinery Table
function handleDelete(button) {
  const row = button.closest('tr');
  const machineryName = row.querySelector('td').textContent;
  
  if (confirm(`Are you sure you want to delete "${machineryName}"?`)) {
    row.remove();
    alert('Machinery listing deleted successfully!');
  }
}

// Edit Functionality for Machinery Table
function handleEdit(button) {
  const row = button.closest('tr');
  const machineryId = row.getAttribute('data-id');
  
  // Get machinery data from the row
  const name = row.querySelector('td:nth-child(1)').textContent;
  const category = row.querySelector('td:nth-child(2)').textContent;
  const priceText = row.querySelector('td:nth-child(3)').textContent.replace('₹', '').replace(/,/g, '');
  const price = parseInt(priceText);
  
  // Populate modal with current data
  document.getElementById('edit-machine-name').value = name;
  document.getElementById('edit-category').value = category;
  document.getElementById('edit-price').value = price;
  
  // Store the current row and machinery ID for later use
  document.getElementById('edit-form').dataset.machineryId = machineryId;
  document.getElementById('edit-form').dataset.rowIndex = Array.from(row.parentElement.children).indexOf(row);
  
  // Show modal
  document.getElementById('edit-modal').classList.add('active');
}

// Add event listeners for Edit and Delete buttons
document.addEventListener('DOMContentLoaded', () => {
  const editButtons = document.querySelectorAll('.btn-edit');
  const deleteButtons = document.querySelectorAll('.btn-delete');
  
  editButtons.forEach(button => {
    button.addEventListener('click', () => handleEdit(button));
  });
  
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => handleDelete(button));
  });
  
  // Modal event listeners
  const cancelEditBtn = document.getElementById('cancel-edit');
  const editForm = document.getElementById('edit-form');
  const editModal = document.getElementById('edit-modal');
  
  // Close modal on Cancel button click
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', () => {
      editModal.classList.remove('active');
      editForm.reset();
    });
  }
  
  // Close modal when clicking outside modal content
  if (editModal) {
    editModal.addEventListener('click', (e) => {
      if (e.target === editModal) {
        editModal.classList.remove('active');
        editForm.reset();
      }
    });
  }
  
  // Handle form submission
  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const machineryId = editForm.dataset.machineryId;
      const rowIndex = editForm.dataset.rowIndex;
      const newName = document.getElementById('edit-machine-name').value;
      const newCategory = document.getElementById('edit-category').value;
      const newPrice = parseInt(document.getElementById('edit-price').value);
      
      // Update the table row
      const tableBody = document.getElementById('machinery-table-body');
      if (tableBody && rowIndex !== undefined) {
        const row = tableBody.children[rowIndex];
        if (row) {
          row.querySelector('td:nth-child(1)').textContent = newName;
          row.querySelector('td:nth-child(2)').textContent = newCategory;
          row.querySelector('td:nth-child(3)').textContent = '₹' + newPrice.toLocaleString();
          
          // Close modal and reset form
          editModal.classList.remove('active');
          editForm.reset();
        }
      }
    });
  }
});

// Dynamic row addition for new machinery (for future use)
function addMachineryRow(data) {
  const newRow = document.createElement('tr');
  newRow.setAttribute('data-id', data.id);
  newRow.innerHTML = `
    <td>${data.name}</td>
    <td>${data.category}</td>
    <td>${data.price}</td>
    <td><span class="status active">Active</span></td>
    <td>
      <button class="btn-edit"><i class="fas fa-edit"></i> Edit</button>
      <button class="btn-delete"><i class="fas fa-trash"></i> Delete</button>
    </td>
  `;
  
  // Add event listeners to new buttons
  const editBtn = newRow.querySelector('.btn-edit');
  const deleteBtn = newRow.querySelector('.btn-delete');
  
  editBtn.addEventListener('click', () => handleEdit(editBtn));
  deleteBtn.addEventListener('click', () => handleDelete(deleteBtn));
  
  machineryTableBody.appendChild(newRow);
}

// Initialize dashboard
console.log('Seller Dashboard initialized');

// Revenue Chart
function initRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx) return;

  // Generate last 7 days labels
  const labels = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }

  // Sample revenue data (in ₹)
  const revenueData = [45000, 52000, 48000, 61000, 55000, 67000, 72000];

  // Create gradient fill
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(45, 212, 191, 0.3)');
  gradient.addColorStop(1, 'rgba(45, 212, 191, 0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Revenue (₹)',
        data: revenueData,
        borderColor: '#2DD4BF',
        backgroundColor: gradient,
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#2DD4BF',
        pointBorderColor: '#2DD4BF',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#2DD4BF',
        pointHoverBorderColor: '#2DD4BF',
        pointHoverBorderWidth: 2,
        pointHoverShadow: '0 0 10px rgba(45, 212, 191, 0.5)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(45, 212, 191, 0.3)',
          borderWidth: 1,
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return '₹' + context.parsed.y.toLocaleString();
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(51, 65, 85, 0.3)',
            drawBorder: false
          },
          ticks: {
            color: 'rgba(148, 163, 184, 1)',
            font: {
              size: 12
            }
          }
        },
        y: {
          grid: {
            color: 'rgba(51, 65, 85, 0.3)',
            drawBorder: false
          },
          ticks: {
            color: 'rgba(148, 163, 184, 1)',
            font: {
              size: 12
            },
            callback: function(value) {
              return '₹' + value.toLocaleString();
            }
          }
        }
      }
    }
  });
}

// Initialize revenue chart on page load
document.addEventListener('DOMContentLoaded', () => {
  initRevenueChart();
});

// Toggle Password Visibility
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-password');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetInput = document.getElementById(targetId);
      const icon = button.querySelector('i');
      
      if (targetInput.type === 'password') {
        targetInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        targetInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });
});

// Add New Machinery Form Functionality
const addMachineryForm = document.getElementById('add-machinery-form');
const dragDropZone = document.getElementById('dragDropZone');
const mediaUpload = document.getElementById('media-upload');
const filePreview = document.getElementById('file-preview');
let selectedFiles = [];

// File upload functionality for Add New form
if (dragDropZone && mediaUpload && filePreview) {
  // Click-to-browse
  dragDropZone.addEventListener('click', () => {
    mediaUpload.click();
  });

  // Drag & Drop support
  dragDropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragDropZone.style.borderColor = '#1abc9c';
    dragDropZone.style.background = 'rgba(26, 188, 156, 0.1)';
  });

  dragDropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dragDropZone.style.borderColor = '';
    dragDropZone.style.background = '';
  });

  dragDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dragDropZone.style.borderColor = '';
    dragDropZone.style.background = '';
    
    const files = Array.from(e.dataTransfer.files);
    selectedFiles = [...selectedFiles, ...files];
    handleFiles(selectedFiles);
  });

  // File input change
  mediaUpload.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    selectedFiles = [...selectedFiles, ...files];
    handleFiles(selectedFiles);
  });

  // Handle file preview
  function handleFiles(files) {
    filePreview.innerHTML = '';
    
    files.forEach((file, index) => {
      const previewItem = document.createElement('div');
      previewItem.className = 'preview-item';
      
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.innerHTML = '×';
      removeBtn.onclick = (e) => {
        e.stopPropagation();
        selectedFiles.splice(index, 1);
        handleFiles(selectedFiles);
      };
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewItem.innerHTML = `
            <img src="${e.target.result}" alt="${file.name}">
            <span class="file-name">${file.name}</span>
          `;
          previewItem.appendChild(removeBtn);
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith('video/')) {
        previewItem.innerHTML = `
          <i class="fas fa-video video-icon"></i>
          <span class="file-name">${file.name}</span>
        `;
        previewItem.appendChild(removeBtn);
      }
      
      filePreview.appendChild(previewItem);
    });
  }
}

// Add New Machinery Form Submission
if (addMachineryForm) {
  addMachineryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('machinery-name').value,
      category: document.getElementById('category').value,
      price: document.getElementById('price').value,
      location: document.getElementById('location').value,
      description: document.getElementById('description').value,
      images: selectedFiles
    };
    
    // Add to machinery table
    const machineryTableBody = document.getElementById('machinery-table-body');
    if (machineryTableBody) {
      const newRow = document.createElement('tr');
      newRow.setAttribute('data-id', Date.now());
      newRow.innerHTML = `
        <td>${formData.name}</td>
        <td>${formData.category}</td>
        <td>₹${parseInt(formData.price).toLocaleString()}</td>
        <td><span class="status active">Active</span></td>
        <td>
          <button class="btn-edit"><i class="fas fa-edit"></i> Edit</button>
          <button class="btn-delete"><i class="fas fa-trash"></i> Delete</button>
        </td>
      `;
      
      // Add event listeners to new buttons
      const editBtn = newRow.querySelector('.btn-edit');
      const deleteBtn = newRow.querySelector('.btn-delete');
      
      editBtn.addEventListener('click', () => handleEdit(editBtn));
      deleteBtn.addEventListener('click', () => handleDelete(deleteBtn));
      
      machineryTableBody.appendChild(newRow);
    }
    
    // Reset form
    addMachineryForm.reset();
    selectedFiles = [];
    if (filePreview) filePreview.innerHTML = '';
    
    // Switch to My Machinery view
    const myMachineryNav = document.querySelector('[data-view="my-machinery"]');
    if (myMachineryNav) {
      myMachineryNav.click();
    }
    
    alert('Machinery added successfully!');
  });
}
