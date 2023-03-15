import { SIDEBAR_FOLDING_BTN_HEIGHT } from '../../../../constant.js';

export default function sidebarFoldStyle() {
  const style = document.createElement('style');

  style.textContent = `
      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: ${SIDEBAR_FOLDING_BTN_HEIGHT}px;

        gap: 8px;
        padding: 0 16px 0 32px;
        width: 100%;
        
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--gray-100);

        font-weight: var(--body-md-weight);
        font-size: var(--body-md-size);
        line-height: var(--body-md-height);
        letter-spacing: var(--body-md-spacing);
      }

      button:hover {
        cursor: pointer;
      }
    `;
  return style;
}
