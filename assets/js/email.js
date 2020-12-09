/**
 * Based upon EmailJS Documentation guide
 * "https://www.emailjs.com/docs/tutorial/creating-contact-form/"
 */

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("ellenst264", "return_mycoffee", this)
        .then(function() {
            console.log("SUCCESS!");
        }, function(error) {
            console.log("FAILED...", error);
        });
});