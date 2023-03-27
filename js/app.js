import { onSideBar } from './view/sidebar.js';
import { onNavBar } from './view/nav.js';
import { Carousel } from './view/carousel.js';
import { SIDEBAR_DATA } from './data/sidebarData.js';
import { LOGIN_DATA } from './data/loginDetailData.js';

const app = () => {
  onSideBar(SIDEBAR_DATA);
  onNavBar(LOGIN_DATA);
  new Carousel({
    numberOfImages : 6,
    delayTime : 10000,
    path : '/asset/images/carousel',
  }).init();
}

app();