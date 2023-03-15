export default function imageStyle(width, height) {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        display: inline-block;
        ${width && height ? `width: ${width}px; height: ${height}px` : ''};
      }
    `;
  return style;
}
