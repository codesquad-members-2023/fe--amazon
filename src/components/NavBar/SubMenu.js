import subMenuStyle from '../../styles/components/navbar/subMenuStyle.js';

class SubMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const icon = this.getAttribute('icon');
    const text = this.innerHTML;

    shadow.innerHTML = `
      <button href="/">
        ${
          icon
            ? `<icon-element size="16" name="${icon}" fill="var(--white)"></icon-element>`
            : ''
        }
        ${text}
      </button>
    `;

    this.shadowRoot.append(subMenuStyle.call(this));
  }
}

export default SubMenu;
