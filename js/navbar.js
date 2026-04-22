// Global Navbar Injection Script
function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    if (navbarPlaceholder) {
        const navbarHTML = `
            <!-- Header Menu -->
            <header class="header-menu">
                <nav class="nav-container">
                    <div class="nav-logo">
                        <img src="assets/images/logo_2.jpeg" alt="MechSwap" class="nav-logo-img">
                    </div>
                    <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                    <ul class="nav-links" id="nav-links">
                        <li><a href="product-list.html" class="nav-link">Categories</a></li>
                        <li><a href="product-list.html" class="nav-link">Marketplace</a></li>
                        <li><a href="about.html" class="nav-link">About Us</a></li>
                        <li><a href="help-center.html" class="nav-link">Help</a></li>
                    </ul>
                    <div class="nav-right-section">
                        <div class="nav-auth-buttons" id="auth-buttons">
                            <a href="login.html" class="btn btn-outline" id="signin-btn">Sign In</a>
                            <a href="signup.html" class="btn btn-primary" id="getstarted-btn">Get Started</a>
                        </div>
                        <div class="nav-user-profile" id="user-profile" style="display: none;">
                            <div class="user-info">
                                <span class="user-name" id="user-name">John Doe</span>
                                <span class="verified-badge" id="user-verified-badge">
                                    <i class="fas fa-check-circle"></i>
                                </span>
                            </div>
                            <div class="nav-action-buttons">
                                <a href="seller-dashboard.html" class="btn btn-primary" id="dashboard-btn">Dashboard</a>
                                <button class="btn btn-outline" id="logout-btn">Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        `;

        navbarPlaceholder.innerHTML = navbarHTML;
        showUserProfile();
        initMobileMenu();
    }
}

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

function showUserProfile() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const authButtons = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const userName = document.getElementById('user-name');
    
    if (isLoggedIn) {
        const storedUserName = localStorage.getItem('userName');
        if (userName && storedUserName) {
            userName.textContent = storedUserName;
        }
        if (authButtons) authButtons.style.display = 'none';
        if (userProfile) userProfile.style.display = 'flex';
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
    }
}

// Logout functionality
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'logout-btn') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        window.location.href = 'index.html';
    }
});

// Load navbar on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}
