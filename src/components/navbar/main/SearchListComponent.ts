import { BaseComponent } from '../../Base';
import { SearchListComponentStyle } from '../../../../style/components/navbar/main/SearchListComponent.css';

export class SearchListComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<ul class='${SearchListComponentStyle}'>
                      <li>테스트1</li>
                      <li>테스트2</li>
                      <li>테스트3</li>
                      <li>테스트4</li>
                      <li>테스트5</li>
                      <li>테스트6</li>
                      <li>테스트7</li>
                      <li>테스트8</li>
                      <li>테스트9</li>
                      <li>테스트10</li>
                    </ul>`);
  }

  hide() {
    this.setStyles({ display: 'none' });
  }

  show() {
    this.setStyles({ display: 'flex' });
  }
}
