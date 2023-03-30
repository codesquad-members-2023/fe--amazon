import { BaseComponent } from '../../Base';
import { SearchListComponentStyle } from '../../../../style/components/navbar/main/SearchListComponent.css';

export class SearchListComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<ul class='${SearchListComponentStyle}'>
                      
                    </ul>`);
  }

  hide() {
    this.setStyles({ display: 'none' });
  }

  show() {
    this.setStyles({ display: 'flex' });
  }
}
