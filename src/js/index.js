import SideBar from './sideBar.js';
import Header from './header.js';
import Slide from './slide.js';

const main = () => {
  const header = new Header();
  const sideBar = new SideBar();
  const slide = new Slide();

  header.addEvents();
  sideBar.addEvents();
  slide.addEvents();
};

main();
