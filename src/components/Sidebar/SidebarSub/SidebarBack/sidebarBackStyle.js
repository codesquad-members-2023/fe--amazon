export default function sidebarBackStyle() {
  const style = document.createElement('style');
  style.textContent = `
      button {
        display: flex;
        align-items: center;
        gap: 8px;

        width: 100%;
        padding: 8px 16px 8px 32px;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        text-align: left;

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
