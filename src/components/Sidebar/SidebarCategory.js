class SidebarCategory extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const icon = this.getAttribute('icon');
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button>${
      icon ? `<icon-element name="${icon}">` : ''
    }</icon-element><p>${text}</p><icon-element name="chevron-right" fill="var(--gray-600)"></icon-element></button>`;
    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      button {
        display: flex;
  
        align-items: center;
        padding: 8px 16px 8px 32px;
        gap: 8px;
        border: none;

        width: 100%;
        background: var(--white);

        font-weight: var(--body-md-weight);
        font-size: var(--body-md-size);
        line-height: var(--body-md-height);
        letter-spacing: var(--body-md-spacing);
      }

      button:hover {
        cursor: pointer;
        background-color: var(--gray-100);
      }

      p {
        flex-grow: 1;
        text-align: left;
        margin: 0;
      }
      
    `;
    return style;
  }
}

export default SidebarCategory;
