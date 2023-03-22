import sidebarTitleStyle from './sidebarTitleStyle.js';

class SideBarTitle extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<p>${text}</p>`;

    const style = sidebarTitleStyle.call(this);
    this.shadowRoot.append(style);
  }
}

export default SideBarTitle;
