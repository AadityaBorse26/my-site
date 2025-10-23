/**
 * Footer Loader - Injects footer content across all pages
 */
(function() {
    'use strict';
    
    // Footer HTML content
    const footerHTML = `
        <footer class="footer bg-dark text-light py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Aaditya Borse</h5>
                        <p class="mb-0">Full Stack Developer and Master's Student</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <div class="social-links">
                            <a href="https://github.com/AadityaBorse26" class="text-light me-3" target="_blank" rel="noopener">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com/in/aaditya-borse" class="text-light me-3" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </a>
                            <a href="mailto:borsea@uci.edu" class="text-light">
                                <i class="fas fa-envelope fa-lg"></i>
                            </a>
                        </div>
                        <p class="mt-2 mb-0">&copy; 2024 Aaditya Borse. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    /**
     * Initialize footer on DOM ready
     */
    function initFooter() {
        const footerContainer = document.getElementById('footer-container');
        
        if (!footerContainer) {
            console.warn('Footer container not found');
            return;
        }
        
        footerContainer.innerHTML = footerHTML;
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();

