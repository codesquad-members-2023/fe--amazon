import { BaseComponent } from '../../Base';
import { SymbolComponent } from '../../basic/SymbolComponent';
import { SideBarMainComponentStyle } from '../../../../style/components/sidebar/main/SideBarMainComponent.css';

export class SideBarMainComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${SideBarMainComponentStyle}'></section>`);
  }
}
