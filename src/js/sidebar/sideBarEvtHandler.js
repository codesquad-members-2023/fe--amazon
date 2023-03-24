import { SIDEBAR_DATA } from "./sideBarData.js";
import { SubMenu } from "./sideBarSubMenu.js";
import { findUpWard, findSiblingForward, getSubSideBar, isSubSideBarExist } from "../nodeFindFuncs.js";

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
    if(findUpWard(target, '.sidebar__contents__btn.showall')) unfoldMenu(target);
    if(findUpWard(target, '.sidebar__contents__btn.closeall')) foldMenu(target);
    if(findUpWard(target, '.sidebar__contents')) openSubMenu(target);
    if(findUpWard(target, '.sidebar__contents__btn.close-right-menu')) closeSubMenu(target);
  })
}

const closeSideBar = (currentTarget, dimLayer) => {
  currentTarget.style['animation-name'] = 'slideLeftWard';
  dimLayer.classList.remove('dim__sidebar');
}

const unfoldMenu = (target) => {
  const categoryNode = findUpWard(target,'.sidebar__category');
  findSiblingForward(categoryNode, 'sidebar__category extra').style.height = '100%';
}

const foldMenu = (target) => findUpWard(target,'.sidebar__category.extra').style.height = '0';

const openSubMenu = (target) => {
  const categoryId = findUpWard(target, '.sidebar__category').dataset.categoryId;
  // contentsId 삭제하고, subMenu Title 가져오는 로직 구현 필요
  const contentsId = findUpWard(target, '.sidebar__contents').dataset.contentsId;
  const subMenu = new SubMenu(SIDEBAR_DATA, categoryId, contentsId).makeLayer();
  const sideBarMenuChilds = findUpWard(target, '.sidebar__container').lastElementChild.childNodes;

  if(isSubSideBarExist(sideBarMenuChilds, contentsId)){
    getSubSideBar(target, contentsId).style['animation-name'] = 'slideSubMenuLeftWard';
    findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard'
  } else {
    findUpWard(target, '.sidebar__menu.main').insertAdjacentHTML('afterend', subMenu);
    getSubSideBar(target, contentsId).style['animation-name'] = 'slideSubMenuLeftWard';
    findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard';
  };
}

const closeSubMenu = (target) => {
  findUpWard(target, '.sidebar__menu.sub').style['animation-name'] = 'slideSubMenuRightWard';
  findUpWard(target, '#sidebarmenu').firstElementChild.style['animation-name'] = 'slideMenuRightWard';
}