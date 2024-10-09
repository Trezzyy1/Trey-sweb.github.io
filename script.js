// script.js

// Function to display a greeting message
function greet() {
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.textContent = 'Hello! Welcome to my website!';
}

// Event listener for the button in the Home section
document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    if (greetButton) {
        greetButton.addEventListener('click', greet);
    }
});
