// Main script file

function openMenu() {
    const dropdown = document.getElementById('menu-dropdown');
    if (!dropdown) return;
    if (_menuCloseTimeout) {
        clearTimeout(_menuCloseTimeout);
        _menuCloseTimeout = null;
    }
    dropdown.classList.remove('menu-closing');
    dropdown.classList.add('menu-open');
}

function closeMenu() {
    const dropdown = document.getElementById('menu-dropdown');
    if (!dropdown) return;
    if (dropdown.classList.contains('menu-open')) {
        dropdown.classList.add('menu-closing');
        dropdown.classList.remove('menu-open');
        setTimeout(() => {
            dropdown.classList.remove('menu-closing');
        }, 600);
    }
}

let _menuCloseTimeout = null;

function scheduleCloseMenu() {
    _menuCloseTimeout = setTimeout(() => {
        closeMenu();
        _menuCloseTimeout = null;
    }, 120);
}

// Hover-based open/close
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.getElementById('menu-dropdown');

    if (menuButton && dropdown) {
        menuButton.addEventListener('mouseenter', openMenu);
        menuButton.addEventListener('mouseleave', scheduleCloseMenu);
        dropdown.addEventListener('mouseenter', openMenu);
        dropdown.addEventListener('mouseleave', scheduleCloseMenu);
    }
});

// Social icon typewriter effect and icon shifting
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    // Create label spans and set up typewriter effect
    socialIcons.forEach((icon) => {
        const label = icon.getAttribute('aria-label');
        if (label) {
            const labelSpan = document.createElement('span');
            labelSpan.className = 'social-icon-label';
            labelSpan.setAttribute('data-full-text', label);
            icon.appendChild(labelSpan);
            
            let typewriterTimeout = null;
            let currentText = '';
            
            icon.addEventListener('mouseenter', () => {
                // Clear any existing timeout
                if (typewriterTimeout) {
                    clearTimeout(typewriterTimeout);
                }
                
                // Reset text
                currentText = '';
                labelSpan.textContent = '';
                labelSpan.style.opacity = '1';
                
                // Shift icons to the right
                const container = icon.closest('.footer-social-icons') || icon.closest('.head-social-icons');
                if (container) {
                    const icons = Array.from(container.querySelectorAll('.social-icon'));
                    const currentIndex = icons.indexOf(icon);
                    
                    // Calculate the width needed for the label
                    // Temporarily set full text to measure
                    labelSpan.textContent = label;
                    labelSpan.style.opacity = '1';
                    const labelWidth = labelSpan.offsetWidth;
                    labelSpan.textContent = '';
                    
                    // Shift subsequent icons
                    icons.forEach((otherIcon, otherIndex) => {
                        if (otherIndex > currentIndex) {
                            otherIcon.style.transition = 'transform 0.3s ease';
                            otherIcon.style.transform = `translateX(${labelWidth + 10}px)`;
                        }
                    });
                }
                
                // Typewriter effect
                const fullText = label;
                let charIndex = 0;
                
                const typeChar = () => {
                    if (charIndex < fullText.length) {
                        currentText += fullText[charIndex];
                        labelSpan.textContent = currentText;
                        charIndex++;
                        typewriterTimeout = setTimeout(typeChar, 50); // 50ms per character
                    }
                };
                
                typeChar();
            });
            
            icon.addEventListener('mouseleave', () => {
                // Clear typewriter
                if (typewriterTimeout) {
                    clearTimeout(typewriterTimeout);
                }
                
                // Reset label
                labelSpan.textContent = '';
                labelSpan.style.opacity = '0';
                
                // Reset icon positions
                const container = icon.closest('.footer-social-icons') || icon.closest('.head-social-icons');
                if (container) {
                    const icons = container.querySelectorAll('.social-icon');
                    icons.forEach(otherIcon => {
                        otherIcon.style.transition = 'transform 0.3s ease';
                        otherIcon.style.transform = 'translateX(0)';
                    });
                }
            });
        }
    });
});

// Feature selection for project pages
document.addEventListener('DOMContentLoaded', () => {
    const featureNames = document.querySelectorAll('.feature-name');
    const featureContentItems = document.querySelectorAll('.feature-content-item');
    
    if (featureNames.length > 0 && featureContentItems.length > 0) {
        featureNames.forEach(featureName => {
            featureName.addEventListener('click', () => {
                const featureId = featureName.getAttribute('data-feature');
                
                // Remove active class from all feature names
                featureNames.forEach(name => name.classList.remove('active'));
                
                // Add active class to clicked feature name
                featureName.classList.add('active');
                
                // Hide all feature content items
                featureContentItems.forEach(item => item.classList.remove('active'));
                
                // Show selected feature content
                const targetContent = document.getElementById(featureId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});


// ===== Scroll Reveal =====
(function () {
    var SELECTORS = [
        // Shared
        '.content-header',
        // Index
        '.projects-item',
        '.about-section',
        '.also-do-section',
        // About
        '.head-section',
        '.community-item',
        '.skill-category',
        // Projects listing
        '.project-item',
        // Play
        '.play-item-wrapper',
        '.play-header',
        '.play-featured',
        // Project detail pages
        '.project-header-container',
        '.key-info',
        '.overview-card',
        '.feature-item',
        '.problem-statement-container',
        '.analysis-item',
        '.analysis-block',
        '.features-container',
    ].join(', ');

    var outsideDesign = document.querySelector('#outside-design');

    var elements = Array.from(document.querySelectorAll(SELECTORS)).filter(function (el) {
        return !outsideDesign || !outsideDesign.contains(el);
    });

    // Stagger siblings that share the same parent
    var parentMap = new Map();
    elements.forEach(function (el) {
        var p = el.parentElement;
        if (!parentMap.has(p)) parentMap.set(p, []);
        parentMap.get(p).push(el);
    });
    parentMap.forEach(function (children) {
        if (children.length > 1) {
            children.forEach(function (child, i) {
                child.style.transitionDelay = Math.min(i * 0.06, 0.24) + 's';
            });
        }
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px 60px 0px' });

    elements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            // Already visible on load — reveal immediately without animation
            el.classList.add('reveal', 'in-view');
        } else {
            el.classList.add('reveal');
            observer.observe(el);
        }
    });

    // Work cards — earlier trigger so they animate in before fully entering view
    var workCards = Array.from(document.querySelectorAll('.work-card'));
    var workParentMap = new Map();
    workCards.forEach(function (el) {
        var p = el.parentElement;
        if (!workParentMap.has(p)) workParentMap.set(p, []);
        workParentMap.get(p).push(el);
    });
    workParentMap.forEach(function (children) {
        if (children.length > 1) {
            children.forEach(function (child, i) {
                child.style.transitionDelay = Math.min(i * 0.06, 0.24) + 's';
            });
        }
    });

    var workObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                workObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });

    workCards.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('reveal', 'in-view');
        } else {
            el.classList.add('reveal');
            workObserver.observe(el);
        }
    });
})();
