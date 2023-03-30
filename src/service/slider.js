const SLIDE_INTERVAL_TIME = 10000;

function clickSliderController() {
  const slider = document.querySelector('slider-element').shadowRoot;
  slider.addEventListener('click', (e) => {
    const direction = e.target.getAttribute('position');
    handleSlide(slider, direction);
  });
}

function autoSlide() {
  const slider = document.querySelector('slider-element').shadowRoot;
  let lastTime = null;
  function step(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const now = timestamp;
    const elapsed = now - lastTime;
    if (elapsed >= 3000) {
      slideLeft(slider);
      lastTime = now;
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function handleSlide(slider, direction) {
  if (direction === 'left') {
    slideRight(slider);
  } else if (direction === 'right') {
    slideLeft(slider);
  }
}

function slideLeft(slider) {
  const slideContainer = slider.querySelector('.slide-container');
  slideContainer.style.transform = `translateX(-100vw)`;
  slideContainer.style.transition = `all 0.5s`;

  const firstSlide = slider.querySelector('.slide');
  const lastSlide = firstSlide;
  slideContainer.addEventListener('transitionend', () => {
    slideContainer.removeAttribute('style');
    firstSlide.remove();
    slider.querySelector('.slide-container').append(lastSlide);
  });
}

function slideRight(slider) {
  const slideContainer = slider.querySelector('.slide-container');
  slideContainer.style.transform = `translateX(100vw)`;
  slideContainer.style.transition = `all 0.5s`;

  const lastSlide = slider.querySelector('.slide:last-child');
  const firstSlide = lastSlide;
  slideContainer.addEventListener('transitionend', () => {
    slideContainer.removeAttribute('style');
    lastSlide.remove();
    slider.querySelector('.slide-container').prepend(firstSlide);
  });
}

clickSliderController();
autoSlide();
