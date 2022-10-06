let menu = document.querySelector('#navbarbtn');
let header = document.querySelector('.nav__cont');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');
function toggleClasses(btn, b1, b2) {
    btn.classList.toggle(b1);
    btn.classList.toggle(b2);
}
function mytoggleClasses(btn, b1, b2) {
    toggleClasses(themeToggler, "fa-sun", "fa-moon");
}

themeToggler.onclick = () => {
    themeToggler.classList.toggle(mytoggleClasses());
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}