// Adding event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Retrieving the values of the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validating the form fields
    if (!name || !email) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        alert('Form submitted successfully!'); // Alert on successful submission
    }
});
