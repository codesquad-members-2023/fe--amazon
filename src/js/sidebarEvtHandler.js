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
    dimLayer.classList.add('dim__sidebar');
  });
}

const addsideBarClickEvt = (sideBarLayer, dimLayer) => {
  sideBarLayer.addEventListener('click', ({ target, currentTarget }) => {
    if(findUpWard(target, '.sidebar__closeBtn--container')) closeSideBar(currentTarget, dimLayer, target);
    if(findUpWard(target, '.sidebar__contents.btn.showall')) unfoldMenu(target);
    if(findUpWard(target, '.sidebar__contents.btn.closeall')) foldMenu(target);
    if(findUpWard(target, '.sidebar__contents')) openSubMenu(target);
    if(findUpWard(target, '.sidebar__contents__btn')) closeSubMenu(target);
  })
}

const closeSideBar = (currentTarget, dimLayer) => {
  currentTarget.style['animation-name'] = 'slideLeftWard';
  dimLayer.classList.remove('dim__sidebar');
}

const unfoldMenu = (target) => {
  const sidebarShoppingNode = findUpWard(target,'.sidebar__shopping');
  findSiblingForward(sidebarShoppingNode, 'sidebar__shopping extra').style.height = '100%';
}

const foldMenu = (target) => findUpWard(target,'.sidebar__shopping.extra').style.height = '0';

const openSubMenu = (target) => {
  const subSideBarData = Object.entries(SUB_SIDEBAR_DATA);
  const listId = target.closest('.sidebar__contents').dataset.indexNumber;
  const newSubSideBar = makeSubSideBar(subSideBarData[listId], listId);
  const sideBarMenuChilds = target.closest('.sidebar__container').lastElementChild.childNodes;

  // 해당 인덱스의 서브 사이드바가 이미 존재한다면
  if(isSubSideBarExist(sideBarMenuChilds, listId)){
    getSubSideBar(target, listId).style['animation-name'] = 'slideSubMenuLeftWard';
    findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard'
  } else {      // 해당 인덱스의 서브 사이드바가 존재하지 않으면
    findUpWard(target, '.sidebar__menu.main').insertAdjacentHTML('afterend', newSubSideBar);
    getSubSideBar(target, listId).style['animation-name'] = 'slideSubMenuLeftWard';
    findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard';
  };
}

const closeSubMenu = (target) => {
  findUpWard(target, '.sidebar__menu.right').style['animation-name'] = 'slideSubMenuRightWard';
  findUpWard(target, '#sidebarmenu').firstElementChild.style['animation-name'] = 'slideMenuRightWard';
}