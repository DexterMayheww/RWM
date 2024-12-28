const menu = document.querySelector('.navbar-toggle');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});