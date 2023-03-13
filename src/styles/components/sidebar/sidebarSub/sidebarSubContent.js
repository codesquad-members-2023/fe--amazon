import { SIDEBAR_SIZE } from '../../../../constant.js';

export default function sidebarSubContentStyle() {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        display: block;
        width: ${SIDEBAR_SIZE}px;
        height: 100%;
      }

      section {
        border-top: 1px solid #e5e5e5;
      }

      @keyframes slide-right {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(0%);
        }
      }
    `;
  return style;
}
