import { sideBarEventHandler } from './sideBar.js';
import { navBarEventHandler } from './nav.js';
import { setCarouselImage } from './carousel.js';
import { insertLoginDetailData } from './loginDetail.js';

const main = () => {
  sideBarEventHandler();
  navBarEventHandler();
  setCarouselImage();
  insertLoginDetailData();
}

main();