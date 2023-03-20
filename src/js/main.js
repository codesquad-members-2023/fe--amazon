import { navEvtHandler } from "./navEvtHandler.js"
import { sideBarEvtHandler } from "./sideBarEvtHandler.js";

function init(){
  (function (delay) {
    const loginModal1 = document.querySelector(".modal__login");
    setTimeout(() => loginModal1.style.display = 'block', delay)
  })(1000);

  navEvtHandler();
  sideBarEvtHandler();
}

init();