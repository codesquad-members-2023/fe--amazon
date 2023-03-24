import iconStyle from './iconStyle.js';

class Icon extends HTMLElement {
  getThisAttribute(name) {
    if (!this.hasAttribute(name)) return null;
    return this.getAttribute(name);
  }

  constructor() {
    super();

    const name = this.getAttribute('name');
    this.attachShadow({ mode: 'open' });
    this.setSvg(name);
  }

  async setSvg(name) {
    const svgString = await this.getSvgString(name);
    const newSvgString = this.replaceSvgStringAttributes(svgString);
    this.shadowRoot.innerHTML = newSvgString;
  }

  async getSvgString(name) {
    try {
      const response = await fetch(`public/assets/symbols/${name}.svg`);
      if (!response) throw Error('icon fetch 실행 실패');
      const svgContent = await response.text();
      if (!svgContent) throw Error('icon 내용 없음');
      return svgContent;
    } catch (error) {
      console.log(error.message)
    }
  }

  replaceSvgStringAttributes(svgString) {
    const defaultSize = 24;
    const size = this.getThisAttribute('size');
    const width = this.getThisAttribute('width');
    const height = this.getThisAttribute('height');
    const fill = this.getThisAttribute('fill');

    let result = svgString.replace(
      /width=".*?"/g,
      `width="${width ?? size ?? defaultSize}"`
    ).replace(
      /height=".*?"/g,
      `height="${height ?? size ?? defaultSize}"`
    );

    const hasFill = this.hasAttribute('fill');
    if (hasFill) result = result.replace(/fill=".*?"/g, `fill="${fill}"`);

    return result;
  }
}

export default Icon;
