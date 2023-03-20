import { BaseComponent } from '../../Base';
import { menus } from '../../../data/menu';
import { CategoryComponent } from '../CategoryComponent';
import { TextComponent } from '../../basic/TextComponent';
import { MainCategoryBundleStyle } from '../../../../style/components/sidebar/main/MainCategoryBundle.css';
export class MainCategoryBundle extends BaseComponent<HTMLElement> {
  constructor(menuNumber: number) {
    super(`<section class='${MainCategoryBundleStyle}'></section>`);
    const menu = menus[menuNumber]!;
    const bundleTitle = new TextComponent(
      menu.title,
      'var(--color-black)',
      'var(--font-lg)',
      'var(--weight-bold)',
    );
    bundleTitle.attachTo(this.element);

    menu.categories.forEach((category) => {
      const categoryComponent = new CategoryComponent(category.name);
      categoryComponent.attachTo(this.element, 'beforeend');
    });
  }
}
