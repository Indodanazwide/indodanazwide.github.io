document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const ariaExpanded = hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        hamburger.setAttribute('aria-expanded', ariaExpanded);
    });
});