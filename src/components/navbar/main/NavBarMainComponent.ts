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
  constructor() {
    super(`<section class='${NavBarMainComponentStyle}'></section>`);
    const logo = new ImageComponent(
      'assets/nav-bar/logo.svg',
      '6rem',
      '2.5rem',
    );
    const dimLayer = new DimLayerComponent();
    dimLayer.attachTo(document.querySelector('#app')! as HTMLElement);

    const shippingAddress = new TwoRowTextComponent('배송처', '대한민국');
    shippingAddress.element.style.position = 'relative';

    const addressPop = new AddressPopComponent();
    shippingAddress.element.addEventListener('mouseenter', () => {
      addressPop.attachTo(shippingAddress.element);
      dimLayer.on();
    });
    shippingAddress.element.addEventListener('mouseleave', () => {
      addressPop.removeFrom(shippingAddress.element);
      dimLayer.off();
    });

    const searchBar = new SearchBarComponent();
    const nation = new SymbolTextComponent('assets/nav-bar/flag-un.svg', 'UN');

    const login = new TwoRowTextComponent('안녕하세요, 로그인', '계정 및 목록');
    login.element.style.position = 'relative';
    const loginPop = new LoginPopComponent();
    // 먼저 loginPop을 login.element에 붙여서 페이지를 그리고 나서
    // load가 되고나서 opacity 1을 줘야 transition이 그 변경을 캐치하고 애니메이션 효과가 일어난다.
    loginPop.attachTo(login.element);
    window.addEventListener('load', () => {
      loginPop.element.style.opacity = '1';
    });
    const loginPopSub = new LoginPopSubComponent();
    login.element.addEventListener('mouseenter', () => {
      loginPopSub.attachTo(login.element);
      dimLayer.on();
    });
    login.element.addEventListener('mouseleave', () => {
      loginPopSub.removeFrom(login.element);
      dimLayer.off();
    });

    const myPage = new TwoRowTextComponent('반품', '& 주문');
    const cart = new SymbolTextComponent('assets/nav-bar/cart.svg', '장바구니');
    cart.attachTo(this.element);
    myPage.attachTo(this.element);
    login.attachTo(this.element);
    nation.attachTo(this.element);
    searchBar.attachTo(this.element);
    shippingAddress.attachTo(this.element);
    logo.attachTo(this.element);
  }
}
