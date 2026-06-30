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
     * Skill Tag Color Mapping Logic
     */
    const SKILL_MAP = {
        // Languages & Core (Amber)
        'python': 'language',
        'typescript': 'language',
        'javascript': 'language',
        'js': 'language',
        'html5/css3': 'language',
        'html5': 'language',
        'css3': 'language',
        'html': 'language',
        'css': 'language',
        'sql': 'language',
        'c++': 'language',
        'cpp': 'language',
        'c': 'language',
        'java': 'language',
        'bash': 'language',
        'php': 'language',

        // Frameworks & Libs (Cyan)
        'react': 'framework',
        'react.js': 'framework',
        'react native': 'framework',
        'node.js': 'framework',
        'node': 'framework',
        'flask': 'framework',
        'django': 'framework',
        'bootstrap': 'framework',
        'tailwind': 'framework',
        'tailwindcss': 'framework',
        'vue': 'framework',
        'vue.js': 'framework',
        'angular': 'framework',
        'express': 'framework',
        'express.js': 'framework',
        'laravel': 'framework',
        'd3.js': 'framework',
        'd3': 'framework',
        'sass': 'framework',
        'less': 'framework',

        // Tools, Cloud & Databases (Purple)
        'aws': 'tool',
        'docker': 'tool',
        'postgresql': 'tool',
        'postgres': 'tool',
        'git/github': 'tool',
        'git': 'tool',
        'github': 'tool',
        'openai': 'tool',
        'api': 'tool',
        'apis': 'tool',
        'cockroachdb': 'tool',
        'raspberry pi': 'tool',
        'nginx': 'tool',
        'kubernetes': 'tool',
        'firebase': 'tool',
        'mongodb': 'tool',
        'mysql': 'tool',
        'sqlite': 'tool',
        'redis': 'tool',
        'graphql': 'tool',
        'rocksdb': 'tool',
        'web scraping': 'tool',
        
        // Research, Topics & Systems (Purple)
        'hci': 'tool',
        'human-computer interaction': 'tool',
        'ai tutors': 'tool',
        'explainable ai': 'tool',
        'user study': 'tool',
        'distributed systems': 'tool',
        'neural networks': 'tool',
        'deep learning': 'tool',
        'fault tolerance': 'tool',
        'mobile ai': 'tool',
        'privacy': 'tool',
        'database systems': 'tool',
        'concurrency control': 'tool'
    };

    function initSkills() {
        const tags = document.querySelectorAll('.bento-tag, .tech-tag');
        tags.forEach(tag => {
            const text = tag.textContent.trim().toLowerCase();
            
            // Find category
            let category = 'tool'; // default fallback
            if (SKILL_MAP[text]) {
                category = SKILL_MAP[text];
            } else {
                // Check substring matching for partial matches
                for (const [key, val] of Object.entries(SKILL_MAP)) {
                    if (text.includes(key) || key.includes(text)) {
                        category = val;
                        break;
                    }
                }
            }
            
            // Normalize classes: remove existing tag-* classes
            tag.classList.remove('tag-language', 'tag-framework', 'tag-tool');
            
            // Add correct category class
            tag.classList.add(`tag-${category}`);
            
            // Ensure base bento-tag class is present
            tag.classList.add('bento-tag');
        });
    }

    /**
     * Initialize components on DOM ready
     */
    function initAll() {
        initFooter();
        initSkills();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();

