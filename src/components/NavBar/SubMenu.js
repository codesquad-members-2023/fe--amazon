class SubMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const icon = this.getAttribute('icon');
    const text = this.innerHTML;

    shadow.innerHTML = `
      <a href="/">
        ${
          icon
            ? `<icon-element size="16" name="${icon}" fill="var(--white)"></icon-element>`
            : ''
        }
        ${text}
      </a>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');

    style.textContent = `
      :host {
        display: flex;
        align-items: center;
        color: var(--white);
      }

      a {
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
}

export default SubMenu;
