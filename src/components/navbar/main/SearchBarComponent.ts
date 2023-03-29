import { BaseComponent } from '../../Base';
import {
  SearchBarComponentStyle,
  SearchBarInputComponentStyle,
  SearchBarButtonComponentStyle,
} from '../../../../style/components/navbar/main/SearchBarComponent.css';
import { SymbolComponent } from '../../basic/SymbolComponent';
import { SearchListComponent } from './SearchListComponent';

export class SearchBarComponent extends BaseComponent<HTMLElement> {
  searchListComponent;
  constructor() {
    super(`<form class='${SearchBarComponentStyle}' action='/' method='GET'>
                      <input type='search' class='${SearchBarInputComponentStyle}' placeholder='검색 Amazon'>
                      <button class='${SearchBarButtonComponentStyle}' type='submit'></button>
                    </form>`);
    const symbol = new SymbolComponent(
      'assets/nav-bar/search.svg',
      'transparent',
    );
    symbol.attachTo(this.element.querySelector('button')! as HTMLElement);
    this.searchListComponent = new SearchListComponent();
    this.searchListComponent.attachTo(this.element);
    this.searchListComponent.addChildHtml('<li>테스트11</li>');
    this.setEventListener('click', () => {
      fetch('http://localhost:1116/search')
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  }
}
