import { SIDEBAR_SIZE } from '../../../constant.js';

export default function sidebarMainStyle(foldingListHeight) {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      width: ${SIDEBAR_SIZE}px;
      height: 100%;
    }

    #folding-container {
      display: block;
      height: 100%;
    }

    sidebar-fold-element {
      height: auto;
      display: block;
    }

    #folding-list {
      padding: 0;
      list-style: none;
      margin: 0;
      max-height: 0;
      
      overflow: hidden;
      display: block;
      opacity: 0;
      max-height: 0;
      transition: max-height .3s, opacity .3s;
    }

    #folding-list.unfolded {
      opacity: 1;
      max-height: ${foldingListHeight}px;
    }


    ul {
      margin: 0;
      padding: 0;
    }

    .section {
      border-bottom: 1px solid var(--gray-100);
      height: auto;
    }

    .section:last-of-type {
      border-bottom: none;
    }
  `;
  return style;
}
