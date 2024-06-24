const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__link');

navToggle.addEventListener('click', function() {
     document.body.classList.toggle('nav-open')
});
 
navLinks.foreach(link => {
    link.addEventListener('click', function() {
        document.body.classList.remove('nav-open');
    })
})