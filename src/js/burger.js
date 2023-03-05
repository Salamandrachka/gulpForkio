/*TEST*/ 

const menuBtn = document.querySelector('.hamburger');

const menuNav = document.querySelector('.menu');

// let mediaScreen = window.matchMedia('(max-width: 768px)')

window.addEventListener('click', menu)

function menu(e) {
    if (e.target.closest('.hamburger')){
        menuBtn.classList.toggle("active");
        menuNav.classList.toggle("active");
    }
    if (!e.target.closest('.hamburger')){
        menuBtn.classList.remove("active");
        menuNav.classList.remove("active");
    }
    // if (e.target.closest('.hamburger') &&!mediaScreen.matches){
    //     // menuBtn.classList.remove("active");
    //     menuNav.classList.remove("active");
    // }
}

document.querySelectorAll('.menu__link').forEach(n => n.addEventListener("click", () => {
    
    menuBtn.classList.remove("active");
    menuNav.classList.remove("active");
}))
