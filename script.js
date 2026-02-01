document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const carousel = document.getElementById("heroCarousel");

  if (!slides.length) return;

  let currentIndex = 0;
  const intervalTime = 3500;

  // Init
  carousel.style.opacity = "1";

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.position = i === index ? "relative" : "absolute";
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, intervalTime);
});
