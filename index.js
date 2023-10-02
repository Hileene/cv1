// Function to toggle the language and update the display
function toggleLanguage(data, currentLanguage) {
  const content = data[currentLanguage]

  // Mise à jour du contenu en fonction de la langue

  //COTE GAUCHE

  // NOM, JOB, CONTACT
  document.querySelector(
    '#cvName'
  ).innerHTML = `${data.basics.name}<br /><span id="cvJob">${content.job}</span>`
  document.querySelector('#cvPhone').innerHTML = data.basics.phone
  document.querySelector('#cvEmail').innerHTML = data.basics.email
  document.querySelector('#cvWeb').innerHTML = data.basics.siteWeb
  document.querySelector('#cvLinkedin').innerHTML = data.basics.linkedin
  document.querySelector('#cvAddress').innerHTML = data.basics.address

  // EDUCATION
  const cvEducation = document.querySelector('#education')
  cvEducation.innerHTML = '' // Clear previous education content
  for (let education of content.educations) {
    cvEducation.innerHTML += `<li>
      <h5 id="cvSchoolYear">${education.year}</h5>
      <h4 id="cvSchoolDiploma">${education.diploma}</h4>
      <h4 id="cvSchool">${education.school}</h4>
    </li>`
  }

  //OBJECTIF
  document.querySelector('#objective').innerHTML = content.objective

  //EXPERIENCE
  const cvExperience = document.querySelector('#experience')
  cvExperience.innerHTML = '' // Clear previous experience content
  for (let experience of content.experiences) {
    cvExperience.innerHTML += `<div class="box">
      <div class="year_company">
      <h5>${experience.period}</h5>
      <h5>${experience.company}</h5>
    </div>
    <div class="text">
      <h4>${experience.position}</h4>
      <p>
      ${experience.responsibilities}
      </p>
    </div>
    </div>`
  }

  // HOBBIES
  const interests = content.interests
  interests.forEach((interest, index) => {
    const span = document.getElementById(`hobbies-${index + 1}`)
    if (span) {
      span.textContent = interest
    }
  })
}

// Récupération et affichage du contenu pour la langue initiale

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const initialLanguage = 'english' // Set the initial language
    toggleLanguage(data, initialLanguage)

    // Toggle Button Event Listener
    const toggleButton = document.getElementById('toggleButton')
    toggleButton.addEventListener('click', () => {
      const currentLanguage = toggleButton.textContent.toLowerCase() // On oobtient la langue initiale
      const newLanguage = currentLanguage === 'en' ? 'french' : 'english' // Bascule de langue
      toggleButton.textContent = newLanguage === 'english' ? 'EN' : 'FR' // Mise à jour du contenu du bouton
      toggleLanguage(data, newLanguage) // Mise à jour du contenu affiché
    })
  })
  .catch((err) => console.error(err))
