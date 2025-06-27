let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[currentSlide].classList.remove("show");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("show");
}, 4000);
