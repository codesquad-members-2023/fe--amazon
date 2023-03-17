export default function iconStyle() {
  const style = document.createElement('style');
  const hasHeightAndWidth =
    this.hasAttribute('height') && this.hasAttribute('width');
  const hasSize = this.hasAttribute('size');

  const width = hasHeightAndWidth ? this.width : hasSize ? this.size : 24;
  const height = hasHeightAndWidth ? this.height : hasSize ? this.size : 24;

  style.textContent = `
      :host {
        display: inline-block;
        width: ${width}px;
        height: ${height}px;
      }
    `;
  return style;
}
