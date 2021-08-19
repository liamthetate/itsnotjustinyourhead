function sendMail(contactForm) {
    emailjs.send("service_injiyh", "template_injiyh", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "subject": contactForm.subject.value,
        "message": contactForm.message.value,
    })
    .then(
        function (response) {
            alert("success");
            let submitButtonContact = document.getElementById("submit-btn");
            submitButtonContact.innerHTML = "Message sent!";
            document.getElementById("submit-btn").disabled = true;
        },
        function (error) {
            alert("Error Please Try Again!")
            console.log("FAILED", error);
        },
        document.getElementById('contact-form').reset()
        );
    return false
}
