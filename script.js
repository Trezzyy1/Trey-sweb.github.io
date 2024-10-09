// script.js

// Function to handle form submission
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        document.getElementById('formMessage').textContent = 'Thank you for your message!';
        document.getElementById('formMessage').classList.remove('hidden');
        this.reset(); // Reset the form
    } else {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').classList.remove('hidden');
    }
});
