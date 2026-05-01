// AuthContext - Vanilla JS State Management for Authentication
const AuthContext = {
  token: null,
  user: null,
  isLoggedIn: false,

  // Initialize from localStorage
  init() {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken) {
      this.token = storedToken;
      this.isLoggedIn = true;
    }
    
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  },

  // Login method
  login(token, user) {
    this.token = token;
    this.user = user;
    this.isLoggedIn = true;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', user.name);
  },

  // Logout method
  logout() {
    this.token = null;
    this.user = null;
    this.isLoggedIn = false;
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  },

  // Check if user is authenticated
  isAuthenticated() {
    return this.isLoggedIn && this.token !== null;
  },

  // Get current user
  getCurrentUser() {
    return this.user;
  },

  // Get token
  getToken() {
    return this.token;
  }
};

// Initialize on load
AuthContext.init();
