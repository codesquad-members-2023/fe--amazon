import sidebarCateoryStyle from '../../styles/components/sidebar/sidebarCategoryStyle.js';

class SidebarCategory extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const icon = this.getAttribute('icon');
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button>${
      icon ? `<icon-element name="${icon}">` : ''
    }</icon-element><p>${text}</p><icon-element name="chevron-right" fill="var(--gray-600)"></icon-element></button>`;
    this.shadowRoot.append(sidebarCateoryStyle.call(this));
  }
}

export default SidebarCategory;
