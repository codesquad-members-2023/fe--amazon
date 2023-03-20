import { BaseComponent } from '../../Base';
import { menus } from '../../../data/menu';
import { CategoryComponent } from '../CategoryComponent';
import { TextComponent } from '../../basic/TextComponent';
import { MainCategoryBundleStyle } from '../../../../style/components/sidebar/main/MainCategoryBundle.css';
import { SymbolTextComponent } from '../../navbar/SymbolTextComponent';
export class MainCategoryBundle extends BaseComponent<HTMLElement> {
  constructor(menuNumber: number, allShow: boolean = false) {
    super(`<section class='${MainCategoryBundleStyle}'></section>`);
    const menu = menus[menuNumber]!;
    const bundleTitle = new TextComponent(
      menu.title,
      'var(--color-black)',
      'var(--font-lg)',
      'var(--weight-bold)',
    );
    bundleTitle.attachTo(this.element);

    menu.categories.forEach((category, i) => {
      if (i > 3) return;
      const categoryComponent = new CategoryComponent(category.name);
      categoryComponent.attachTo(this.element, 'beforeend');
    });
    if (allShow) {
      const allShow = new CategoryComponent(
        '모두 보기',
        'main',
        'assets/left-sidebar/chevron-down.svg',
      );
      allShow.element.style.justifyContent = 'flex-start';
      allShow.element.style.gap = '1rem';

      allShow.attachTo(this.element, 'beforeend');
    }
  }
}
