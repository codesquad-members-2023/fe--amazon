import { SubMenu } from "./sideBarSubMenu.js";
import { findUpWard, findSiblingForward, getSubSideBar, isSubSideBarExist } from "../utils.js";

export class SideBarLayer {
  constructor(responsedData, sideBarLayer, dimLayer){
    this.responsedData = responsedData;
    this.sideBarLayer = sideBarLayer;
    this.dimLayer = dimLayer;
  }

  addClickEvt(){
    this.sideBarLayer.addEventListener('click', ({ target, currentTarget }) => {
      if(findUpWard(target, '.sidebar__closeBtn--container')) this.closeSideBar(currentTarget);
      if(findUpWard(target, '.sidebar__contents__btn.showall')) this.unfoldMenu(target);
      if(findUpWard(target, '.sidebar__contents__btn.closeall')) this.foldMenu(target);
      if(findUpWard(target, '.sidebar__contents')) this.openSubMenu(target);
      if(findUpWard(target, '.sidebar__contents__btn.close-right-menu')) this.closeSubMenu(target);
    })
  }

  closeSideBar(currentTarget){
    currentTarget.style['animation-name'] = 'slideLeftWard';
    this.dimLayer.classList.remove('dim__sidebar');
  }

  unfoldMenu(target){
    const categoryNode = findUpWard(target,'.sidebar__category');
    findSiblingForward(categoryNode, 'sidebar__category extra').style.height = '100%';
  }

  foldMenu(target){
    findUpWard(target,'.sidebar__category.extra').style.height = '0';
  }

  openSubMenu(target){
    const categoryId = findUpWard(target, '.sidebar__category').dataset.categoryId;
    const contentsId = findUpWard(target, '.sidebar__contents').dataset.contentsId;
    const subMenu = new SubMenu(this.responsedData, categoryId, contentsId).makeLayer();
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

  closeSubMenu(target){
    findUpWard(target, '.sidebar__menu.sub').style['animation-name'] = 'slideSubMenuRightWard';
    findUpWard(target, '#sidebarmenu').firstElementChild.style['animation-name'] = 'slideMenuRightWard';
  }
}