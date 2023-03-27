import { BaseComponent } from './components/Base';
import { NavBarMainComponent } from './components/navbar/main/NavBarMainComponent';
import { NavBarSubComponent } from './components/navbar/sub/NavBarSubComponent';
import { SideBarComponent } from './components/sidebar/SideBarComponent';
import { DimLayerComponent } from './components/layer/DimLayerComponent';

export class Header extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<header></header>`);

    const navBarMainComponent = new NavBarMainComponent();
    const navBarSubComponent = new NavBarSubComponent();
    const sideBarComponent = new SideBarComponent();
    const dimLayerComponent = new DimLayerComponent();
    dimLayerComponent.attachTo(document.querySelector('#app')! as HTMLElement);
    dimLayerComponent.element.addEventListener('click', () => {
      sideBarComponent.setStyles({ transform: 'translateX(-20rem)' });
      dimLayerComponent.off();
    });
    navBarSubComponent.element.firstElementChild!.addEventListener(
      'click',
      () => {
        sideBarComponent.setStyles({ transform: 'translateX(20rem)' });
        dimLayerComponent.on();
      },
    );
    navBarMainComponent.attachTo(this.element);
    navBarSubComponent.attachTo(this.element, 'beforeend');
    sideBarComponent.attachTo(this.element, 'beforeend');
  }
}
