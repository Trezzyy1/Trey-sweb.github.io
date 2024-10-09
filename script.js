// script.js

// Function to display an alert on page load
window.onload = function() {
    alert('Welcome to My Website! Explore the content and feel free to reach out.');
};

// Function to handle contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple form validation
        if (name && email && message) {
            alert('Thank you for your message, ' + name + '!');
            this.reset(); // Reset the form
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
}
