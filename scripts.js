document.addEventListener("DOMContentLoaded", function() 
{
 const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__link');

navToggle.addEventListener('click', function() {
     document.body.classList.toggle('nav-open')
});
 
navLinks.foreach(link => {
    link.addEventListener('click', function() {
        document.body.classList.remove('nav-open');
    });
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(name, email, message);

    alert("Your message has been sent!");
    contactForm.reset();
});

});

