import sidebarUnfoldStyle from './sidebarUnfoldStyle.js';

class SidebarUnfold extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button>간단히 보기<icon-element name="chevron-down"></icon-element></button>`;
    this.shadowRoot.append(sidebarUnfoldStyle.call(this));
  }
}

export default SidebarUnfold;
