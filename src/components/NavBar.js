class Navbar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <nav>test</nav>
    `;
  }
}

export default Navbar;
