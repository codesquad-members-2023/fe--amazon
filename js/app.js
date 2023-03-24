import { onSideBar } from './view/sidebar.js';
import { onNavBar } from './view/nav.js';
import { Carousel } from './view/carousel.js';
import { SIDEBAR_DATA } from './data/sidebarData.js';
import { LOGIN_DATA } from './data/loginDetailData.js';

const app = () => {
  const CAROUSEL_COUNT = 6;
  onSideBar(SIDEBAR_DATA);
  onNavBar(LOGIN_DATA);
  new Carousel(CAROUSEL_COUNT).init();
}

app();