import { Navigation } from "./layout/navigation.js";
import { Sidebar } from "./layout/sidebar.js";
import { Carousel } from "./layout/carousel.js";

const main = () => {
  const navigation = new Navigation({ delayTime: 1000 });
  navigation.init();

  const sidebar = new Sidebar();
  sidebar.init();

  const carousel = new Carousel();
  carousel.init();
};

main();
