let isFrench = true

Function //Pour basculer d'une langue à une autre et mettre à jour l'affichage
function toggleLanguage(data, currentLanguage) {
  const content = data[currentLanguage]

  // Ajoute ou retire la classe en fonction de la langue du body
  document.body.classList.toggle('fr', currentLanguage === 'french')

  //Logique pour basculer ente l'anglais et le français Your logic to toggle between English and French
  isFrench = !isFrench

  //Mise à jour du contenu en fonction de la langue

  //ADRESSE

  document.querySelector(
    '#homeAddress'
  ).innerHTML = `<i class="bx bx-map home__icon"></i> ${config.address}`
  document.querySelector(
    '#homeEmail'
  ).innerHTML = `<i class="bx bx-envelope home__icon"></i> ${config.email}`
  document.querySelector(
    '#homePhone'
  ).innerHTML = `<i class="bx bx-phone home__icon"></i> ${config.phone}`

  //RÉSEAUX SOCIAUX
  document.querySelector(
    '#linkedinLink'
  ).innerHTML = `<i class="bx bxl-linkedin-square social__icon"></i> ${content.socials.linkedin}`
  document.querySelector(
    '#githubLink'
  ).innerHTML = ` <i class="bx bxl-github social__icon"></i> ${content.socials.github}`
  //TITRES NAVIGATION
  document.querySelector('#headerTitle-1').innerHTML = content.titles.home
  document.querySelector('#headerTitle-2').innerHTML = content.titles.profile
  document.querySelector('#headerTitle-3').innerHTML = content.titles.education
  document.querySelector('#headerTitle-4').innerHTML = content.titles.skills
  document.querySelector('#headerTitle-5').innerHTML = content.titles.experience
  document.querySelector('#headerTitle-6').innerHTML = content.titles.languages

  //JOB
  document.querySelector('#profession').innerHTML = content.job

  // TITRES SECTION
  document.querySelector('#sectionTitle-1').innerHTML = content.titles.social
  document.querySelector('#sectionTitle-2').innerHTML = content.titles.profile
  document.querySelector('#sectionTitle-3').innerHTML = content.titles.education
  document.querySelector('#sectionTitle-4').innerHTML = content.titles.skills
  document.querySelector('#sectionTitle-4bis').innerHTML = content.titles.skills
  document.querySelector('#sectionTitle-5').innerHTML =
    content.titles.experience
  document.querySelector('#sectionTitle-6').innerHTML = content.titles.languages
  document.querySelector('#sectionTitle-7').innerHTML = content.titles.interests

  //PROFILE
  document.querySelector('#objective').innerHTML = content.objective

  //EDUCATION

  const cvEducation = document.querySelector('#educationData')
  cvEducation.innerHTML = '' // Efface le contenu de l'expérience précédente pour éviter les duplications
  for (let i = 0; i < content.educations.length; i++) {
    const education = content.educations[i]
    const isLastEducation = i === content.educations.length - 1

    cvEducation.innerHTML += `<div class="education__content">
    <div class="education__time">
      <span class="education__rounder"> </span>
      ${isLastEducation ? '' : '<span class="education__line"></span>'}
    </div>
    <div class="education__data bd-grid">
      <h3 class="education__title">${education.diploma}</h3>
      <span class="education__studies">${education.school}</span>
      <span class="education__year ${i + 1}">${education.year}</span>
    </div>
  </div>`
  }

  //EXPERIENCE
  const cvExperience = document.querySelector('#experienceData')
  cvExperience.innerHTML = ''
  for (let i = 0; i < content.experiences.length; i++) {
    const experience = content.experiences[i]
    const isLastExperience = i === content.experiences.length - 1

    cvExperience.innerHTML += `<div class="experience__content">
      <div class="experience__time">
        <span class="experience__rounder"> </span>
        ${isLastExperience ? '' : '<span class="experience__line"></span>'}
      </div>
  
      <div class="experience__data bd-grid">
        <h3 class="experience__title">${experience.position}</h3>
        <span class="experience__company">${experience.company}</span>
        <p class="experience__description" id="responsibility-${i + 1}">
          ${experience.responsibilities}
        </p>
      </div>
    </div>`
  }

  //LANGUES
  const cvLanguages = document.querySelector('#languageData')
  cvLanguages.innerHTML = ''
  for (let i = 0; i < content.languages.length; i++) {
    const language = content.languages[i]
    cvLanguages.innerHTML += `<li class="languages__name" id="language-${
      i + 1
    }">
      <span class="languages__circle"></span>${language}
    </li>`
  }

  //HOBBIES
  const interests = content.interests
  interests.forEach((interest, index) => {
    const span = document.getElementById(`hobbie-${index + 1}`)
    if (span) {
      span.textContent = interest
    }
  })

  buttonPdf(isFrench)
}

// Fonction pour cacher toggleButton
function hideToggleButton() {
  const toggleButton = document.getElementById('toggleButton')
  if (toggleButton) {
    toggleButton.style.display = 'none'
  }
}

// Fonction pour montrer toggleButton
function showToggleButton() {
  setTimeout(() => {
    const toggleButton = document.getElementById('toggleButton')
    if (toggleButton) {
      toggleButton.style.display = 'inline-block'
    }
  }, 5000)
}

//Récupération et affichage du contenu pour la langue initiale

fetch('assets/data/data.json')
  .then((response) => response.json())
  .then((data) => {
    const initialLanguage = 'english' // Set the initial language
    toggleLanguage(data, initialLanguage)

    //Toggle Button Event Listener
    const toggleButton = document.getElementById('toggleButton')
    toggleButton.classList.add('home-buttons')
    toggleButton.addEventListener('click', () => {
      const currentLanguage = toggleButton.textContent.toLowerCase() // On obtient la langue initiale
      const newLanguage = currentLanguage === 'en' ? 'french' : 'english' // Bascule de langue
      toggleButton.textContent = newLanguage === 'english' ? 'EN' : 'FR' // Mise à jour du contenu du bouton
      toggleLanguage(data, newLanguage) // Mise à jour du contenu affiché
    })
  })
  .catch((err) => console.error(err))
