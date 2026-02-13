// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoader = submitBtn.querySelector('.btn-loader');
const formMessage = document.getElementById('formMessage');

// Clear form message after 5 seconds
function clearFormMessage() {
    setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }, 5000);
}

// Show form message
function showMessage(type, text) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    clearFormMessage();
}

// Validate form
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    // Validate name
    if (!name) {
        document.getElementById('nameError').textContent = 'שדה חובה';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'שדה חובה';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'כתובת אימייל לא תקינה';
        isValid = false;
    }
    
    // Validate message
    if (!message) {
        document.getElementById('messageError').textContent = 'שדה חובה';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'ההודעה חייבת להכיל לפחות 10 תווים';
        isValid = false;
    }
    
    return isValid;
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        
        try {
            // Send form data to API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Success
                showMessage('success', 'ההודעה נשלחה בהצלחה! אחזור אליך בהקדם.');
                contactForm.reset();
            } else {
                // Error from server
                showMessage('error', data.error || 'אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.');
            }
        } catch (error) {
            // Network or other error
            console.error('Error:', error);
            showMessage('error', 'אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });
}

// Real-time validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

if (nameInput) {
    nameInput.addEventListener('blur', () => {
        if (!nameInput.value.trim()) {
            document.getElementById('nameError').textContent = 'שדה חובה';
        } else {
            document.getElementById('nameError').textContent = '';
        }
    });
}

if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            document.getElementById('emailError').textContent = 'שדה חובה';
        } else if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('emailError').textContent = 'כתובת אימייל לא תקינה';
        } else {
            document.getElementById('emailError').textContent = '';
        }
    });
}

if (messageInput) {
    messageInput.addEventListener('blur', () => {
        if (!messageInput.value.trim()) {
            document.getElementById('messageError').textContent = 'שדה חובה';
        } else if (messageInput.value.trim().length < 10) {
            document.getElementById('messageError').textContent = 'ההודעה חייבת להכיל לפחות 10 תווים';
        } else {
            document.getElementById('messageError').textContent = '';
        }
    });
}
