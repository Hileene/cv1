/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  nav = document.getElementById(navId)

  //Validates that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // we add the show-menu class to the div tag with the nav menu class
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  //when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')

    const links = document.querySelectorAll(
      'nav__menu a[href*="' + sectionId + '"]'
    )

    links.forEach((link) => {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link')
      } else {
        link.classList.remove('active-link')
      }
    })
  })
}

// function scrollActive() {
//   const scrollY = window.scrollY
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight
//     const sectionTop = current.offsetTop - 50
//     const sectionId = current.getAttribute('id')
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelectorAll('nav__menu a[href*="' + sectionId + ']')
//         .classList.add('active-link')
//     } else {
//       document
//         .querySelectorAll('nav__menu a[href*="' + sectionId + ']')
//         .classList.remove('active-link')
//     }
//   })
// }

window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  //When the scroll is heigher than 560 viewport height, add the show-scroll class to the a tag with the scrollTop attribute
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll')
  else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
  document.body.classList.add('scale-cv')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
  document.body.classList.remove('scale-cv')
}
/*==================== GENERATE PDF ====================*/
// PDF generated area
let resumeButton = document.getElementById('resume-button')

// Html2pdf options

// Function to call areaCv and Html2Pdf options

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCv()

  // 2. The PDF is generated

  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
})
