class Icon extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute('name');
    const shadow = this.attachShadow({ mode: 'open' });
    fetch(`public/assets/symbols/${name}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        shadow.innerHTML = this.hasAttribute('fill')
          ? svgContent.replace(
              /fill=\".+\"/g,
              `fill="${this.getAttribute('fill')}"`
            )
          : svgContent;
      })
      .catch((error) => console.error(error));
  }
}

export default Icon;
