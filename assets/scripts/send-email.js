/* jshint esversion: 11, jquery: true */
// send email when send buttopn is clicked in form of contact page
function sendMail(contactForm) {
    let templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_request": contactForm.contactrequest.value
    };
    emailjs.send("service_4jipeeb", "Cotswold_Club", templateParams, "Uyx9ucl6_uY6UvvRF")
        .then(
            function (response) {
                // Show modal confirmation html model in contact-un.html
                $("#modalConfirmation").modal("show");
            },
            function (error) {
                // show error response in error html in contact-unescape.html
                $("#error").text(error.text);
                $("#modalError").modal("show");
            }
        );
    return false; // False to block from loading a new
}