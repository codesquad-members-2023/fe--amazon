import { SLIDER_IMAGES_LENGTH } from '@constant';
import { half } from '@utils';

export default function sliderStyle() {
  const style = document.createElement('style');
  const halfNum = half(SLIDER_IMAGES_LENGTH);

  style.textContent = `
   li {
      width: 100vw;
      height: 600px;
      background-size: contain;
      top: 0;
      background-position: top;
      background-repeat: no-repeat;
      
    }
  `;
  return style;
}
