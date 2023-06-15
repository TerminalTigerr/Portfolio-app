const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*============= Show Menu ==========*/
ShowMenu()
function ShowMenu() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu')
    })
}

/*================ Close Menu =========*/
closeMenu()
function closeMenu() {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu')
    })
}


/*================ Remove Mobile Menu =============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show__menu')
}
navLink.forEach(link => link.addEventListener('click', linkAction))