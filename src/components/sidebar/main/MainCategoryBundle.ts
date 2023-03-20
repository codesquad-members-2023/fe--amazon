import { BaseComponent } from '../../Base';
import { menus } from '../../../data/menu';
import { CategoryComponent } from '../CategoryComponent';
import { TextComponent } from '../../basic/TextComponent';
import { MainCategoryBundleStyle } from '../../../../style/components/sidebar/main/MainCategoryBundle.css';
import { SymbolTextComponent } from '../../navbar/SymbolTextComponent';
export class MainCategoryBundle extends BaseComponent<HTMLElement> {
  constructor(menuNumber: number, allShow: boolean = false) {
    super(`<section class='${MainCategoryBundleStyle}'></section>`);
    const addCategories = () => {
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
        allShow.element.addEventListener('click', () => {
          // 자식 노드 갯수가 메뉴 데이터의 카테고리 갯수를 넘어가면 아래 더 추가 안되게
          if (this.element.childElementCount > menu.categories.length) return;

          menu.categories.forEach((category, i) => {
            if (i < 4) return;
            const categoryComponent = new CategoryComponent(category.name);
            categoryComponent.attachTo(this.element, 'beforeend');
          });

          const simpleShowEl = new CategoryComponent(
            '간단히 보기',
            'main',
            'assets/left-sidebar/chevron-up.svg',
          );
          simpleShowEl.element.style.justifyContent = 'flex-start';
          simpleShowEl.element.style.gap = '1rem';
          simpleShowEl.element.addEventListener('click', () => {
            // 일단 간단히 보기 누르면 현재 태그의 내부를 초기화하고 다시 함수를 재귀호출하는 것으로 구현
            // 이 부분은 추후에 고쳐야할듯...!
            this.element.innerHTML = '';
            addCategories();
          });
          simpleShowEl.attachTo(this.element, 'beforeend');
        });
        allShow.attachTo(this.element, 'beforeend');
      }
    };
    addCategories();
  }
}
