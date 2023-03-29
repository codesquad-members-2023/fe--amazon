import { navEvtHandler } from "./navEvtHandler.js"
import { SIDEBAR_DATA } from "./sidebar/sideBarData.js";
import { SideBar } from "./sidebar/sideBar.js";
import { Carousel } from "./carousel/carousel.js";
import { CAROUSEL_DATA } from "./carousel/carouselData.js";

function init(){
  (function (delay) {
    const loginModal = document.querySelector(".modal__login");
    setTimeout(() => loginModal.style.display = 'block', delay)
  })(1000);

  const sidebar = new SideBar(SIDEBAR_DATA);
  sidebar.init();
  
  const carousel = new Carousel(CAROUSEL_DATA);
  carousel.init();
  
  navEvtHandler();
}

init();