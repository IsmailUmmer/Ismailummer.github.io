let menu = document.querySelector('#menu-btn');
let navcont = document.querySelector('.nav__cont');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navcont.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}