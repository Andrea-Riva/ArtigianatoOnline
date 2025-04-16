console.log('login.js loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = togglePassword.querySelector('i');

    eyeIcon.classList.add('fa-eye');

    togglePassword.addEventListener('mousedown', function() {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    });

    togglePassword.addEventListener('mouseup', function() {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    });

    togglePassword.addEventListener('mouseleave', function() {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    });
});