// Initialize EmailJS (replace with your public key)
(function(){
    emailjs.init("b9zRh1QC9_f8lMKz1"); // e.g., "user_xxxxxxxxxxxxx"
})();

// Select the contact form
const contactForm = document.querySelector('form');

// Listen for form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form values
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Send email using EmailJS
    emailjs.send('service_13bodvl', 'template_mm2kz62', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        alert('✅ Message sent successfully!');
        contactForm.reset();
    }, function(error) {
        alert('⚠️ Oops… something went wrong. Please try again.');
        console.error('EmailJS Error:', error);
    });
});
