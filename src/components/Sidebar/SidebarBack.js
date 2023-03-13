class SideBarBack extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button><icon-element name="arrow-left" fill="var(--gray-600)"></icon-element>주메뉴</button>`;
    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      button {
        display: flex;
        align-items: center;
        gap: 8px;

        width: 100%;
        padding: 8px 16px 8px 32px;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        text-align: left;

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

export default SideBarBack;
