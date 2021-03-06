'use strict';

// Sound effect
const bgSound = new Audio('./sound/opened_window_sound.mp3');
const startupSound = new Audio('./sound/startup_sound.mp3');
const clickSound = new Audio('./sound/click_sound.mp3');
const vaseSound1 = new Audio('./sound/ceramic_sound1.mp3');
const vaseSound2 = new Audio('./sound/ceramic_sound2.mp3');
const vaseSound3 = new Audio('./sound/ceramic_sound3.mp3');

// Set the volume and play the sound
function playSound(volume, sound) {
  sound.volume = volume;
  sound.play();
}

// Add Mac startup sound effect for the computer icon on click
const computer = document.querySelector('.computer');
computer.addEventListener('mouseover', () => {
  playSound(0.1, startupSound);
})

// Add sound effect for texts / icons on click
const framework = document.querySelector('.framework');
framework.addEventListener('mouseover', () => {
  playSound(0.1, clickSound);
})

const db = document.querySelector('.db');
db.addEventListener('mouseover', () => {
  playSound(0.1, clickSound);
})

const productDesign = document.querySelector('.product__design');
productDesign.addEventListener('click', () => {
  playSound(0.1, clickSound);
})

const projectSlides = document.querySelector('.projects__slides');
projectSlides.addEventListener('click', () => {
  playSound(0.1, clickSound);
})

const testimonialFirst = document.querySelector('.moe');
testimonialFirst.addEventListener('click', () => {
  playSound(0.1, clickSound);
})

const testimonialSecond = document.querySelector('.jisoo');
testimonialSecond.addEventListener('click', () => {
  playSound(0.1, clickSound);
})

const testimonialFirstFace = document.querySelector('.yousef');
testimonialFirstFace.addEventListener('click', () => {
  playSound(0.1, clickSound);
})

const testimonialSecondFace = document.querySelector('.lee');
testimonialSecondFace.addEventListener('click', () => {
  playSound(0.1, clickSound);
})

const vase1 = document.querySelector('.vase1');
vase1.addEventListener('mouseover', onVase1Click);

const vase2 = document.querySelector('.vase2');
vase2.addEventListener('mouseover', onVase2Click);

const vase3 = document.querySelector('.vase3');
vase3.addEventListener('mouseover', onVase3Click);

function onVase1Click() {
  playSound(0.1, vaseSound1);
}

function onVase2Click() {
  playSound(0.1, vaseSound2);
}

function onVase3Click () {
  playSound(0.1, vaseSound3);
}

// Change project slides automatically
var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3) {
    counter = 1;
  }
}, 5000);

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item');

// Show / hide nav menu when clicking toggle
function showHideMenu() {
  if (navbarMenu.style.display === "none") {
    navbarMenu.style.display = "flex";
  } else {
    navbarMenu.style.display = "none";
  }
}

// Switch the image of the ipod
const ipod = document.querySelector('.ipod');
function onIpod() {
  ipod.src = "https://jean-kang.herokuapp.com/images/ipod_on.png";
}

function offIpod() {
  ipod.src = "https://jean-kang.herokuapp.com/images/ipod_off.png";
}

// Play the music
function onMusic() {
  playSound(0.4, bgSound);
}

// Off the music
function offMusic() {
  bgSound.pause();
}

// A flag function for ipod icon to check if it's on / off
function switchOnOffFlag() {
  if (ipod.classList.length === 1) {
    ipod.classList.add("on");
  } else {
    ipod.classList.remove("on");
  }
}

// Check if the ipod is turned on / off
function isIpodTurnedOn() {
  let isIpodTurnedOn;

  if (ipod.classList.length === 1) {
    isIpodTurnedOn = false;
  } else if (ipod.classList.length === 2) {
    isIpodTurnedOn = true;
  } 

  return isIpodTurnedOn;
}

// Loop bgSound when it is paused after the music length
function loopBgSound() {
    if (bgSound.paused && isIpodTurnedOn) {
      bgSound.loop = true;
      bgSound.play();
      ipod.classList.remove("on");
    }
  }

// Reset the loop and timeout for the ipod
var ipodTimeout;
function reset() {
  if (typeof bgSound.loop === true) {
    bgSound.loop = false;
  }
  if (ipodTimeout) {
    clearTimeout(ipodTimeout);
  }
}

// On / off ipod
// (Change the icon image, play clicking sound effect, play / pause bg music)
function ipodHandleClick() { 
  reset();
  switchOnOffFlag();
  playSound(0.1, clickSound);
if (ipod.classList.length === 2) {
  onIpod();
  onMusic();  
  ipodTimeout = setTimeout(loopBgSound, 67000);
} else if (ipod.classList.length === 1) {
  offIpod();
  offMusic();
  reset();
}
}

// hide ipod when scrolling down/up
var timer;
const iPod = document.querySelector('.ipod');
document.addEventListener('scroll', () => {
  clearTimeout(timer);
  timer = setTimeout(showIpod, 150);
  if(window.scrollY >= navbarHeight) {
    ipod.style.opacity = 1 - (window.scrollY - navbarHeight) / 100;
  }
});
function showIpod() {
  ipod.style.opacity = 1;
}

// Transform nav menu when scrolling down
document.addEventListener('scroll', () => {
  if (navbarMenu.style.display !== "none" && window.scrollY > navbarHeight) {
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

// Fade in / out nav menu when scrolling down
const navbarBackground = document.querySelector('#navbar__menu');
document.addEventListener('scroll', () => {
  if (window.scrollY < navbarHeight) {
    navbarBackground.style.opacity = 1 - window.scrollY / navbarHeight;
  } else {
  navbarBackground.style.opacity = 0 + (window.scrollY - navbarHeight) / 150;
  }
});

// Scroll into view of the selector
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth'});  
}

// Handle scrolling when tapping on nav menu
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Show arrow up button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY >= navbarHeight) {
    arrowUp.style.opacity = 0 + (window.scrollY - navbarHeight) / 150;
    arrowUp.classList.add('visible');
  } else {
    arrowUp.style.opacity = 0;
    arrowUp.classList.remove('visible');
  }
});

// Scrolling up when clicking arrow up button
arrowUp.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
})

// Set each nav menu to active when each section is shown
const sectionIds = [
  '#about',
  '#skills',
  '#projects',
  '#testimonials',
  '#contact',
];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => 
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem(selectedNavIndex) {
  if (selectedNavItem) {
    selectedNavItem.classList.remove('active');
  } 
  selectedNavItem.classList.add('active');  
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting && entry.intersectionRatio > 0) {
      const passingEntryIndex = sectionIds.indexOf(`#${entry.target.id}`);

      if(entry.boundingClientRect.y < 0) {
        selectedNavIndex = passingEntryIndex + 1;
      } else {
        selectedNavIndex = passingEntryIndex - 1;
      }
      selectNavItem(selectedNavIndex);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

