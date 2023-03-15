import { SIDEBAR_SIZE } from '../../../constant.js';

export default function sidebarSubStyle() {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        display: block;
        width: ${SIDEBAR_SIZE}px;
        height: 100%;
        background-color: var(--white);
      }
    `;
  return style;
}
