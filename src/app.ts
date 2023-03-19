import { NavBarMainComponent } from './components/navbar/main/NavBarMainComponent';
import { NavBarSubComponent } from './components/navbar/sub/NavBarSubComponent';
import $ from './utils/$';
import { SideBarComponent } from './components/sidebar/SideBarComponent';

class App {
  constructor(appRoot: HTMLElement) {
    const navBarMain = new NavBarMainComponent();
    navBarMain.attachTo(appRoot);
    const navBarSub = new NavBarSubComponent();
    navBarSub.attachTo(appRoot, 'beforeend');
    const sideBar = new SideBarComponent();
    sideBar.attachTo(appRoot, 'beforeend');
  }
}

new App($('#app')! as HTMLElement);
