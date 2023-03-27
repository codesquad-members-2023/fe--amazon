export default function searchStyle(type) {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      position: absolute;
      background-color: white;
      top: 52px;
      left: calc(50% - 80px);
      transform: translateX(-50%);
      width: 800px;
      max-height: 600px;
      overflow-y: scroll;
      z-index: 2;
    }

    li {
      padding: 10px;
    }
  `;
  return style;
}
