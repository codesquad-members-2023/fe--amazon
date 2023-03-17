const SLIDE_INTERVAL_TIME = 3000;

function clickSliderController() {
  const slider = document.querySelector('slider-element').shadowRoot;
  slider.addEventListener('click', (e) => {
    const position = e.target.getAttribute('position');
    if (position === 'right') {
      slideLeft(slider);
    }
    if (position === 'left') {
      slideRight(slider);
    }
  });
}

function autoSlide() {
  const slider = document.querySelector('slider-element').shadowRoot;

  setInterval(() => {
    slideLeft(slider);
  }, SLIDE_INTERVAL_TIME);
}

function slideLeft(slider) {
  const firstSlide = slider.querySelector('.slide');
  let lastSlide = firstSlide;
  firstSlide.remove();
  slider.querySelector('.slide-container').append(lastSlide);

  const currentSlide = slider.querySelector('.middle');
  const prevSlide = currentSlide.previousElementSibling;
  const nextSlide = currentSlide.nextElementSibling;

  prevSlide.classList.remove('left');
  currentSlide.classList.remove('middle');
  nextSlide.classList.remove('right');

  currentSlide.classList.add('left');
  nextSlide.classList.add('middle');
}

function slideRight(slider) {
  const lastSlide = slider.querySelector('.slide:last-child');
  let firstSlide = lastSlide;
  lastSlide.remove();
  slider.querySelector('.slide-container').prepend(firstSlide);

  const currentSlide = slider.querySelector('.middle');
  const prevSlide = currentSlide.previousElementSibling;
  const prevPrevSlide = prevSlide.previousElementSibling;
  const nextSlide = currentSlide.nextElementSibling;

  prevSlide.classList.remove('left');
  currentSlide.classList.remove('middle');
  nextSlide.classList.remove('right');

  prevPrevSlide.classList.add('left');
  prevSlide.classList.add('middle');
  currentSlide.classList.add('right');
}

clickSliderController();
autoSlide();
