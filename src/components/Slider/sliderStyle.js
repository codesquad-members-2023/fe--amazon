import { SLIDER_IMAGES_LENGTH } from '@constant';

export default function sliderStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      width: 100%;
      display: block;
      position: relative;
    }

    .slide-container {
      list-style: none;
      padding: 0;
      margin: 0;
      display: block;
      width: calc(${SLIDER_IMAGES_LENGTH} * 100vw);
      white-space: nowrap;
      overflow-x: visible;
      display: flex;
      margin: 0 auto;
    }

    .controller-container {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 160px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 221px;
    }
  `;
  return style;
}
