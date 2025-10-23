/* Smooth scrolling for internal anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* Contact Form handling with basic validation */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission for this example

    // Get form fields (Make sure your input fields have IDs 'name' and 'email')
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    let isValid = true;

    // Simple validation
    if (nameInput && nameInput.value.trim() === '') {
      alert('Please enter your name.');
      isValid = false;
      nameInput.focus(); // Focus on the empty field
    } else if (emailInput && emailInput.value.trim() === '') {
      alert('Please enter your email.');
      isValid = false;
      emailInput.focus();
    }
    // Very basic email format check (not comprehensive)
    else if (emailInput && !emailInput.value.includes('@')) {
       alert('Please enter a valid email address.');
       isValid = false;
       emailInput.focus();
    }

    // If valid, show message and reset
    if (isValid) {
      alert('Thank you for your message! We will get back to you soon.');
      this.reset(); // Clear the form fields
    }
  });
} else {
  console.warn("Contact form with ID 'contact-form' not found.");
}

/* Scroll-to-Top Button Functionality */
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑ Top'; // Text or icon for the button
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.backgroundColor = '#3498db'; // Same blue as CTA button
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none'; // Hidden by default
scrollToTopBtn.style.zIndex = '1000'; // Make sure it's on top

// Add the button to the page
document.body.appendChild(scrollToTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show button after scrolling down 300px
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
