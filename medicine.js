// JavaScript for image slider
let currentIndex = 0;
const slides = document.getElementById("slides");
const slideCount = slides.children.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds


// feedback
// Existing image slider code...

// JavaScript for feedback slider
let currentFeedbackIndex = 0;
const feedbackSlides = document.querySelectorAll('.feedback-slide');
const feedbackDots = document.querySelectorAll('.dot');

function showFeedbackSlide(index) {
  feedbackSlides[currentFeedbackIndex].classList.remove('active');
  feedbackDots[currentFeedbackIndex].classList.remove('active');
  
  currentFeedbackIndex = index;
  
  feedbackSlides[currentFeedbackIndex].classList.add('active');
  feedbackDots[currentFeedbackIndex].classList.add('active');
}

// Initialize the first slide as active
showFeedbackSlide(0);


// Existing feedback slider code...

// Send link function for phone input
function sendLink() {
    const phoneInput = document.querySelector('.phone-input input');
    const phoneNumber = phoneInput.value.trim();
    if (phoneNumber) {
      alert(`A download link has been sent to ${phoneNumber}`);
      phoneInput.value = ''; // Clear the input after sending
    } else {
      alert('Please enter a valid phone number');
    }
  }
  