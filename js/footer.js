// Global Footer Injection Script
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        const footerHTML = `
            <!-- Global Footer -->
            <footer class="global-footer">
                <div class="footer-container">
                    <div class="footer-grid">
                        <!-- Left Column -->
                        <div class="footer-left">
                            <div class="footer-logo">
                                <img src="assets/images/logo_2.jpeg" alt="MechSwap">
                            </div>
                            <p class="footer-description">Modern Marketplace for Industrial Machinery. Connect buyers and sellers globally with trusted, verified listings.</p>
                            
                            <div class="footer-contact">
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:mechswap09@gmail.com">mechswap09@gmail.com</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>
                                    <a href="tel:+919914865830">+91 99148-65830</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>
                                    <a href="tel:+919915865830">+91 99158-65830</a>
                                </div>
                            </div>

                            <div class="footer-social">
                                <a href="https://twitter.com/mechswap" target="_blank" class="social-link">
                                    <i class="fab fa-x-twitter"></i>
                                </a>
                                <a href="https://instagram.com/mechswap" target="_blank" class="social-link">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/mechswap" target="_blank" class="social-link">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Right Column -->
                        <div class="footer-right">
                            <h3 class="footer-heading">Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="help-center.html">Help</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>&copy; 2024 MechSwap. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
        
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Load footer on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
