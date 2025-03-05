// Main JavaScript for index.html

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          if (menuToggle && menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
          }
          
          // Scroll to target
          const headerOffset = 80; // Account for fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('fade-in');
        }
      });
    };
    
    // Run animation on load
    animateOnScroll();
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        
        // Simple validation
        if (!nameInput.value.trim()) {
          isValid = false;
          nameInput.style.borderColor = 'var(--error-color)';
        } else {
          nameInput.style.borderColor = 'var(--border-color)';
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
          isValid = false;
          emailInput.style.borderColor = 'var(--error-color)';
        } else {
          emailInput.style.borderColor = 'var(--border-color)';
        }
        
        if (!messageInput.value.trim()) {
          isValid = false;
          messageInput.style.borderColor = 'var(--error-color)';
        } else {
          messageInput.style.borderColor = 'var(--border-color)';
        }
        
        if (isValid) {
          // In a real application, you would submit the form data to a server here
          alert('Message sent! (This is a demo - no actual message was sent)');
          contactForm.reset();
        }
      });
    }
    
    // Email validation helper
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });