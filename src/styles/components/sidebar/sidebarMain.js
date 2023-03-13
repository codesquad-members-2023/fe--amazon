import { SIDEBAR_SIZE } from '../../../constant.js';

export default function sidebarMainStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      width: ${SIDEBAR_SIZE}px;
      height: 100%;
    }

    #folidng-list {
      padding: 0;
      list-style: none;
      margin: 0;
      opacity: 0;
      height: 0;
      overflow: hidden;
    }

    #folidng-list.unfolded {
      opacity: 1;
      height: auto;
    }

    #folidng-list.slide-down {
      animation: slide-down .3s forwards;
    }

    #folidng-list.slide-up {
      animation: slide-up .3s forwards;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    .section {
      border-bottom: 1px solid var(--gray-100);
    }

    .section:last-of-type {
      border-bottom: none;
    }

    @keyframes slide-up {
      0% {
        opacity: 1;
        height: auto;
      }
      100% {
        opacity: 0;
        height: 0;
      }
    }

    @keyframes slide-down {
      0% {
        opacity: 0;
        height: 0;
      }
      100% {
        opacity: 1;
        height: auto;
      }
  `;
  return style;
}
