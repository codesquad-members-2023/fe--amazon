import { BaseComponent } from './components/Base';
import { NavBarMainComponent } from './components/navbar/main/NavBarMainComponent';
import { NavBarSubComponent } from './components/navbar/sub/NavBarSubComponent';
import { SideBarComponent } from './components/sidebar/SideBarComponent';
import { DimLayerComponent } from './components/layer/DimLayerComponent';

export class Header extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<header></header>`);

    const navBarMain = new NavBarMainComponent();
    const navBarSub = new NavBarSubComponent();
    const sideBar = new SideBarComponent();
    const dimLayer = new DimLayerComponent();
    dimLayer.attachTo(document.querySelector('#app')! as HTMLElement);
    dimLayer.element.addEventListener('click', () => {
      sideBar.element.style.transform = 'translateX(-20rem)';
      dimLayer.off();
    });
    navBarSub.element.firstElementChild!.addEventListener('click', () => {
      sideBar.element.style.transform = 'translateX(20rem)';
      dimLayer.on();
    });
    navBarMain.attachTo(this.element);
    navBarSub.attachTo(this.element, 'beforeend');
    sideBar.attachTo(this.element, 'beforeend');
  }
}
