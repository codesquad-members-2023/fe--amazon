import $ from './utils/$';
import { Header } from './Header';
import { Main } from './Main';

class App {
  constructor(appRoot: HTMLElement) {
    const header = new Header();
    const main = new Main();
    header.attachTo(appRoot, 'beforeend');
    main.attachTo(appRoot, 'beforeend');
  }
}

new App($('#app')! as HTMLElement);
