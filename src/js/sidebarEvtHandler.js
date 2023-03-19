import { makeSubSideBar } from "./subSideBar.js";
import { SUB_SIDEBAR_DATA } from "./subSideBarData.js";
import { findUpWard, findSiblingForward, getSubSideBar, isSubSideBarExist } from "./nodeFindFuncs.js";

export const sideBarEvtHandler = () => {
  const sideBarLayer = document.querySelector(".sidebar__layer");
  const dimLayer = document.querySelector(".dim__layer");

  sideBarOpenBtnEvtHandler(sideBarLayer, dimLayer);
  addsideBarClickEvt(sideBarLayer, dimLayer);
}

const sideBarOpenBtnEvtHandler = (sideBarLayer, dimLayer) => {
  const sideBarOpenBtn = document.querySelector(".nav-bottom__category.select-all");
  sideBarOpenBtn.addEventListener('click', () => {
    sideBarLayer.style['animation-name'] = 'slideRightWard';
    dimLayer.style.display = 'block';
    dimLayer.style['z-index'] = '2';
  });
}

const addsideBarClickEvt = (sideBarLayer, dimLayer) => {
  sideBarLayer.addEventListener('click', ({ target, currentTarget }) => {
    const [parent, element, name] = target.className.split(" ");
    
    closeSideBar(parent, currentTarget, dimLayer);
    unfoldMenu(name, target);
    foldMenu(name, target);
    openSubMenu(parent, element, target);
    closeSubMenu(name, target)
  })
}

const closeSideBar = (parent, currentTarget, dimLayer) => {
  if(parent === "sidebar__closeBtn--container") { 
    currentTarget.style['animation-name'] = 'slideLeftWard';
    dimLayer.style.display = 'none';
    dimLayer.style['z-index'] = '1';
  }
}

const unfoldMenu = (name, target) => {
  if(name === 'showall') {
    const sidebarShoppingNode = findUpWard(target,'.sidebar__shopping');
    findSiblingForward(sidebarShoppingNode, 'sidebar__shopping extra').style.height = '100%';
  }
}

const foldMenu = (name, target) => {
  if(name === 'closeall') findUpWard(target,'.sidebar__shopping.extra').style.height = '0';
}

const openSubMenu = (parent, element, target) => {
  if(parent != 'sidebar__menu' && element != 'btn'){
    const subSideBarData = Object.entries(SUB_SIDEBAR_DATA);
    const list = target.closest('.sidebar__contents');
    const listId = list.dataset.indexNumber;
    const newRightSideBar = makeSubSideBar(subSideBarData[listId], listId);
    const sideBarMenuChilds = target.closest('.sidebar__container').lastElementChild.childNodes;

    // 해당 인덱스의 서브 사이드바가 이미 존재한다면
    if(isSubSideBarExist(sideBarMenuChilds, listId)){
      getSubSideBar(target ,listId).style['animation-name'] = 'slideSubMenuLeftWard';
      findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard'
    } else {      // 해당 인덱스의 서브 사이드바가 존재하지 않으면
      findUpWard(target, '.sidebar__menu.main').insertAdjacentHTML('afterend', newRightSideBar);
      getSubSideBar(target, listId).style['animation-name'] = 'slideSubMenuLeftWard';
      findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard';
    }
  };
}

const closeSubMenu = (name, target) => {
  if(name === 'close-right-menu') {
    findUpWard(target, '.sidebar__menu.right').style['animation-name'] = 'slideSubMenuRightWard';
    findUpWard(target, '#sidebarmenu').firstElementChild.style['animation-name'] = 'slideMenuRightWard';
  }
}