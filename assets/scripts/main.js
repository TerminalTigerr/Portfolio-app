// Show Menu
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


// Menu Show 
showMenu()
function showMenu() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu hidded
hideMenu()
function hideMenu() {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(l => l.addEventListener('click', linkAction))

/***************ADD A BLUR HEADER***********************/

function blurHeader() {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/***************Email JS***********/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

function sendEmail(e) {
    e.preventDefault()

    // ServiceID - templateID - #form -publicKey
    emailjs.sendform('service_btdnmwl', 'template_su8r4zc', '#contact-form', 'vd11_vSYF8KVM9vFK')
        .then(() => {
            // show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // clear input field 
            contactForm.reset()
        },() => {
            //show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)