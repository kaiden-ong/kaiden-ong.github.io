// variables
var textarea = document.getElementById("textarea");
var heightLimit = 200;
var form = document.getElementById("myForm");
var form_bg = document.querySelector(".form-bg");
var form_container = document.querySelector(".form-container");


// form functions
function openForm() {
  form_bg.style.display = "block";
  form.style.display = "block";
  // disableScroll();
  mybutton.style.display = "none";
  startScroll = Number.MAX_SAFE_INTEGER;
}

function closeForm() {
  form_bg.style.display = "none";
  form.style.display = "none";
  startScroll = aboutPhotoHeight + navbarHeight;
  if (document.body.scrollTop > startScroll || document.documentElement.scrollTop > startScroll) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  resetForm();
  // enableScroll();
}

//reset form
function resetForm() {
  form_container.reset();
}

// resize contact form textarea
textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

// scroll to top button
let mybutton = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};
let aboutPhotoHeight = document.getElementById('head-photo').offsetHeight;
let navbarHeight = document.getElementById("navigation-bar").offsetHeight;
let startScroll = aboutPhotoHeight + navbarHeight;

function scrollFunction() {
  if (document.body.scrollTop > startScroll || document.documentElement.scrollTop > startScroll) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// disable scrolling
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }


// var supportsPassive = false;
// try {
//   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//     get: function () { supportsPassive = true; } 
//   }));
// } catch(e) {}

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


// function disableScroll() {
//   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
// }


// function enableScroll() {
//   window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
//   window.removeEventListener('touchmove', preventDefault, wheelOpt);
//   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
// }

