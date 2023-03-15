export default function iconStyle(size) {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        display: inline-block;
        width: ${size}px;
        height: ${size}px;
      }
    `;
  return style;
}
