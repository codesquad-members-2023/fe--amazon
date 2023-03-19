import { BaseComponent } from '../Base';
import { CategoryComponentStyle } from '../../../style/components/sidebar/CategoryComponent.css';
import { SymbolComponent } from '../basic/SymbolComponent';
import { TextComponent } from '../basic/TextComponent';

export class CategoryComponent extends BaseComponent<HTMLElement> {
  constructor(categoryTitle: string, type: 'main' | 'sub' = 'main') {
    super(`<li class='${CategoryComponentStyle}'></li>`);
    if (type === 'main') {
      const chevronRight = new SymbolComponent(
        'assets/left-sidebar/chevron-right.svg',
      );
      chevronRight.attachTo(this.element);
    }
    const title = new TextComponent(categoryTitle, 'var(--color-black)');
    title.attachTo(this.element);
  }
}
