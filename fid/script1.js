const menu = document.querySelector('.navbar #menu-icon');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click',function(){
    nav.classList.toggle('active');
});


// Jam Digital
setInterval(() => {
    let date = new Date()
    let clock = document.getElementById('clock')
    clock.innerHTML = 
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()
}, 1000);