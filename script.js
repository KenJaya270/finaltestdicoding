const burgerIcon = document.querySelector("nav .burger-icon-container input");

const nav = document.querySelector('nav ul');

// burgerIcon.addEventListener("click", function(){
//     nav.classList.toggle('slider');
// });

const xIcon = document.querySelector('.x-container input');
const sideBar = document.getElementById("sideBar");

let clicked = 0;

function sideBarOperation(){
    if(clicked == 0){
        sideBar.style.right = 0;
        sideBar.style.transition = "0.3s";
        clicked = 1;
    } else if(clicked == 1){
        sideBar.style.right = "-1000px";
        sideBar.style.transition = "0.3s";
        clicked = 0;
    }
}




