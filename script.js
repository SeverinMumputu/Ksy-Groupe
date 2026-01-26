document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".hero-slide");
  const video = document.querySelector(".hero-video");

  let currentSlide = 0;
  let interval = null;

  if (!slides.length || !video) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.position = i === 0 ? "relative" : "absolute";
    });
  }

  function startImageCarousel() {
    currentSlide = 1;
    showSlide(currentSlide);

    interval = setInterval(() => {
      currentSlide++;

      if (currentSlide >= slides.length) {
        stopCarousel();
        return;
      }

      showSlide(currentSlide);
    }, 3500);
  }

  function stopCarousel() {
    clearInterval(interval);

    slides.forEach((slide, i) => {
      slide.style.opacity = i === 0 ? "1" : "0";
    });

    video.currentTime = 0;
    video.play();
  }

  // INITIAL STATE
  showSlide(0);

  // 🔑 TRIGGER CINÉMATIQUE
  video.addEventListener("ended", () => {
    startImageCarousel();
  });

});
