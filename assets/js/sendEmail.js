function sendMail(contactForm) {
    emailjs.send("service_injiyh", "template_injiyh", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "subject": contactForm.subject.value,
        "message": contactForm.message.value,
    })
    .then(
        function () {
            alert("success");
            let submitButtonContact = document.getElementById("submit-btn");
            submitButtonContact.innerHTML = "Message sent!";
            document.getElementById("submit-btn").disabled = true;
        },
        function () {
            alert("Error Please Try Again!")
            console.log("FAILED");
        },
        document.getElementById('contact-form').reset()
        );
    return false
}
