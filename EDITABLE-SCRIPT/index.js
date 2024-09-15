var gName = document.querySelector('.gName');
gName.addEventListener('input', function () {
    if (gName.innerHTML.length >= 15) {
        gName.innerHTML = gName.innerHTML.slice(0, 15);
    }
});
var number = document.querySelector('.number');
number.addEventListener('input', function () {
    if (number.innerHTML.length > 13) {
        number.innerHTML = number.innerHTML.slice(0, 13);
    }
    else if (number.innerHTML.length < 13) {
        number.style.border = '2px solid red';
    }
    else {
        number.style.border = 'none';
    }
});
//*! -------------------------- for education section ------------------------- */
var st_ul = document.querySelector('.education .styled-ul');
var st_div = document.querySelector('.education-container');
st_ul.addEventListener("click", function () {
    var st_li = document.querySelectorAll('.education .styled-ul li');
    var combined = Array.from(st_li).map(function (li) { return li.innerHTML; }).join(",");
    console.log(combined, st_li);
    st_ul.style.display = "none";
    st_div.classList.remove("disappear");
    st_div.innerHTML = combined;
    st_div.addEventListener("focusout", function () {
        var sepArr = st_div.innerText.split(",");
        console.log(sepArr, st_div.innerText);
        st_ul.innerHTML = "";
        sepArr.forEach(function (edu) {
            st_ul.innerHTML = st_ul.innerHTML + "<li class=\"styled-list\">".concat(edu, "</li>");
        });
        st_ul.style.display = "flex";
        st_div.classList.add("disappear");
    });
});
//*! -------------------------- for skill section ------------------------- */
var skill_ul = document.querySelector('.skills .styled-ul');
var skill_div = document.querySelector('.skill-container');
skill_ul.addEventListener("click", function () {
    var skill_li = document.querySelectorAll('.skills .styled-ul li');
    var combined = Array.from(skill_li).map(function (li) { return li.innerHTML; }).join(",");
    skill_ul.style.display = "none";
    skill_div.classList.remove("disappear");
    skill_div.innerHTML = combined;
    skill_div.addEventListener("focusout", function () {
        var sepArr = skill_div.innerText.split(",");
        console.log(sepArr, skill_div.innerText);
        skill_ul.innerHTML = "";
        sepArr.forEach(function (edu) {
            skill_ul.innerHTML = skill_ul.innerHTML + "<li class=\"styled-list\">".concat(edu, "</li>");
        });
        skill_ul.style.display = "flex";
        skill_div.classList.add("disappear");
    });
});
//*! ----------------------------- unique path ----------------------------- */
document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'm') {
        gName = document.querySelector('.gName');
        var textToCopy_1 = "".concat(location.href, "#").concat(gName.innerHTML);
        navigator.clipboard.writeText(textToCopy_1).then(function () {
            alert('Text copied: ' + textToCopy_1);
        }).catch(function (err) {
            console.error('Failed to copy text: ', err);
        });
    }
    else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'g') {
        print();
    }
});
/* ---------------------------- hello experiment ---------------------------- */
