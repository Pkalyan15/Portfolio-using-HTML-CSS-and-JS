

// contact.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        emailjs.sendForm('service_c8wfwaw  ', 'template_jdfg16f', this)
            .then(function () {
                alert('Message sent successfully!');
                form.reset();             
                 }, function (error) {
                console.log('Failed to send the message:', error);
                alert('Failed to send the message. Please try again later.');
            });
    });
});

