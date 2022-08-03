const burgerIcon = document.querySelector("nav .burger-icon-container input");

const nav = document.querySelector('nav ul');

burgerIcon.addEventListener("click", function(){
    nav.classList.toggle('slider');
});

const xIcon = document.querySelector('.x-container input');

