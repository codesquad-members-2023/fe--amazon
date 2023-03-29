import $ from './utils/$';
import { Header } from './Header';
import { Main } from './Main';

class App {
  constructor(appRoot: HTMLElement) {
    appRoot.style.overflowX = 'hidden';
    const headerComponent = new Header();
    const mainComponent = new Main();
    headerComponent.attachTo(appRoot, 'beforeend');
    mainComponent.attachTo(appRoot, 'beforeend');
  }
}

new App($('#app')! as HTMLElement);
