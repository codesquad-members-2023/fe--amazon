class Icon extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute('name');
    const shadow = this.attachShadow({ mode: 'open' });
    fetch(`public/assets/symbols/${name}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        const size = this.getAttribute('size');

        let svg = svgContent;
        if (size) {
          svg = svg.replace(/<svg/g, `<svg height="${size}px" width="${size}"`);
        }

        shadow.innerHTML = this.hasAttribute('fill')
          ? svg.replace(/fill=\".+\"/g, `fill="${this.getAttribute('fill')}"`)
          : svg;
      })
      .catch((error) => console.error(error));
  }
}

export default Icon;
