// Book Preview JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav__menu--open');
            navToggle.classList.toggle('nav__toggle--active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('nav__menu--open')) {
                navMenu.classList.remove('nav__menu--open');
                navToggle.classList.remove('nav__toggle--active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.toc-chapter, .chapter h3, .chapter h4');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add progress indicator for reading
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--color-accent);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
    
    // Add table of contents highlighting
    const tocChapters = document.querySelectorAll('.toc-chapter');
    const chapterSections = document.querySelectorAll('.chapter h3, .chapter h4');
    
    function updateTocHighlight() {
        const scrollTop = window.pageYOffset + 100;
        
        let currentSection = null;
        chapterSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollTop >= sectionTop) {
                currentSection = section;
            }
        });
        
        // Remove all active classes
        tocChapters.forEach(chapter => {
            chapter.classList.remove('toc-chapter--active');
        });
        
        // Add active class to current section
        if (currentSection) {
            const sectionId = currentSection.id;
            const correspondingToc = document.querySelector(`.toc-chapter a[href="#${sectionId}"]`);
            if (correspondingToc) {
                correspondingToc.closest('.toc-chapter').classList.add('toc-chapter--active');
            }
        }
    }
    
    // Update TOC highlighting on scroll
    window.addEventListener('scroll', updateTocHighlight);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Arrow keys for navigation
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight * 0.8,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            window.scrollBy({
                top: -window.innerHeight * 0.8,
                behavior: 'smooth'
            });
        }
        
        // Home key to go to top
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // End key to go to bottom
        if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
    

    
    // Add copy link functionality for sections
    chapterSections.forEach(section => {
        if (section.id) {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-link-button';
            copyButton.innerHTML = '🔗';
            copyButton.title = 'Copy link to section';
            copyButton.style.cssText = `
                background: none;
                border: none;
                cursor: pointer;
                font-size: 16px;
                opacity: 0.5;
                margin-left: 10px;
                transition: opacity 0.2s ease;
            `;
            
            copyButton.addEventListener('click', function() {
                const url = window.location.origin + window.location.pathname + '#' + section.id;
                navigator.clipboard.writeText(url).then(() => {
                    copyButton.innerHTML = '✓';
                    copyButton.style.opacity = '1';
                    setTimeout(() => {
                        copyButton.innerHTML = '🔗';
                        copyButton.style.opacity = '0.5';
                    }, 2000);
                });
            });
            
            section.appendChild(copyButton);
            
            // Show copy button on hover
            section.addEventListener('mouseenter', function() {
                copyButton.style.opacity = '1';
            });
            
            section.addEventListener('mouseleave', function() {
                copyButton.style.opacity = '0.5';
            });
        }
    });
    
    // Add estimated reading time
    function calculateReadingTime() {
        const text = document.querySelector('.chapter').textContent;
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute
        
        const readingTimeElement = document.createElement('div');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.innerHTML = `📖 Estimated reading time: ${readingTime} minute${readingTime !== 1 ? 's' : ''}`;
        readingTimeElement.style.cssText = `
            text-align: center;
            color: var(--color-text-muted);
            font-size: 14px;
            margin-bottom: 20px;
            font-style: italic;
        `;
        
        const chapterTitle = document.querySelector('.chapter-title');
        if (chapterTitle) {
            chapterTitle.parentNode.insertBefore(readingTimeElement, chapterTitle.nextSibling);
        }
    }
    
    calculateReadingTime();
    
    // Add table of contents collapse/expand functionality
    const tocChapterHeaders = document.querySelectorAll('.toc-chapter h3');
    tocChapterHeaders.forEach(header => {
        const chapter = header.closest('.toc-chapter');
        const list = chapter.querySelector('ul');
        
        if (list) {
            // Start with lists collapsed
            list.style.display = 'none';
            
            const toggleButton = document.createElement('button');
            toggleButton.className = 'toc-toggle';
            toggleButton.innerHTML = '▶';
            toggleButton.style.cssText = `
                background: none;
                border: none;
                cursor: pointer;
                font-size: 12px;
                margin-left: 10px;
                transition: transform 0.2s ease;
            `;
            
            header.appendChild(toggleButton);
            
            // Make entire header clickable
            header.style.cursor = 'pointer';
            
            const toggleList = function(e) {
                e.stopPropagation();
                const isVisible = list.style.display !== 'none';
                list.style.display = isVisible ? 'none' : 'block';
                toggleButton.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
                toggleButton.innerHTML = isVisible ? '▶' : '▼';
            };
            
            // Click on header toggles the list
            header.addEventListener('click', toggleList);
            
            // Click on toggle button also toggles the list
            toggleButton.addEventListener('click', toggleList);
        }
    });
    
    // Initialize with first section visible
    updateTocHighlight();
}); 