/*==================== AFFICHER LE MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  nav = document.getElementById(navId)

  // Valide que les variables existent
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // Ajoute la classe show-menu à la balise div avec la classe nav menu
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/*==================== SUPPRIMER LE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // Lorsque nous cliquons sur chaque nav__link, nous supprimons la classe show-menu
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*==================== AFFICHER LE BOUTON REMONTER ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  // Lorsque le défilement est supérieur à 560 pixels de la fenêtre d'affichage, ajoutez la classe show-scroll à la balise a avec l'attribut scrollTop
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll')
  else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/*==================== CRÉATION DU BTN DOWNLOAD VERSION MOBILE POUR LE PDF EN FRANCAIS =================*/
// Fonction pour créer un bouton PDF qui change en fonction de la langue
function buttonPdf(isFrench) {
  const resumeBtnContainer = document.getElementById('resumeBtn')
  const resumeBtnEn = document.querySelector('.home__button-movil')

  if (isFrench) {
    // Efface le btn PDF EN
    if (resumeBtnEn) {
      resumeBtnContainer.removeChild(resumeBtnEn)
    }

    // Créer un btn PDF FR
    const newResumeBtnFr = document.createElement('a')
    newResumeBtnFr.href = 'assets/pdf/myResumeFR.pdf'
    newResumeBtnFr.textContent = 'Téléchargez'
    newResumeBtnFr.classList.add('home__button-movil')
    newResumeBtnFr.setAttribute('download', 'myResumeFR.pdf')
    resumeBtnContainer.appendChild(newResumeBtnFr)

    // Ajouter une classe commune au bouton
    newResumeBtnFr.classList.add('home-buttons')
  } else {
    // Efface un btn PDF FR
    const resumeBtnFr = document.querySelector('.home__button-movil')
    if (resumeBtnFr) {
      resumeBtnContainer.removeChild(resumeBtnFr)
    }

    // Créer un btn PDF EN
    const newResumeBtnEn = document.createElement('a')
    newResumeBtnEn.href = 'assets/pdf/myResumeEN.pdf'
    newResumeBtnEn.textContent = 'Download'
    newResumeBtnEn.classList.add('home__button-movil')
    newResumeBtnEn.setAttribute('download', 'myResumeEN.pdf')
    resumeBtnContainer.appendChild(newResumeBtnEn)

    // // Ajouter une classe commune au bouton
    newResumeBtnEn.classList.add('home-buttons')
  }
}

/*==================== RÉDUIRE LA TAILLE POUR IMPRIMER SUR UNE FEUILLE A4 ====================*/
function scaleCv() {
  document.body.classList.add('scale-cv')
}

/*==================== SUPPRIMER LA TAILLE LORSQUE LE CV EST TÉLÉCHARGÉ ====================*/
function removeScale() {
  document.body.classList.remove('scale-cv')
}
/*==================== GÉNÉRER UN PDF ====================*/
// Zone générée pour le PDF
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

// Options Html2pdf
let opt = {
  margin: 0,
  filename: 'myResume.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: {
    format: 'a4',
    orientation: 'portrait',
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  },
}

// Fonction pour appeler areaCv et les options Html2Pdf
function generateResume() {
  html2pdf(areaCv, opt)
  //Appel de la fonction hideToggleButton pour retirer le bouton langue du du CV en version PDF
  hideToggleButton()
}

// Lorsqu'on clique sur le bouton, il exécute les trois fonctions
resumeButton.addEventListener('click', () => {
  // 1. La classe .scale-cv est ajoutée au body, ce qui réduit la taille des éléments
  scaleCv()

  // 2. Le PDF est généré
  generateResume()

  // 3. La classe .scale-cv est supprimée du body après 5s pour revenir à la taille normale.
  setTimeout(removeScale, 5000)
  //Appel de la fonction showToggleButton pour que le bouton langue revienne a sa place après 5s
  showToggleButton()
})
