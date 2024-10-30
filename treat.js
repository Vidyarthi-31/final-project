// JavaScript for image slider
let currentIndex = 0;
const slides = document.getElementById("slides");
const slideCount = slides.children.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`; // Use backticks for template literals
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds
