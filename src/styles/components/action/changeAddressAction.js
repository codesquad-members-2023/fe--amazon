export default function changeAddressActionStyle() {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        color: var(--black);
      }

      action-element {
        z-index: 1;
      }
    `;
  return style;
}
