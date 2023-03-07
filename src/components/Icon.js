class Icon extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute('name');
    const shadow = this.attachShadow({ mode: 'open' });

    fetch(`public/assets/symbols/${name}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        this.size = this.getAttribute('size');
        const size = this.size;

        let svg = svgContent;
        if (size) {
          svg = svg.replace(/<svg/g, `<svg height="${size}px" width="${size}"`);
        }

        shadow.innerHTML = this.hasAttribute('fill')
          ? svg.replace(/fill=\".+\"/g, `fill="${this.getAttribute('fill')}"`)
          : svg;

        this.shadowRoot.append(this.getStyle());
      })
      .catch((error) => console.error(error));
  }

  getStyle() {
    const style = document.createElement('style');
    const size = this.size;

    style.textContent = `
      :host {
        display: inline-block;
        width: ${size}px;
        height: ${size}px;
      }
    `;
    return style;
  }
}

export default Icon;
