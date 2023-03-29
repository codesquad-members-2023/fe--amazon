import { headerEventMainHandler } from './header.js';
import { sidebarEventMainHandler } from './sidebar.js';
import CarouselMaker from './carousel.js';

const main = () => {
  headerEventMainHandler();
  sidebarEventMainHandler();
  const carouselCount = 5;
  const carousel = new CarouselMaker(carouselCount);
};

main();
