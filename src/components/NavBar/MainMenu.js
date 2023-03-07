class MainMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const inner = this.innerHTML;

    shadow.innerHTML = `
      <a href="/">
        ${inner}
      </a>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');

    style.textContent = `
      a {
        display: flex;
        flex-direction: column;
        color: var(--gray-400);

        text-decoration: none;
        
        font-weight: 600;
        font-size: var(--bold-md-size);
        line-height: var(--bold-md-height);
        letter-spacing: var(--bold-md-spacing);
        width: max-content;
      }

      span {
        margin: 0;
        width: 100%;
        display: flex;
        align-items: center;
      }

      .label {
        line-height: 13px;
      }

      image-element[name="flag"], icon-element[name="cart"] {
        margin-right: 4px;
      }

      .text {
        font-weight: 800;
        color: var(--white);
        line-height: 16px;
      }
    `;
    return style;
  }
}

export default MainMenu;
