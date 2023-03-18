import mainMenuStyle from './mainMenuStyle.js';

class MainMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const inner = this.innerHTML;

    shadow.innerHTML = `
      <button>
        ${inner}
      </button>
    `;

    this.shadowRoot.append(mainMenuStyle.call(this));
  }
}

export default MainMenu;
