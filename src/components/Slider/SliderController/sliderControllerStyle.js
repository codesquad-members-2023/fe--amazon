export default function sliderStyle(position) {
  const style = document.createElement('style');
  const rotate = position === 'right' ? '-90' : '90';

  style.textContent = `
    :host {
      display: flex;
      align-items: center;
      height: 100%;
    }

    :host(:hover) {
      cursor: pointer;
    }

    .controller {
      width: 54px;
      height: 20px;
      transform: rotate(${rotate}deg);
    }

    .controller::before,
    .controller::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 32px;
      height: 1px;
      background-color: black;
    }

    .controller::before {
      left: 0;
      transform: translateY(-50%) rotate(45deg);
    }

    .controller::after {
      right: 0;
      transform: translateY(-50%) rotate(-45deg);
    }

    .controller.left {
      transform: rotate(90deg);
    }

    .controller.right {
      transform: rotate(-90deg);
    }
  `;
  return style;
}
