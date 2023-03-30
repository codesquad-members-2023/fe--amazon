import { BaseComponent } from '../../Base';
import {
  SearchBarComponentStyle,
  SearchBarInputComponentStyle,
  SearchBarButtonComponentStyle,
} from '../../../../style/components/navbar/main/SearchBarComponent.css';
import { SymbolComponent } from '../../basic/SymbolComponent';
import { SearchListComponent } from './SearchListComponent';
import { debounce } from '../../../utils/debounce';
import { DimLayerComponent } from '../../layer/DimLayerComponent';

import { ProductData } from '../../../type';

export class SearchBarComponent extends BaseComponent<HTMLElement> {
  searchListComponent;
  constructor() {
    super(`<form class='${SearchBarComponentStyle}'>
                      <input type='search' class='${SearchBarInputComponentStyle}' placeholder='검색 Amazon'>
                      <button class='${SearchBarButtonComponentStyle}' ></button>
                    </form>`);
    const symbol = new SymbolComponent(
      'assets/nav-bar/search.svg',
      'transparent',
    );
    symbol.attachTo(this.element.querySelector('button')! as HTMLElement);

    this.searchListComponent = new SearchListComponent();
    this.searchListComponent.attachTo(this.element);

    this.element.querySelector('input')!.addEventListener(
      'keyup',
      debounce((e) => {
        this.searchListComponent.deleteAllChild();
        const searchingWord = (e.target as HTMLInputElement).value;

        fetch(`http://localhost:1116/search?q=${searchingWord}`)
          .then((res) => res.json())
          .then((data) => {
            data.slice(0, 10).forEach((d: ProductData) => {
              this.searchListComponent.addChildHtml(`<li>${d.keywords}</li>`);
            });
          });
      }, 300),
    );

    const dimLayer = new DimLayerComponent();
    dimLayer.attachTo(document.querySelector('#app') as HTMLElement);
    dimLayer.setEventListener('click', () => {
      dimLayer.off();
      this.searchListComponent.hide();
    });

    this.setEventListener(
      'click',
      debounce(() => {
        this.searchListComponent.deleteAllChild();
        if (this.searchListComponent.element.style.display !== 'flex') {
          this.searchListComponent.show();
          dimLayer.on();
        }

        fetch('http://localhost:1116/search?q=')
          .then((res) => res.json())
          .then((data) =>
            data.slice(0, 10).forEach((d: ProductData) => {
              this.searchListComponent.addChildHtml(`<li>${d.keywords}</li>`);
            }),
          );
      }, 300),
    );
  }
}
