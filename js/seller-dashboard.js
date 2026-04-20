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
  
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
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
  securityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validation
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    
    // Simulate password change
    alert('Password changed successfully!');
    securityForm.reset();
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
  
  // For now, just show an alert
  alert(`Edit functionality for machinery ID: ${machineryId} - This would open the edit form`);
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
