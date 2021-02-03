// function switchImg() {
//   if (window.innerWidth >= 800) {
//     document.getElementById("about__image").src="./images/about_web.png";
//   }
//   else {
//     document.getElementById("about__image").src="./images/about_mobile.png";    
//   }
// };

// // <script defer /> makes the .js to be downloaded after html is downloaded. Thus window.onload is needed.
// window.onload = function() {
//   switchImg();
// };

// //call switchImg() whenever the window size is resized.
// window.addEventListener("resize", function() {
//   switchImg();
// });

'use strict'

// Slide navigation auto
var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 2) {
    counter = 1;
  }
}, 5000);

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item');

// Show / hide nav menu when clicking toggle
function showHideMenu(elem) {
  if (navbarMenu.style.display == "none") {
    navbarMenu.style.display = "flex";
  } else {
    navbarMenu.style.display = "none";
  }
}

// Transform nav menu when scrolling
document.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if (navbarMenu.style.display != "none" && window.scrollY > 100) {
    navbarMenu.classList.add('menu__transform');
    for (var i = 0; i < navbarMenuItem.length; i++) {
      navbarMenuItem[i].classList.add('menu__item__transform');
    }
  } else {
    navbarMenu.classList.remove('menu__transform');
    for (var i = 0; i < navbarMenuItem.length; i++) {
      navbarMenuItem[i].classList.remove('menu__item__transform');
    }
  }
})

