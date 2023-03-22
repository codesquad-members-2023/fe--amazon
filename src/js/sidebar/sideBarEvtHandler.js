import { SIDEBAR_DATA } from "./sideBarData.js";
import { makeSubSideBar } from "./sideBarSub.js";
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
    if(findUpWard(target, '.sidebar__contents__btn')) closeSubMenu(target);
  })
}

const closeSideBar = (currentTarget, dimLayer) => {
  currentTarget.style['animation-name'] = 'slideLeftWard';
  dimLayer.classList.remove('dim__sidebar');
}

const unfoldMenu = (target) => {
  const categoryNode = findUpWard(target,'.sidebar__category');
  console.log(categoryNode);
  findSiblingForward(categoryNode, 'sidebar__category extra').style.height = '100%';
}

const foldMenu = (target) => findUpWard(target,'.sidebar__category.extra').style.height = '0';

const openSubMenu = (target) => {
  const categoryId = findUpWard(target, '.sidebar__category').dataset.categoryId;
  const contentsId = findUpWard(target, '.sidebar__contents').dataset.contentsId;
  const newSubSideBar = makeSubSideBar(SIDEBAR_DATA, categoryId, contentsId);
  const sideBarMenuChilds = findUpWard(target, '.sidebar__container').lastElementChild.childNodes;

  // 해당 인덱스의 서브 사이드바가 이미 존재한다면
  if(isSubSideBarExist(sideBarMenuChilds, contentsId)){
    getSubSideBar(target, contentsId).style['animation-name'] = 'slideSubMenuLeftWard';
    findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard'
  } else {      // 해당 인덱스의 서브 사이드바가 존재하지 않으면
    findUpWard(target, '.sidebar__menu.main').insertAdjacentHTML('afterend', newSubSideBar);
    getSubSideBar(target, contentsId).style['animation-name'] = 'slideSubMenuLeftWard';
    findUpWard(target, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard';
  };
}

const closeSubMenu = (target) => {
  findUpWard(target, '.sidebar__menu.sub').style['animation-name'] = 'slideSubMenuRightWard';
  findUpWard(target, '#sidebarmenu').firstElementChild.style['animation-name'] = 'slideMenuRightWard';
}