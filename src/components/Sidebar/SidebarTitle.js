import sidebarTitleStyle from '../../styles/components/sidebar/sidebarTitle.js';

class SideBarTitle extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<p>${text}</p>`;
    this.shadowRoot.append(sidebarTitleStyle());
  }
}

export default SideBarTitle;
