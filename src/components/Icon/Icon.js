import iconStyle from './iconStyle.js';

class Icon extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute('name');
    const shadow = this.attachShadow({ mode: 'open' });
    const defaultSize = 24;

    fetch(`public/assets/symbols/${name}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        this.size = this.hasAttribute('size')
          ? this.getAttribute('size')
          : defaultSize;
        this.height = this.hasAttribute('height')
          ? this.getAttribute('height')
          : defaultSize;
        this.width = this.hasAttribute('width')
          ? this.getAttribute('width')
          : defaultSize;

        const size = this.size;
        const height = this.height;
        const width = this.width;

        const hasSize = this.hasAttribute('size');
        const hasHeightAndWidth =
          this.hasAttribute('height') && this.hasAttribute('width');

        let svg = svgContent;
        if (hasSize) {
          svg = svg.replace(/<svg/g, `<svg height="${size}px" width="${size}"`);
        }

        if (hasHeightAndWidth) {
          svg = svg.replace(
            /<svg/g,
            `<svg height="${height}px" width="${width}px"`
          );
        }

        shadow.innerHTML = this.hasAttribute('fill')
          ? svg.replace(/fill=\".+\"/g, `fill="${this.getAttribute('fill')}"`)
          : svg;

        this.shadowRoot.append(iconStyle.call(this));
      })
      .catch((error) => console.error(error));
  }
}

export default Icon;
