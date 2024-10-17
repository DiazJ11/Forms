// JavaScript: validateScript.js

// Retrieve the form and input elements
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// Input for alphanumeric
const alphanumericPattern = /^[a-zA-Z0-9]+$/;

// Event listener
form.addEventListener('submit', function(event) {
    // Prevent form submission if input is invalid
    event.preventDefault();

    // Validate the input
    if (alphanumericPattern.test(inputField.value)) {
        // If input is valid, show success message
        successMessage.textContent = 'Form submitted successfully!';
        errorMessage.textContent = '';

        // Form data
        console.log('Input is valid:', inputField.value);

    } else {
        // If input is invalid, show error message
        errorMessage.textContent = 'Invalid input! Please enter only alphanumeric characters.';
        successMessage.textContent = ''; 
    }
});
