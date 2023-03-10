class SideBarTitle extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<p>${text}</p>`;
    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      :host {
        font-weight: var(--bold-lg-weight);
        font-size: var(--bold-lg-size);
        line-height: var(--bold-lg-height);
        letter-spacing: var(--bold-lg-spacing);

        display: flex;
        align-items: center;
        padding: 16px 32px;
      }

      p {
        margin: 0;
      }
    `;
    return style;
  }
}

export default SideBarTitle;
