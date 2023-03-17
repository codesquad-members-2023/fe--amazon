export default function sliderStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      width: 100%;
      height: 211px;
      display: block;
      position: relative;
    }

    ul.container {
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
    }

    li.slide {
      width: 100%;
      height: 600px;
      background-size: cover;
      transform: translateX(100%);
      transition: transform 0.5s;
    }

    li.slide.show {
      transform: translateX(0);
    }

    li.slide.hide {
      transform: translateX(-100%);
    }

    .controller-container {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1120px;
      height: 100%;
    }

    
  `;
  return style;
}
