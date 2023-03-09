class SidebarHeader extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button>header</button>`;
    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
        height: 32px;
        width: ${type === 'flexible' ? '160px' : 'auto'};
        
        background: linear-gradient(174.6deg, var(--white) 4.31%, var(--primary-yellow-100) 50.01%, var(--primary-yellow-200) 95.71%);

        border: 1px solid var(--primary-yellow-300);
        border-radius: 4px;

        font-weight: var(--bold-sm-weight);
        font-size: var(--bold-sm-size);
        line-height: var(--bold-sm-height);
        letter-spacing: var(--bold-sm-spacing);
      }

      button:hover {
        cursor: pointer;
      }
    `;
    return style;
  }
}

export default SidebarHeader;
