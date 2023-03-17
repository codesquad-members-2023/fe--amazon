import { BaseComponent } from '../../../Base';
import { ImageComponent } from '../../basic/ImageComponent';
import { SearchBarComponent } from './SearchBarComponent';
import { TwoRowTextComponent } from './TwoRowTextComponent';
import { SymbolTextComponent } from '../SymbolTextComponent';
import { NavBarMainComponentStyle } from '../../../../style/components/navbar/main/NavBarMainComponent.css';

export class NavBarMainComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${NavBarMainComponentStyle}'></section>`);
    const logo = new ImageComponent(
      'assets/nav-bar/logo.svg',
      '6rem',
      '2.5rem',
    );
    const shippingAddress = new TwoRowTextComponent('배송처', '대한민국');
    const searchBar = new SearchBarComponent();
    const nation = new SymbolTextComponent('assets/nav-bar/flag-un.svg', 'UN');
    const login = new TwoRowTextComponent('안녕하세요, 로그인', '계정 및 목록');
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
