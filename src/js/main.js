import { navEvtHandler } from "./navEvtHandler.js";
import { nodeFindFuncs } from "./nodeFindFuncs.js";
import { sideBarEvtHandler, sideBarOpenBtnEvtHandler } from "./sidebarEvtHandler.js";

(function init(){
  (function (delay) {
    const loginModal1 = document.querySelector(".modal__login1");
    setTimeout(() => loginModal1.style.display = 'block', delay)
  })(1000);

  const {findUpWard, findSiblingForward, getSubSideBar, isSubSideBarExist} = nodeFindFuncs();
  const dimLayer = document.querySelector(".dim__layer");
  const sideBarLayer = document.querySelector(".sidebar__layer");

  navEvtHandler(dimLayer, findUpWard, findSiblingForward);
  sideBarOpenBtnEvtHandler(sideBarLayer, dimLayer)
  sideBarEvtHandler(sideBarLayer, dimLayer, findUpWard, findSiblingForward, getSubSideBar, isSubSideBarExist)
})()