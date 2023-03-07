class Image extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute('name');
    const extension = this.hasAttribute('extension')
      ? this.getAttribute('extension')
      : 'svg';
    const shadow = this.attachShadow({ mode: 'open' });

    if (extension === 'svg') {
      fetch(`public/assets/images/${name}.${extension}`)
        .then((response) => response.text())
        .then((svgContent) => {
          shadow.innerHTML = this.hasAttribute('fill')
            ? svgContent.replace(
                /fill=\".+\"/g,
                `fill="${this.getAttribute('fill')}"`
              )
            : svgContent;

          this.shadowRoot.append(this.getStyle());
        })
        .catch((error) => console.error(error));
    } else {
      const img = document.createElement('img');
      img.src = `public/assets/images/${name}.${extension}`;
      shadow.appendChild(img);
    }
  }

  getStyle() {
    const style = document.createElement('style');
    const size = this.size;

    style.textContent = `
      :host {
        display: inline-block;
        width: fit-content;
        height: fit-content;
      }
    `;
    return style;
  }
}

export default Image;
