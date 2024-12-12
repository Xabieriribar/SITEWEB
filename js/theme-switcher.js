// Theme Switcher
class ThemeSwitcher {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.toggleBtn = document.querySelector('.theme-toggle');
        if (this.toggleBtn) {
            this.init();
        }
    }

    init() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.theme);
        
        // Add event listener
        this.toggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }
}

// Scroll Progress
class ScrollProgress {
    constructor() {
        this.progressBar = document.querySelector('.scroll-progress');
        this.lastScrollTop = 0;
        this.header = document.querySelector('.header');
        this.backToTopBtn = document.querySelector('.back-to-top');
        if (this.progressBar && this.backToTopBtn) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateProgress();
            if (this.header) this.toggleHeader();
            this.toggleBackToTop();
        });

        this.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.progressBar.style.width = scrolled + '%';
    }

    toggleHeader() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > this.lastScrollTop && currentScroll > 100) {
            this.header.classList.add('hidden');
        } else {
            this.header.classList.remove('hidden');
        }
        this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    toggleBackToTop() {
        if (window.pageYOffset > 300) {
            this.backToTopBtn.classList.add('visible');
        } else {
            this.backToTopBtn.classList.remove('visible');
        }
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.heroSection = document.querySelector('.hero-parallax');
        if (this.heroSection) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateParallax();
        });
    }

    updateParallax() {
        const scroll = window.pageYOffset;
        const speed = 0.5;
        this.heroSection.style.transform = `translateY(${scroll * speed}px)`;
    }
}

// Language Selector
class LanguageSelector {
    constructor() {
        this.buttons = document.querySelectorAll('.language-selector button');
        if (this.buttons.length > 0) {
            this.init();
        }
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.setActiveLanguage(button);
            });
        });
    }

    setActiveLanguage(selectedButton) {
        this.buttons.forEach(button => {
            button.classList.remove('active');
            button.setAttribute('aria-pressed', 'false');
        });
        selectedButton.classList.add('active');
        selectedButton.setAttribute('aria-pressed', 'true');
        // Here you would typically handle language change logic
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
    new ScrollProgress();
    new ParallaxEffect();
    new LanguageSelector();
}); 