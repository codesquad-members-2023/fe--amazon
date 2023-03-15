import { SIDEBAR_SIZE } from '../../../constant.js';

export default function sidebarMainStyle(foldingListHeight) {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      width: ${SIDEBAR_SIZE}px; 
    }

    sidebar-fold-element {
      height: auto;
      display: block;
    }

    section {
      border-bottom: 1px solid var(--gray-100);
    }

    section:last-of-type {
      border-bottom: none;
    }
  `;
  return style;
}
