// Función para manejar la animación de elementos al hacer scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.reveal-text');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Función para manejar el selector de idiomas
function handleLanguageSelector() {
    const languageButtons = document.querySelectorAll('.language-selector button');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover la clase active de todos los botones
            languageButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase active al botón clickeado
            button.classList.add('active');
            
            // Aquí se puede añadir la lógica para cambiar el idioma
            const language = button.dataset.lang;
            // console.log('Cambiando idioma a:', language);
        });
    });
}

// Función para manejar el menú de navegación
function handleNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remover la clase active de todos los botones
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase active al botón clickeado
            button.classList.add('active');
        });
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    handleLanguageSelector();
    handleNavigation();
    
    // Añadir el evento scroll para las animaciones
    window.addEventListener('scroll', handleScrollAnimations);
}); 