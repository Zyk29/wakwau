const menu = document.querySelector('.navbar #menu-icon');
const nav = document.querySelector('.navbar .topnav');

menu.addEventListener('click', function(){
    nav.classList.toggle('active')
});