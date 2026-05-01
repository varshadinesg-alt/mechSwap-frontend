// Protected Route Wrapper - Check authentication before allowing access
function requireAuth() {
  if (!AuthContext.isAuthenticated()) {
    Toast.error('Please login to access this page');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
    return false;
  }
  return true;
}

// Initialize protected route check on page load
document.addEventListener('DOMContentLoaded', function() {
  // Check if current page requires authentication
  const protectedPages = ['seller-dashboard.html', 'add-product.html'];
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage)) {
    requireAuth();
  }
});
