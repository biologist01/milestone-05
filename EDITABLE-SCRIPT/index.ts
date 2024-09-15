let gName = document.querySelector('.gName') as HTMLHeadingElement;
gName.addEventListener('input', () => {
    if(gName.innerHTML.length >= 15){
        gName.innerHTML = gName.innerHTML.slice(0, 15)
    }
})

let number = document.querySelector('.number') as HTMLHeadingElement;
number.addEventListener('input', () => {
    if(number.innerHTML.length > 13){
        number.innerHTML = number.innerHTML.slice(0, 13)
    } else if(number.innerHTML.length < 13){
        number.style.border = '2px solid red';
    } else {
        number.style.border = 'none';
    }
})

//*! -------------------------- for education section ------------------------- */

let st_ul = document.querySelector('.education .styled-ul') as HTMLUListElement;
let st_div = document.querySelector('.education-container') as HTMLDivElement ;

st_ul.addEventListener("click",() =>{
    let st_li = document.querySelectorAll('.education .styled-ul li') as NodeListOf<HTMLLIElement>;
let combined= Array.from(st_li).map(li => li.innerHTML).join(",");
console.log(combined , st_li);
st_ul.style.display = "none"
st_div.classList.remove("disappear")
st_div.innerHTML = combined;

st_div.addEventListener("focusout", ()=>{
   let sepArr = st_div.innerText.split(",");
   console.log(sepArr , st_div.innerText)
   st_ul.innerHTML = ""
   sepArr.forEach((edu) => {
       st_ul.innerHTML = st_ul.innerHTML + `<li class="styled-list">${edu}</li>`  
    
   })
   st_ul.style.display = "flex"
   st_div.classList.add("disappear")
})

})

//*! -------------------------- for skill section ------------------------- */

let skill_ul = document.querySelector('.skills .styled-ul') as HTMLUListElement;
let skill_div = document.querySelector('.skill-container') as HTMLDivElement ;


skill_ul.addEventListener("click",() =>{
    let skill_li = document.querySelectorAll('.skills .styled-ul li') as NodeListOf<HTMLLIElement>;
let combined  = Array.from(skill_li).map(li => li.innerHTML).join(",");
skill_ul.style.display = "none"
skill_div.classList.remove("disappear")
skill_div.innerHTML = combined;

skill_div.addEventListener("focusout", ()=>{
   let sepArr = skill_div.innerText.split(",");
   console.log(sepArr , skill_div.innerText)
   skill_ul.innerHTML = ""
   sepArr.forEach((edu) => {
       skill_ul.innerHTML = skill_ul.innerHTML + `<li class="styled-list">${edu}</li>`  
    
   })
   skill_ul.style.display = "flex"
   skill_div.classList.add("disappear")
})

})

//*! ----------------------------- unique path ----------------------------- */
document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'm') {
        gName = document.querySelector('.gName') as HTMLHeadingElement;
      const textToCopy = `${location.href}#${gName.innerHTML}`; 
  
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied: ' + textToCopy); 
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'g'){
        print()
    }
  });

  /* ---------------------------- hello experiment ---------------------------- */
