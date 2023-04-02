import { Sidebar } from "../sidebar/sidebar.js";
import { SidebarInputData } from "../sidebar/sidebarInputData.js";
import { Carousel } from "../carousel/carousel.js";
const main = () => {
  new Sidebar().init();
  new SidebarInputData().init();
  new Carousel().init();
};

main();
