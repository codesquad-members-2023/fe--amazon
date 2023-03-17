import { NavBarMainComponent } from './components/navbar/main/NavBarMainComponent';
import { NavBarSubComponent } from './components/navbar/sub/NavBarSubComponent';
import { LoginPopComponent } from './components/navbar/main/LoginPopComponent';

class App {
  constructor(appRoot: HTMLElement) {
    const navBarMain = new NavBarMainComponent();
    navBarMain.attachTo(appRoot);
    const navBarSub = new NavBarSubComponent();
    navBarSub.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('#app')! as HTMLElement);
