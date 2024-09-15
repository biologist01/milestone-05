//*! ----------------------------- build variables ---------------------------- */
var image = document.querySelector('.image');
var user_name = document.querySelector('.name');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
var contact = document.querySelector('.contact');
var education = document.querySelector('.education');
var skill = document.querySelector('.skills-add');
var experience = document.querySelector('.experience-placeholder');
var btn = document.querySelector('.submission-btn');
//*! ----------------------------- generated variables ---------------------------- */
var gImage = document.querySelector('.place-image');
var gName = document.querySelector('.gName');
var gEmail = document.querySelector('.gEmail');
var gAddress = document.querySelector('.gAddress');
var gContact = document.querySelector('.gContact');
var con1 = document.querySelector('.container');
var con2 = document.querySelector('.generated_content');
var gEducation = document.querySelector('.education ul');
var gSkill = document.querySelector('.skills ul');
var gExperience = document.querySelector('.experience p');
btn.addEventListener('click', function (e) {
    if (user_name.value != "" && email.value != "" && address.value != "" && contact.value != "" && education.value != "" && skill.value != "" && experience.value != "") {
        e.preventDefault();
        var imgsrc = URL.createObjectURL(image.files[0]);
        gImage.src = imgsrc;
        gName.innerText = user_name.value;
        gEmail.innerText = email.value;
        gAddress.innerText = address.value;
        gContact.innerText = contact.value;
        gExperience.textContent = experience.value;
        /* ------------------------- populating education list ------------------------ */
        var eduList = education.value.split(',');
        eduList.forEach(function (edu) {
            if (edu.length > 0) {
                gEducation.innerHTML = gEducation.innerHTML + "<li class=\"styled-list\">".concat(edu, "</li>");
            }
        });
        /* ------------------------- populating education list ------------------------ */
        var skillList = skill.value.split(',');
        skillList.forEach(function (skil) {
            if (skil.length > 0) {
                gSkill.innerHTML = gSkill.innerHTML + "<li class=\"styled-list\">".concat(skil, "</li>");
            }
        });
        setTimeout(function () {
            alert("press ctrl + m to copy the link \n press ctrl + g to download the cv");
            con1.classList.add('disappear');
            con2.classList.add('flex');
        }, 200);
    }
});
