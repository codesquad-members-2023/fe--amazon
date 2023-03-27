import { BaseComponent } from '../Base';
import { CategoryComponentStyle } from '../../../style/components/sidebar/CategoryComponent.css';
import { SymbolComponent } from '../basic/SymbolComponent';
import { TextComponent } from '../basic/TextComponent';

export class CategoryComponent extends BaseComponent<HTMLElement> {
  constructor(
    categoryTitle: string,
    type: 'main' | 'sub' = 'main',
    path: string = 'assets/left-sidebar/chevron-right.svg',
  ) {
    super(`<li class='${CategoryComponentStyle}'></li>`);
    if (type === 'main') {
      const chevronRightComponent = new SymbolComponent(path);
      chevronRightComponent.attachTo(this.element);
    }
    const titleComponent = new TextComponent(
      categoryTitle,
      'var(--color-black)',
    );
    titleComponent.attachTo(this.element);
  }
}
