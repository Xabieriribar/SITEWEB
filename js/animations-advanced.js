// Reveal elements on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal-text');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize animations
function init() {
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check for elements in view
    revealOnScroll();
    
    // Initialize smooth scroll
    initSmoothScroll();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 