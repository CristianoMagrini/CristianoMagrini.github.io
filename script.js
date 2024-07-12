"use strict"

function homeTitle() {
    const element = document.querySelector('.home-title');
    if (window.innerWidth > 1260) {
        element.innerHTML = 'Cristiano Magrini';
    } else {
        element.innerHTML = 'Cristiano<br><br>Magrini';
    }
}

window.addEventListener('load', homeTitle);
window.addEventListener('resize', homeTitle);