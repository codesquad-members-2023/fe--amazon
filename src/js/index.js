import SideBar from './sideBar.js';
import Header from './header.js';

const main = () => {
  const header = new Header();
  const sideBar = new SideBar();

  header.addEvents();
  sideBar.addEvents();
};

main();
