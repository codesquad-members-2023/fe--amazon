import { SIDEBAR_HEADER_HEIGHT } from '@constant';

export default function sidebarHeaderStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      background-color: var(--black);
      color: var(--white);
      height: ${SIDEBAR_HEADER_HEIGHT}px;
      padding: 16px 16px 16px 32px;
      box-sizing: border-box;

      font-weight: var(--bold-lg-weight);
      font-size: var(--bold-lg-size);
      line-height: var(--bold-lg-height);
      letter-spacing: var(--bold-lg-spacing);
    }
  `;
  return style;
}
