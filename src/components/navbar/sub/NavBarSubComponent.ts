import { BaseComponent } from '../../../Base';
import { TextComponent } from '../../basic/TextComponent';
import { SymbolTextComponent } from '../SymbolTextComponent';
import { NavBarSubComponentStyle } from '../../../../style/components/navbar/sub/NavBarSubComponent.css';

export class NavBarSubComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${NavBarSubComponentStyle}'></section>`);

    const sideBarHamburgerEl = new SymbolTextComponent(
      'assets/nav-bar/menu.svg',
      '모두',
    );
    const menuEls = [
      '오늘의 딜',
      '고객 서비스',
      '레지스트리',
      '기프트 카드',
      '판매',
      '지금 특가 상품 쇼핑하기',
    ].map((menu, i, array) => {
      if (i === array.length - 1) {
        return new TextComponent(menu, '', '', 'var(--weight-bold)');
      }
      return new TextComponent(menu, '', '', '');
    });
    sideBarHamburgerEl.attachTo(this.element);
    menuEls.forEach((menuEl) => menuEl.attachTo(this.element, 'beforeend'));
    console.log(this.element.lastElementChild);
    (this.element.lastElementChild! as HTMLElement).style.marginLeft = 'auto';
    // const leftEl = new BaseComponent(`<div class='navbar-sub__left'></div>`);
    // const rightEl = new BaseComponent(`<div class='navbar-sub__right'></div>`);
  }
}
