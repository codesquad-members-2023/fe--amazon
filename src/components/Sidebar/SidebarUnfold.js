class SidebarUnfold extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button><icon-element name="chevron-down"></icon-element>간단히 보기</button>`;
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

      icon-element[name="chevron-down"] {
        transform: rotate(180deg);
      }
    `;
    return style;
  }
}

export default SidebarUnfold;
