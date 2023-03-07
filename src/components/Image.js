class Image extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute('name');
    const extension = this.hasAttribute('extension')
      ? this.getAttribute('extension')
      : 'svg';
    const shadow = this.attachShadow({ mode: 'open' });

    if (extension === 'svg') {
      return fetch(`public/assets/images/${name}.${extension}`)
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

    const img = document.createElement('img');
    img.src = `public/assets/images/${name}.${extension}`;
    shadow.appendChild(img);
  }
}

export default Image;
