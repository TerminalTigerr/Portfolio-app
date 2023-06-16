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

/**========= ADD BLUR TO THE HEADER ============*/
function blurHeader() {
    const header = document.getElementById('header')
    // when scroll is greater than 50vh, add the blur__header class
    if(this.scrollY >= 50) {
        header.classList.add('blur__header')
    }
    else {
        header.classList.remove('blur__header')
    }
}
window.addEventListener('scroll', blurHeader)

/*================= Email JS ============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_zsf8ygq', 'template_xdmoabx', '#contact-form', 'vd11_vSYF8KVM9vFK')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000);

            // Clear the input fields
            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
    }
contactForm.addEventListener('submit', sendEmail)