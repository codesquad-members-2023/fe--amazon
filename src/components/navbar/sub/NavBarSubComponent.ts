import { BaseComponent } from '../../Base';
import { TextComponent } from '../../basic/TextComponent';
import { SymbolTextComponent } from '../SymbolTextComponent';
import { NavBarSubComponentStyle } from '../../../../style/components/navbar/sub/NavBarSubComponent.css';

export class NavBarSubComponent extends BaseComponent<HTMLElement> {
  private data = [
    '오늘의 딜',
    '고객 서비스',
    '레지스트리',
    '기프트 카드',
    '판매',
    '지금 특가 상품 쇼핑하기',
  ];

  constructor() {
    super(`<section class='${NavBarSubComponentStyle}'></section>`);

    const sideBarHamburgerComponent = new SymbolTextComponent(
      'assets/nav-bar/menu.svg',
      '모두',
    );

    const subCategoryComponents = this.data.map((menu, i, array) => {
      if (i === array.length - 1) {
        return new TextComponent(menu, '', '', 'var(--weight-bold)');
      }
      return new TextComponent(menu, '', '', '');
    });

    sideBarHamburgerComponent.attachTo(this.element);
    subCategoryComponents.forEach((component) =>
      component.attachTo(this.element, 'beforeend'),
    );
    (this.element.lastElementChild! as HTMLElement).style.marginLeft = 'auto';
  }
}
