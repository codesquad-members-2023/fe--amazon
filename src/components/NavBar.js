class Navbar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <div class="main">
        <image-element name="BI"></image-element>
        <navbar-mainmenu-element>배송처<b>대한민국</b></navbar-mainmenu-element>
        <input type="text" placeholder="검색 Amazon"></input> 
        <navbar-mainmenu-element><b><image-element name="flag"></image-element>KO</b></navbar-mainmenu-element>
        <navbar-mainmenu-element>안녕하세요,<b>로그인 계정 및 목록</b></navbar-mainmenu-element>
        <navbar-mainmenu-element>반품 &<b>주문</b></navbar-mainmenu-element>
        <navbar-mainmenu-element><b>장바구니</b></navbar-mainmenu-element>
      </div>
      <div class="sub">
        <div class="left-buttons">
          <navbar-submenu-element icon="menu"><b>모두</b></navbar-submenu-element>
          <navbar-submenu-element>오늘의 딜</navbar-submenu-element>
          <navbar-submenu-element>고객 서비스</navbar-submenu-element>
          <navbar-submenu-element>레지스터리</navbar-submenu-element>
          <navbar-submenu-element>기프트 카드</navbar-submenu-element>
          <navbar-submenu-element>판매</navbar-submenu-element>
        </div>
        <div class="right-buttons">
          <navbar-submenu-element><b>지금 특가 상품 쇼핑하기</b></navbar-submenu-element>
        </div>
      </div>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const width = this.getAttribute('width');

    style.textContent = `
      :host {
        background-color: var(--black);
        display: block;
        padding: 8px 16px;
        color: var(--white)
      }

      .main, .sub {
        display: flex;
        align-items: center;
      }

      .sub {
        flex-direction: row;
        justify-content: space-between;
      }

      .main input {
        width: 100%;
      }

      .sub > div {
        flex-grow: 0;
        display: flex;
      }
      
    `;
    return style;
  }
}

export default Navbar;
