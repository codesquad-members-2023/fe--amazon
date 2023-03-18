export default function sliderStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      width: 100%;
      height: 211px;
      display: block;
      position: relative;
    }

    .slide-container {
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
      display: block;
    }

    .slide {
      width: 100%;
      height: 600px;
      background-size: cover;
      transform: translateX(100%);
      transition: transform 0.5s;
      position: absolute;
      top: 0;
      background-position: center;
    }

    .slide.right {
      transform: translateX(100%);
    }

    .slide.middle {
      transform: translateX(0);
      position: inherit;
    }

    .slide.left {
      transform: translateX(-100%);
      position: absolute;
    }

    .controller-container {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 211px;
      width: calc(100% - 160px);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `;
  return style;
}
