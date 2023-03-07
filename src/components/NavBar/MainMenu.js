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
    const width = this.getAttribute('width');

    style.textContent = `
      a {
        padding: 8px;
        display: inline-block;
        color: var(--gray-400);

        text-decoration: none;
        
        font-weight: 600;
        font-size: var(--bold-md-size);
        line-height: var(--bold-md-height);
        letter-spacing: var(--bold-md-spacing);
      }

      b {
        font-weight: 800;
        display: inline-block;
        color: var(--white);
      }
    `;
    return style;
  }
}

export default MainMenu;
