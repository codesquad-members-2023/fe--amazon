import { BaseComponent } from '../Base';
import { SideBarComponentStyle } from '../../../style/components/sidebar/SideBarComponent.css';
import { SymbolTextComponent } from '../navbar/SymbolTextComponent';

export class SideBarComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${SideBarComponentStyle}'></section>`);

    const titleUser = new SymbolTextComponent(
      'assets/left-sidebar/user.svg',
      '안녕하세요, 로그인',
    );
    titleUser.element.style.backgroundColor = 'var(--color-black)';
    titleUser.element.style.width = '100%';
    titleUser.element.style.height = '3.25rem';
    titleUser.attachTo(this.element);
  }
}
