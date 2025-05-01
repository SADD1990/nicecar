document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.querySelector('.main-nav ul');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isVisible = primaryNav.getAttribute('data-visible') === "true";
            primaryNav.setAttribute('data-visible', !isVisible);
            navToggle.setAttribute('aria-expanded', !isVisible);
        });

        // Close nav when a link is clicked
        primaryNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (primaryNav.getAttribute('data-visible') === "true") {
                    primaryNav.setAttribute('data-visible', false);
                    navToggle.setAttribute('aria-expanded', false);
                }
            });
        });

        // Close nav if clicking outside of it
        document.addEventListener('click', (event) => {
            const isClickInsideNav = primaryNav.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && primaryNav.getAttribute('data-visible') === "true") {
                primaryNav.setAttribute('data-visible', false);
                navToggle.setAttribute('aria-expanded', false);
            }
        });
    }

    // Sticky Header on Scroll
    const header = document.getElementById('main-header');
    if (header) {
        const stickyPoint = header.offsetTop + 50; // Add some offset
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > stickyPoint) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Fade-in elements on Scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        fadeInElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers - make elements visible immediately
        fadeInElements.forEach(el => {
            el.classList.add('visible');
        });
    }

     // Update Footer Year Dynamically
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Basic Contact Form Validation Feedback (Example)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent actual submission for this example
            event.preventDefault();

            // Very basic check
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message! (Form submission not implemented)');
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill out all required fields.');
            }
        });
    }

});