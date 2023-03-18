import sidebarFoldStyle from './sidebarFoldStyle.js';

class SidebarFold extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button>모두 보기<icon-element name="chevron-down" fill="var(--gray-600)"></icon-element></button>`;
    this.shadowRoot.append(sidebarFoldStyle.call(this));
  }
}

export default SidebarFold;
