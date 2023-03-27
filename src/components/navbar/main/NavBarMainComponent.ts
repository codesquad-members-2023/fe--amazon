import { BaseComponent } from '../../Base';
import { ImageComponent } from '../../basic/ImageComponent';
import { SearchBarComponent } from './SearchBarComponent';
import { TwoRowTextComponent } from './TwoRowTextComponent';
import { SymbolTextComponent } from '../SymbolTextComponent';
import { NavBarMainComponentStyle } from '../../../../style/components/navbar/main/NavBarMainComponent.css';
import { LoginPopComponent } from './LoginPopComponent';
import { AddressPopComponent } from './AddressPopComponent';
import { LoginPopSubComponent } from './LoginPopSubComponent';
import { DimLayerComponent } from '../../layer/DimLayerComponent';

export class NavBarMainComponent extends BaseComponent<HTMLElement> {
  private dimLayer = new DimLayerComponent();
  constructor() {
    super(`<section class='${NavBarMainComponentStyle}'></section>`);

    this.dimLayer.attachTo(document.querySelector('#app')! as HTMLElement);

    this.addLogo();
    this.addShippingAddress();
    this.addSearchBar();
    this.addNation();
    this.addLogin();
    this.addMyPage();
    this.addCart();
  }

  addLogo() {
    const logoComponent = new ImageComponent(
      'assets/nav-bar/logo.svg',
      '6rem',
      '2.5rem',
    );
    logoComponent.attachTo(this.element, 'beforeend');
  }

  addShippingAddress() {
    const shippingAddressComponent = new TwoRowTextComponent(
      '배송처',
      '대한민국',
    );
    shippingAddressComponent.setStyles({ position: 'relative' });

    const addressPop = new AddressPopComponent();
    shippingAddressComponent.setEventListener('mouseenter', () => {
      addressPop.attachTo(shippingAddressComponent.element);
      this.dimLayer.on();
    });
    shippingAddressComponent.setEventListener('mouseleave', () => {
      addressPop.removeFrom(shippingAddressComponent.element);
      this.dimLayer.off();
    });
    shippingAddressComponent.attachTo(this.element, 'beforeend');
  }

  addSearchBar() {
    const searchBar = new SearchBarComponent();
    searchBar.attachTo(this.element, 'beforeend');
  }

  addNation() {
    const nation = new SymbolTextComponent('assets/nav-bar/flag-un.svg', 'UN');
    nation.attachTo(this.element, 'beforeend');
  }

  addLogin() {
    const login = new TwoRowTextComponent('안녕하세요, 로그인', '계정 및 목록');
    login.setStyles({ position: 'relative' });

    const loginPop = new LoginPopComponent();
    // 먼저 loginPop을 login.element에 붙여서 페이지를 그리고 나서
    // load가 되고나서 opacity 1을 줘야 transition이 그 변경을 캐치하고 애니메이션 효과가 일어난다.
    loginPop.attachTo(login.element);
    window.addEventListener('load', () => {
      loginPop.setStyles({ opacity: '1' });
    });
    const loginPopSub = new LoginPopSubComponent();
    login.setEventListener('mouseenter', () => {
      loginPopSub.attachTo(login.element);
      this.dimLayer.on();
    });
    login.setEventListener('mouseleave', () => {
      loginPopSub.removeFrom(login.element);
      this.dimLayer.off();
    });
    login.attachTo(this.element, 'beforeend');
  }

  addMyPage() {
    const myPage = new TwoRowTextComponent('반품', '& 주문');
    myPage.attachTo(this.element, 'beforeend');
  }

  addCart() {
    const cart = new SymbolTextComponent('assets/nav-bar/cart.svg', '장바구니');
    cart.attachTo(this.element, 'beforeend');
  }
}
