export default function sidebarCateoryStyle() {
  const style = document.createElement('style');

  style.textContent = `
    button {
      display: flex;
      align-items: center;
      padding: 8px 16px 8px 32px;
      gap: 8px;
      border: none;

      width: 100%;
      background: var(--white);

      font-weight: var(--body-md-weight);
      font-size: var(--body-md-size);
      line-height: var(--body-md-height);
      letter-spacing: var(--body-md-spacing);
    }

    button:hover {
      cursor: pointer;
      background-color: var(--gray-100);
    }

    p {
      flex-grow: 1;
      text-align: left;
      margin: 0;
    } 
  `;
  return style;
}
