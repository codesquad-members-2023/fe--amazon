export default function subMenuStyle() {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        display: flex;
        align-items: center;
        color: var(--white);
      }

      button {
        background-color: transparent;
        border: none;

        display: flex;
        padding: 8px;
        gap: 4px;
        align-items: center;

        color: var(--white);
        text-decoration: none;
        
        font-weight: 600;
        font-size: var(--bold-md-size);
        line-height: 16px;
        letter-spacing: var(--bold-md-spacing);

        border-radius: 1px;
      }

      button:hover {
        cursor: pointer;
        outline: 1px solid var(--white);
      }

      span {
        width: max-content;
      }

      .bold {
        font-weight: 800;
      }
    `;
  return style;
}
