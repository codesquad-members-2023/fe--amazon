import { BaseComponent } from '../../Base';
import { CategoryComponent } from '../CategoryComponent';
import { TextComponent } from '../../basic/TextComponent';
import { SubCategoryBundleStyle } from '../../../../style/components/sidebar/sub/SubCategogryBundle.css';
import { SymbolTextComponent } from '../../navbar/SymbolTextComponent';

export class SubCategoryBundle extends BaseComponent<HTMLElement> {
  constructor(title: string, subMenu: string[]) {
    super(`<section class='${SubCategoryBundleStyle}'></section>`);
    const backMainMenu = new SymbolTextComponent(
      'assets/left-sidebar/arrow-left.svg',
      '주메뉴',
      'var(--color-black)',
    );
    backMainMenu.element.addEventListener('click', () => {
      this.element.style.display = 'none';
    });
    const bundleTitle = new TextComponent(
      title,
      'var(--color-black)',
      'var(--font-lg)',
      'var(--weight-bold)',
    );
    backMainMenu.attachTo(this.element, 'beforeend');
    bundleTitle.attachTo(this.element, 'beforeend');
    subMenu.forEach((menu) => {
      const subCategory = new CategoryComponent(menu, 'sub');
      subCategory.attachTo(this.element, 'beforeend');
    });
  }
}
