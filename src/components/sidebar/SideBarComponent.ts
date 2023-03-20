import { BaseComponent } from '../Base';
import { SideBarComponentStyle } from '../../../style/components/sidebar/SideBarComponent.css';
import { SymbolTextComponent } from '../navbar/SymbolTextComponent';
import { CategoryComponent } from './CategoryComponent';
import { menus } from '../../data/menu';
import { MainCategoryBundle } from './main/MainCategoryBundle';

export class SideBarComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${SideBarComponentStyle}'></section>`);

    const titleUser = new SymbolTextComponent(
      'assets/left-sidebar/user.svg',
      '안녕하세요, 로그인',
    );
    titleUser.element.style.backgroundColor = 'var(--color-black)';
    titleUser.element.style.width = '100%';
    titleUser.element.style.minHeight = '3.25rem';

    titleUser.attachTo(this.element);
    menus.forEach((_, i) => {
      const mainCategoryBundle = new MainCategoryBundle(i);
      mainCategoryBundle.attachTo(this.element, 'beforeend');
    });
  }
}
