document.addEventListener('DOMContentLoaded', () => {
  
    // **Why Section Slider Code**
    (() => {
      const whySlides = document.querySelectorAll('.why__card');
      const totalWhySlides = whySlides.length;
      const whyTrack = document.querySelector('.why__track');
      const whyCardsPerView = 5;
      let currentWhySlide = 0;
  
      // Create dots dynamically
      const indicatorDots = document.querySelector('.indicator-dots');
      for (let i = 0; i < Math.ceil(totalWhySlides / whyCardsPerView); i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentWhySlide = i * whyCardsPerView;
          updateWhySlider();
        });
        indicatorDots.appendChild(dot);
      }
  
      function updateWhySlider() {
        const slideWidth = whySlides[0].getBoundingClientRect().width;
        whyTrack.style.transform = `translateX(-${currentWhySlide * slideWidth}px)`;
        updateWhyDots();
      }
  
      function updateWhyDots() {
        const dots = document.querySelectorAll('.indicator-dots .dot');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === Math.floor(currentWhySlide / whyCardsPerView));
        });
      }
  
      function changeWhySlide(n) {
        currentWhySlide = (currentWhySlide + n * whyCardsPerView + totalWhySlides) % totalWhySlides;
        updateWhySlider();
      }
  
      document.querySelector('.prev-slide').addEventListener('click', () => changeWhySlide(-1));
      document.querySelector('.next-slide').addEventListener('click', () => changeWhySlide(1));
  
      // Initialize the first card position for Why Slider
      updateWhySlider();
    })();
  
    // **Carousel Auto-Slide with Dots Code**
    (() => {
      const carouselTrack = document.querySelector('.carousel__track');
      const carouselSlides = Array.from(carouselTrack.children);
      const carouselDotsNav = document.querySelector('.carousel__dots');
      const carouselDots = [];
  
      carouselSlides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('current-slide');
        carouselDotsNav.appendChild(dot);
        carouselDots.push(dot);
      });
  
      let currentCarouselIndex = 0;
  
      function updateCarousel() {
        const slideWidth = carouselSlides[0].getBoundingClientRect().width;
        carouselTrack.style.transform = `translateX(-${currentCarouselIndex * slideWidth}px)`;
  
        // Update dots
        carouselDots.forEach((dot, idx) => {
          dot.classList.toggle('current-slide', idx === currentCarouselIndex);
        });
      }
  
      function changeCarouselSlide(n) {
        currentCarouselIndex = (currentCarouselIndex + n + carouselSlides.length) % carouselSlides.length;
        updateCarousel();
      }
  
      let autoSlideInterval = setInterval(() => changeCarouselSlide(1), 3000);
  
      // Dot click functionality for carousel
      carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentCarouselIndex = index;
          updateCarousel();
  
          // Reset auto-slide interval on click
          clearInterval(autoSlideInterval);
          autoSlideInterval = setInterval(() => changeCarouselSlide(1), 3000);
        });
      });
  
      // Initialize the first position for Carousel
      updateCarousel();
    })();
  
    // **Swiper Slider Initialization**
    (() => {
        const swiper = new Swiper('.mySwiper', {
          slidesPerView: 4,
          spaceBetween: 20, // Adjust spacing as needed
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        });
      })();      
  });  