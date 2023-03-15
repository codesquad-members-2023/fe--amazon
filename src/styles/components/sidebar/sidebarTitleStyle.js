export default function sidebarTitleStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      font-weight: var(--bold-lg-weight);
      font-size: var(--bold-lg-size);
      line-height: var(--bold-lg-height);
      letter-spacing: var(--bold-lg-spacing);

      display: flex;
      align-items: center;
      padding: 16px 32px;
    }

    p {
      margin: 0;
    }
  `;
  return style;
}
