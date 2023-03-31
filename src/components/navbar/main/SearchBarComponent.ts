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
import { FlexContainerComponent } from '../../container/FlexContainerComponent';

export class SearchBarComponent extends BaseComponent<HTMLElement> {
  searchListComponent;
  recommendListComponent;
  historyListComponent;
  constructor() {
    super(`<form class='${SearchBarComponentStyle}'>
                      <input type='search' class='${SearchBarInputComponentStyle}' placeholder='검색 Amazon'>
                      <button class='${SearchBarButtonComponentStyle}'></button>
                    </form>`);

    const symbol = new SymbolComponent(
      'assets/nav-bar/search.svg',
      'transparent',
    );
    symbol.attachTo(this.element.querySelector('button')! as HTMLElement);

    const searchItemContainer = new FlexContainerComponent(
      'column',
      'flex-start',
      'flex-start',
      '0',
    );
    searchItemContainer.setStyles({
      position: 'absolute',
      display: 'relative',
      top: '2rem',
    });

    searchItemContainer.attachTo(this.element);
    this.searchListComponent = new SearchListComponent();
    this.searchListComponent.attachTo(searchItemContainer.element, 'beforeend');
    this.recommendListComponent = new SearchListComponent();
    this.recommendListComponent.attachTo(
      searchItemContainer.element,
      'beforeend',
    );
    this.historyListComponent = new SearchListComponent();
    this.historyListComponent.attachTo(searchItemContainer.element);
    this.element.querySelector('input')!.addEventListener(
      'input',
      debounce((e) => {
        this.searchListComponent.deleteAllChild();
        const searchingWord = (e.target as HTMLInputElement).value;
        if ((e.target as HTMLInputElement).value === '') return;
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
      this.recommendListComponent.hide();
      this.historyListComponent.hide();
    });

    this.setEventListener(
      'click',
      debounce(() => {
        this.recommendListComponent.deleteAllChild();
        if (this.recommendListComponent.element.style.display !== 'flex') {
          this.searchListComponent.show();
          this.recommendListComponent.show();
          this.historyListComponent.show();
          dimLayer.on();
        }

        if (this.recommendListComponent.element.childNodes.length >= 10) return;
        fetch('http://localhost:1116/recommend')
          .then((res) => res.json())
          .then((data) =>
            data.slice(0, 10).forEach((d: ProductData) => {
              this.recommendListComponent.addChildHtml(
                `<li><img alt='' src='/assets/nav-bar/search-suggestion.svg' />${d.keywords}</li>`,
              );
            }),
          );
      }, 300),
    );
    let histories: string[] = [];
    this.setEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter') {
        e.preventDefault();
        histories.push((e.target as HTMLInputElement).value);
        localStorage.setItem('search-history', JSON.stringify(histories));
        this.historyListComponent.element.innerHTML = '';
        const localHistories = JSON.parse(
          localStorage.getItem('search-history')!,
        );
        if (localHistories.length < 10) {
          localHistories.forEach((product: string) => {
            const liEl = document.createElement('li');
            liEl.style.color = 'rebeccapurple';
            liEl.innerText = product;
            this.historyListComponent.element.insertAdjacentElement(
              'afterbegin',
              liEl,
            );
          });
        } else {
          histories = [];
          localStorage.setItem('search-history', JSON.stringify(histories));
        }
      }
    });
  }
}
