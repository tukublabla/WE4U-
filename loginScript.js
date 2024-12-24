
const loginForm = document.querySelector('form[action="home.html"]'); // Select the login form

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

   
        if (username === "user" && password === "password") {
            window.location.href = "home.html"; 
        } else {
            alert('Invalid username or password.'); 
        }
    });
}

const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (username.length < 4) {
            alert('Username must be at least 4 characters long.');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.');
        } else {
            alert('Registration successful!');
           
        }
    });
}
