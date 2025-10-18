/**
 * Footer Loader - Efficiently loads footer content across all pages
 * Features: Error handling, fallback content, performance optimization
 */
(function() {
    'use strict';
    
    // Cache footer content to avoid multiple requests
    let footerCache = null;
    let isLoading = false;
    
    // Fallback footer HTML
    const fallbackFooter = `
        <footer class="footer bg-dark text-light py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Aaditya Borse</h5>
                        <p class="mb-0">Full Stack Developer and Master'sStudent</p>
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
     * Load footer content with error handling and caching
     */
    async function loadFooter() {
        if (footerCache) {
            return footerCache;
        }
        
        if (isLoading) {
            return new Promise(resolve => {
                const checkCache = setInterval(() => {
                    if (footerCache) {
                        clearInterval(checkCache);
                        resolve(footerCache);
                    }
                }, 50);
            });
        }
        
        isLoading = true;
        
        try {
            const response = await fetch('footer.html', {
                method: 'GET',
                headers: {
                    'Accept': 'text/html',
                    'Cache-Control': 'no-cache'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const footerHTML = await response.text();
            footerCache = footerHTML;
            return footerHTML;
            
        } catch (error) {
            console.warn('Failed to load footer, using fallback:', error.message);
            return fallbackFooter;
        } finally {
            isLoading = false;
        }
    }
    
    /**
     * Initialize footer on DOM ready
     */
    function initFooter() {
        const footerContainer = document.getElementById('footer-container');
        
        if (!footerContainer) {
            console.warn('Footer container not found');
            return;
        }
        
        loadFooter().then(html => {
            footerContainer.innerHTML = html;
        }).catch(error => {
            console.error('Footer loading failed:', error);
            footerContainer.innerHTML = fallbackFooter;
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();
