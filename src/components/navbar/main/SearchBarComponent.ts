import { BaseComponent } from '../../../Base';
import {
  SearchBarComponentStyle,
  SearchBarInputComponentStyle,
  SearchBarButtonComponentStyle,
} from '../../../../style/components/navbar/main/SearchBarComponent.css';
import { SymbolComponent } from '../../basic/SymbolComponent';

export class SearchBarComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${SearchBarComponentStyle}'>
                      <input type='search' class='${SearchBarInputComponentStyle}' placeholder='검색 Amazon'>
                      <button class='${SearchBarButtonComponentStyle}'></button>
                    </section>`);
    const symbol = new SymbolComponent(
      'assets/nav-bar/search.svg',
      'transparent',
    );
    symbol.attachTo(this.element.querySelector('button')! as HTMLElement);
  }
}
