//*! ----------------------------- build variables ---------------------------- */
let image = document.querySelector('.image') as HTMLInputElement;
let user_name = document.querySelector('.name') as HTMLInputElement;
let email = document.querySelector('.email') as HTMLInputElement;
let address = document.querySelector('.address') as HTMLInputElement;
let contact = document.querySelector('.contact') as HTMLInputElement;
let education = document.querySelector('.education') as HTMLInputElement;
let skill = document.querySelector('.skills-add') as HTMLInputElement;
let experience = document.querySelector('.experience-placeholder') as HTMLInputElement;
let btn = document.querySelector('.submission-btn') as HTMLButtonElement;

//*! ----------------------------- generated variables ---------------------------- */
let gImage = document.querySelector('.place-image') as HTMLImageElement;
let gName = document.querySelector('.gName') as HTMLHeadingElement;
let gEmail = document.querySelector('.gEmail') as HTMLHeadingElement;
let gAddress = document.querySelector('.gAddress') as HTMLHeadingElement;
let gContact = document.querySelector('.gContact') as HTMLHeadingElement;
let con1 = document.querySelector('.container') as HTMLDivElement;
let con2 = document.querySelector('.generated_content') as HTMLDivElement;
let gEducation = document.querySelector('.education ul') as HTMLUListElement;
let gSkill = document.querySelector('.skills ul') as HTMLUListElement;
let gExperience = document.querySelector('.experience p') as HTMLParagraphElement;

btn.addEventListener('click', (e) => {
  if (user_name.value != "" && email.value != "" && address.value != "" && contact.value != "" && education.value != "" && skill.value != "" && experience.value != "") {
    e.preventDefault();
       
       
        let imgsrc = URL.createObjectURL(image.files![0]);
        gImage.src = imgsrc
        gName.innerText = user_name.value;
        gEmail.innerText = email.value;
        gAddress.innerText = address.value;
        gContact.innerText = contact.value;
        gExperience.textContent = experience.value;

        /* ------------------------- populating education list ------------------------ */
        let eduList = education.value.split(',');
        eduList.forEach((edu) => {
          if(edu.length > 0){
          gEducation.innerHTML = gEducation.innerHTML + `<li class="styled-list">${edu}</li>`  
          }
        })
        /* ------------------------- populating education list ------------------------ */
        let skillList = skill.value.split(',');
        skillList.forEach((skil) => {
          if(skil.length > 0){
            gSkill.innerHTML = gSkill.innerHTML + `<li class="styled-list">${skil}</li>`  
          }
        })

        setTimeout(() => {
          alert(`press ctrl + m to copy the link \n press ctrl + g to download the cv`);
            con1.classList.add('disappear');
            con2.classList.add('flex');
        }, 200);
        
    }
})
