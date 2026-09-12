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
        signupForm.addEventListener('submit', (event) => {
            const firstName = document.getElementById('first-name');
            const lastName = document.getElementById('last-name');
            const email = document.getElementById('email-address');

            if (!firstName || !lastName || !email) {
                return;
            }

            if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim()) {
                event.preventDefault();
                alert('Please complete all required details before signing up.');
            }
        });
    }
});
