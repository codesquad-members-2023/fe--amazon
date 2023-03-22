import { navEvtHandler } from "./navEvtHandler.js"
import { sideBarEvtHandler } from "./sidebar/sideBarEvtHandler.js";
import { SIDEBAR_DATA } from "./sidebar/sideBarData.js";
import { sideBar } from "./sidebar/sideBar.js";

function init(){
  (function (delay) {
    const loginModal1 = document.querySelector(".modal__login");
    setTimeout(() => loginModal1.style.display = 'block', delay)
  })(1000);

  new sideBar(SIDEBAR_DATA).init();
  navEvtHandler();
  sideBarEvtHandler();
}

init();