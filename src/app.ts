import { NavBarMainComponent } from './components/navbar/main/NavBarMainComponent';
import { NavBarSubComponent } from './components/navbar/sub/NavBarSubComponent';
import $ from './utils/$';
import { SideBarComponent } from './components/sidebar/SideBarComponent';
import { DimLayerComponent } from './components/layer/DimLayerComponent';
import { Header } from './Header';

class App {
  constructor(appRoot: HTMLElement) {
    // const navBarMain = new NavBarMainComponent();
    // const navBarSub = new NavBarSubComponent();
    // const sideBar = new SideBarComponent();
    // const dimLayer = new DimLayerComponent();
    // dimLayer.attachTo(document.querySelector('#app')! as HTMLElement);
    // dimLayer.element.addEventListener('click', () => {
    //   sideBar.element.style.transform = 'translateX(-20rem)';
    //   dimLayer.off();
    // });
    // navBarSub.element.firstElementChild!.addEventListener('click', () => {
    //   sideBar.element.style.transform = 'translateX(20rem)';
    //   dimLayer.on();
    // });
    // navBarMain.attachTo(appRoot);
    // navBarSub.attachTo(appRoot, 'beforeend');
    // sideBar.attachTo(appRoot, 'beforeend');
    const header = new Header();
    header.attachTo(appRoot);
  }
}

new App($('#app')! as HTMLElement);
