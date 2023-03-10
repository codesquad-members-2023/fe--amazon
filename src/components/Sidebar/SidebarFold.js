class SidebarFold extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button>모두 보기<icon-element name="chevron-down" fill="var(--gray-600)"></icon-element></button>`;
    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      button {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 8px;
        padding: 8px 16px 8px 32px;
        width: 100%;
        
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--gray-100);

        font-weight: var(--body-md-weight);
        font-size: var(--body-md-size);
        line-height: var(--body-md-height);
        letter-spacing: var(--body-md-spacing);
      }

      button:hover {
        cursor: pointer;
      }
    `;
    return style;
  }
}

export default SidebarFold;
