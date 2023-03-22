import sliderImageStyle from './sliderImageStyle.js';

function SliderImage() {
  const li = document.createElement('li');
  const style = sliderImageStyle.call(this);
  li.append(style);
  li.classList.add('slide');
  return li;
}

export default SliderImage;
