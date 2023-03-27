import { BaseComponent } from '../Base';
import { SideBarComponentStyle } from '../../../style/components/sidebar/SideBarComponent.css';
import { SymbolTextComponent } from '../navbar/SymbolTextComponent';
import { CategoryComponent } from './CategoryComponent';
import { menus } from '../../data/menu';
import { MainCategoryBundle } from './main/MainCategoryBundle';

export class SideBarComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${SideBarComponentStyle}'></section>`);

    const titleUserComponent = new SymbolTextComponent(
      'assets/left-sidebar/user.svg',
      '안녕하세요, 로그인',
    );
    titleUserComponent.setStyles({
      backgroundColor: 'var(--color-black)',
      width: '100%',
      minHeight: '3.25rem',
    });

    titleUserComponent.attachTo(this.element);

    menus.forEach((_, i, array) => {
      const mainCategoryBundleComponent = new MainCategoryBundle(
        i,
        array.length - 1 === i,
      );
      mainCategoryBundleComponent.attachTo(this.element, 'beforeend');
    });
  }
}
