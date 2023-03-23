import { sideBarEventHandler } from './sideBar.js';
import { navBarEventHandler } from './nav.js';
import { Carousel } from './carousel.js';
import { insertLoginDetailData } from './loginDetail.js';

const main = () => {
  const CAROUSELCOUNT = 6;
  sideBarEventHandler();
  navBarEventHandler();
  new Carousel(CAROUSELCOUNT).init();
  insertLoginDetailData();
}

main();