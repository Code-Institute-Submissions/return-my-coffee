/**
 * Based upon EmailJS Documentation guide
 * "https://www.emailjs.com/docs/tutorial/creating-contact-form/"
 */

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("ellenst264", "return_mycoffee", this)
        .then(function() {
            console.log("SUCCESS! Email sent");
            bootbox.alert({
                message: "<p class='text-center confirm-send'>Thank you. Your message has been sent. I will get back to as soon as I can!</p>",
                onEscape: true,
                backdrop: true,
                buttons: {
                    ok: {
                        label: "okay",
                        className: "btn-confirm-send"
                    }
                }
            })

        }, function(error) {
            console.log("FAILED...", error);
            alert("Oops, something went wrong..." + JSON.stringify(error));
        })
});