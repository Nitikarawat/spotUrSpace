// Auth Pages JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
      button.addEventListener('click', function() {
        const passwordInput = this.previousElementSibling;
        
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          this.textContent = 'Hide';
        } else {
          passwordInput.type = 'password';
          this.textContent = 'Show';
        }
      });
    });
    
    // Password strength meter (for register page)
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    
    if (passwordInput && strengthBar && strengthText) {
      passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        
        // Update strength bar
        strengthBar.style.width = `${strength.score * 25}%`;
        
        // Set color based on strength
        if (strength.score === 0) {
          strengthBar.style.backgroundColor = '#eee';
          strengthText.textContent = 'Password strength';
        } else if (strength.score === 1) {
          strengthBar.style.backgroundColor = '#f44336';
          strengthText.textContent = 'Weak';
        } else if (strength.score === 2) {
          strengthBar.style.backgroundColor = '#ff9800';
          strengthText.textContent = 'Fair';
        } else if (strength.score === 3) {
          strengthBar.style.backgroundColor = '#ffeb3b';
          strengthText.textContent = 'Good';
        } else {
          strengthBar.style.backgroundColor = '#4caf50';
          strengthText.textContent = 'Strong';
        }
      });
    }
    
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        
        let isValid = true;
        
        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';
        
        // Email validation
        if (!emailInput.value.trim()) {
          emailError.textContent = 'Email is required';
          isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
          emailError.textContent = 'Please enter a valid email address';
          isValid = false;
        }
        
        // Password validation
        if (!passwordInput.value.trim()) {
          passwordError.textContent = 'Password is required';
          isValid = false;
        }
        
        if (isValid) {
          // In a real application, you would send the login credentials to a server
          // and handle authentication
          alert('Login successful! (This is a demo - no actual login occurred)');
          // Redirect to dashboard or home page
          window.location.href = '../../index.html';
        }
      });
    }
    
    // Register form validation
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const companyInput = document.getElementById('company');
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const termsInput = document.getElementById('terms');
        
        const firstNameError = document.getElementById('firstName-error');
        const lastNameError = document.getElementById('lastName-error');
        const emailError = document.getElementById('email-error');
        const companyError = document.getElementById('company-error');
        const phoneError = document.getElementById('phone-error');
        const passwordError = document.getElementById('password-error');
        const confirmPasswordError = document.getElementById('confirmPassword-error');
        const termsError = document.getElementById('terms-error');
        
        // Reset all error messages
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
          element.textContent = '';
        });
        
        let isValid = true;
        
        // First name validation
        if (!firstNameInput.value.trim()) {
          firstNameError.textContent = 'First name is required';
          isValid = false;
        }
        
        // Last name validation
        if (!lastNameInput.value.trim()) {
          lastNameError.textContent = 'Last name is required';
          isValid = false;
        }
        
        // Email validation
        if (!emailInput.value.trim()) {
          emailError.textContent = 'Email is required';
          isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
          emailError.textContent = 'Please enter a valid email address';
          isValid = false;
        }
        
        // Company validation
        if (!companyInput.value.trim()) {
          companyError.textContent = 'Company name is required';
          isValid = false;
        }
        
        // Phone validation
        if (!phoneInput.value.trim()) {
          phoneError.textContent = 'Phone number is required';
          isValid = false;
        } else if (!isValidPhone(phoneInput.value)) {
          phoneError.textContent = 'Please enter a valid phone number';
          isValid = false;
        }
        
        // Password validation
        if (!passwordInput.value.trim()) {
          passwordError.textContent = 'Password is required';
          isValid = false;
        } else if (passwordInput.value.length < 8) {
          passwordError.textContent = 'Password must be at least 8 characters long';
          isValid = false;
        }
        
        // Confirm password validation
        if (!confirmPasswordInput.value.trim()) {
          confirmPasswordError.textContent = 'Please confirm your password';
          isValid = false;
        } else if (confirmPasswordInput.value !== passwordInput.value) {
          confirmPasswordError.textContent = 'Passwords do not match';
          isValid = false;
        }
        
        // Terms validation
        if (!termsInput.checked) {
          termsError.textContent = 'You must agree to the Terms of Service';
          isValid = false;
        }
        
        if (isValid) {
          // In a real application, you would send the registration data to a server
          alert('Registration successful! (This is a demo - no actual registration occurred)');
          // Redirect to login page
          window.location.href = 'login.html';
        }
      });
    }
    
    // Helper functions
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
      // Simple regex for phone number validation
      // This accepts formats like (123) 456-7890, 123-456-7890, 1234567890
      const phoneRegex = /^[\d\s()+.-]{10,15}$/;
      return phoneRegex.test(phone);
    }
    
    function calculatePasswordStrength(password) {
      let score = 0;
      
      // Length check
      if (password.length > 0) score++;
      if (password.length >= 8) score++;
      
      // Complexity checks
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
      
      if (hasUppercase && hasLowercase) score++;
      if (hasNumbers) score++;
      if (hasSpecialChars) score++;
      
      // Cap the score at 4
      score = Math.min(score, 4);
      
      return {
        score: score,
        hasUppercase: hasUppercase,
        hasLowercase: hasLowercase,
        hasNumbers: hasNumbers,
        hasSpecialChars: hasSpecialChars
      };
    }
  });