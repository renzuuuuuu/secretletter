function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }
  function scrollToDiv(divId) {
    var element = document.getElementById(divId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
  slideIndex = (n + totalSlides) % totalSlides;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
  });
}

document.querySelector('.prev').addEventListener('click', () => showSlide(slideIndex - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(slideIndex + 1));

showSlide(slideIndex);