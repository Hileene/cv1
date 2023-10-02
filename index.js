fetch('data.json')
  .then((response) => response.json())
  .then((data) => displayDatas(data))
  .catch((err) => console.error(err))

// AFFICHAGE DU CONTENU DU CV

function displayDatas(data) {
  //COTE GAUCHE

  // Nom et job

  const cvName = document.querySelector('#cvName')
  const identity = data.basics
  cvName.innerHTML += `${identity.name} 
  <br /><span id="cvJob">${identity.job}</span>
  `

  //Contact Info

  let cvPhone = document.querySelector('#cvPhone')
  cvPhone.innerHTML = data.basics.phone

  let cvEmail = document.querySelector('#cvEmail')
  cvEmail.innerHTML = data.basics.email

  let cvWeb = document.querySelector('#cvWeb')
  cvWeb.innerHTML = data.basics.siteWeb

  let cvLinkedin = document.querySelector('#cvLinkedin')
  cvLinkedin.innerHTML = data.basics.linkedin

  let cvAddress = document.querySelector('#cvAddress')
  cvAddress.innerHTML = data.basics.address

  //Formation
  const cvEducation = document.querySelector('#education')
  const educations = data.educations
  for (let education of educations) {
    cvEducation.innerHTML += `<li>
    <h5 id="cvSchoolYear">${education.year}</h5>
    <h4 id="cvSchoolDiploma">${education.diploma}</h4>
    <h4 id="cvSchool">${education.school}</h4>
  </li>`
  }

  //Profile
  let cvProfile = document.querySelector('#objective')
  cvProfile.innerHTML = data.objective

  //Expérience
  const cvExperience = document.querySelector('#experience')
  const experiences = data.experiences
  for (let experience of experiences) {
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
  </div>
  `
  }
  // Hobbies
  const interests = data.interests

  interests.forEach((interest, index) => {
    console.log(interest)
    const span = document.getElementById(`hobbies-${index + 1}`)
    if (span) {
      span.textContent = interest
    }
  })
}
