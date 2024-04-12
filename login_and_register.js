const registerForm = document.getElementById('register-form'); // Get register form element
const loginForm = document.getElementById('login-form'); // Get login form element

const registerButton = document.getElementById('register-button'); // Get register button element
const loginButton = document.getElementById('login-button'); // Get login button element

let currentForm = 'login'; // Initial form to display

function showForm(formType) {
  if (formType === 'login') {
    registerForm.style.display = 'none'; // Hide register form
    loginForm.style.display = 'block'; // Show login form
  } else {
    loginForm.style.display = 'none'; // Hide login form
    registerForm.style.display = 'block'; // Show register form
  }
  currentForm = formType;
}

showForm(currentForm); // Display initial form

// Add event listeners to buttons (optional)
// Handle form submission logic (replace with your actual logic)