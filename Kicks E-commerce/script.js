// getting the like button and giving it functionality
const like = document.querySelector(".like");

like.addEventListener("click", liked);
function liked() {
    like.classList.toggle("liked");
}

// toggle between men best seller and women best seller
const toggler = document.querySelector(".toogle-btn");
const toggleBtn = document.querySelector(".white-btn");

toggler.addEventListener("click", toggled);
function toggled() {
    toggleBtn.classList.toggle("toggled");
}

// scrolling back to top when at bottom
const upper = document.querySelector(".up");

upper.addEventListener("click", upTop);
function upTop() {
    window.scrollTo(0, 0);
}

// increment the number in shopping cart
const number = document.querySelector(".shopping-art-number");
const adding = document.querySelectorAll(".add-span");


for (let index = 0; index < adding.length; index++) {

    adding[index].addEventListener("click", increment)
    
}

function increment() {
    number.textContent ++
    number.classList.add("added")
}

const headerBg = document.querySelector("nav");
var scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    headerBg.classList.add("actived");
  } else {
    headerBg.classList.remove("actived");
  }
};