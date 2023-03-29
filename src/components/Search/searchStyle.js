export default function searchStyle(type) {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      position: absolute;
      background-color: white;
      top: calc(var(--input-hegiht) + 8px);
      width: 100%;
      max-height: 600px;
      overflow-y: scroll;
      z-index: 2;
      color: var(--gray-800);
    }

    div {
      padding: 16px;
    }

    li {
      padding: 10px;
      color: var(--gray-800);
    }
  `;
  return style;
}
