document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('#menu a');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach((navLink) => navLink.classList.remove('active'));
            link.classList.add('active');

            if (navToggle && navToggle.checked) {
                navToggle.checked = false;
            }
        });
    });

    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        // Project-specific form flow using the browser Constraint Validation API and local confirmation page.
        signupForm.addEventListener('submit', (event) => {
            if (!signupForm.checkValidity()) {
                signupForm.reportValidity();
                return;
            }

            event.preventDefault();
            window.location.href = 'thank-you.html';
        });
    }
});
