// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Cerrar menú al hacer click en un link (mobile UX)
        const links = navLinks.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggle.setAttribute('aria-expanded', false);
            });
        });
    }

});