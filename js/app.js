import { onSideBar } from './components/sidebar.js';
import { onNavBar } from './components/nav.js';
import { Carousel } from './components/carousel.js';
import { SearchBar } from './components/searchbar.js';
import { SIDEBAR_DATA } from '../data/sidebarData.js';
import { LOGIN_DATA } from '../data/loginDetailData.js';

const app = () => {
  onSideBar(SIDEBAR_DATA);
  onNavBar(LOGIN_DATA);
  new Carousel({
    numberOfImages : 6,
    delayTime : 10000,
    carouselImagesPath : '/asset/images/carousel',
  }).init();
  new SearchBar('http://localhost:3001/recommend').init();
}

app();