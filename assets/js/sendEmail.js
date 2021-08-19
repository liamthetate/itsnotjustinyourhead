function sendMail(contactForm) {
    emailjs.send("service_injiyh", "template_injiyh", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "subject": contactForm.subject.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log('worked!', response);
            document.getElementById('contact-form').reset();
            document.getElementById('onSubmitText').innerHTML = "Message sent!";
        },
        function(error) {
            console.log('failed, loser', error);
        });
    return false;
};

