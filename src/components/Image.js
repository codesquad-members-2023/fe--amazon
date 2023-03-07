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
          this.width = this.getAttribute('width');
          this.height = this.getAttribute('height');
          const width = this.width;
          const height = this.height;

          let svg = svgContent;
          if (width && height) {
            svg = svg.replace(
              /<svg/g,
              `<svg height="${height}px" width="${width}"`
            );
          }

          shadow.innerHTML = this.hasAttribute('fill')
            ? svg.replace(/fill=\".+\"/g, `fill="${this.getAttribute('fill')}"`)
            : svg;

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
    const width = this.width;
    const height = this.height;

    style.textContent = `
      :host {
        display: inline-block;
        ${width && height ? `width: ${width}px; height: ${height}px` : ''};
      }
    `;
    return style;
  }
}

export default Image;
