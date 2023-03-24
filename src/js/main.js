import { navEvtHandler } from "./navEvtHandler.js"
import { sideBarEvtHandler } from "./sidebar/sideBarEvtHandler.js";
import { SIDEBAR_DATA } from "./sidebar/sideBarData.js";
import { SideBar } from "./sidebar/sideBar.js";
import { Carousel } from "./carousel/carousel.js";

function init(){
  (function (delay) {
    const loginModal1 = document.querySelector(".modal__login");
    setTimeout(() => loginModal1.style.display = 'block', delay)
  })(1000);

  const sidebar = new SideBar(SIDEBAR_DATA);
  sidebar.init();
  navEvtHandler();
  sideBarEvtHandler();

  const carousel = new Carousel();
  carousel.init();
}

init();