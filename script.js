const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav ul');

navToggle.addEventListener('click', () => {
    // Toggle the 'nav-open' class on the <ul> element
    nav.classList.toggle('nav-open');

    // Optional: Animate hamburger icon
    navToggle.classList.toggle('nav-open'); // Use same class for button state if needed for CSS
});

// Optional: Close nav when a link is clicked (useful for single-page apps, but good practice)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-open')) {
            nav.classList.remove('nav-open');
            navToggle.classList.remove('nav-open');
        }
    });
});

// Optional: Close nav if clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        navToggle.classList.remove('nav-open');
    }
});