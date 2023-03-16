import { SUB_SIDEBAR_DATA } from "./subSideBarData.js";

const sideBarOpenBtnEvtHandler = (sideBarLayer, dimLayer) => {
  const sideBarOpenBtn = document.querySelector(".nav-bottom__category.select-all");
  sideBarOpenBtn.addEventListener('click', () => {
    sideBarLayer.style['animation-name'] = 'slideRightWard';
    dimLayer.style.display = 'block';
    dimLayer.style['z-index'] = '2';
  });
}

const sideBarEvtHandler = (sideBarLayer, dimLayer, findUpWard, findSiblingForward, getSubSideBar, isSubSideBarExist) => {
  sideBarLayer.addEventListener('click', (evt) => {
    const ontarget = evt.target;
    const [parent, element, name] = ontarget.className.split(" ");
  
    if(parent === "sidebar__closeBtn--container") { 
      sideBarLayer.style['animation-name'] = 'slideLeftWard';
      dimLayer.style.display = 'none';
      dimLayer.style['z-index'] = '1';
    }
  
    if(name === 'showall') {
      const sidebarShoppingNode = findUpWard(ontarget,'.sidebar__shopping');
      findSiblingForward(sidebarShoppingNode, '.sidebar__shopping.extra').style.height = '100%';
    }
    if(name === 'closeall') findUpWard(ontarget,'.sidebar__shopping.extra').style.height = '0';
    /**
     * 사이드바에서 클릭 이벤트 발생시 sub sidebar menu 생성
     */
    if(parent != 'sidebar__menu' && element != 'btn'){
      const subSideBarData = Object.entries(SUB_SIDEBAR_DATA);
      const list = evt.target.closest('.sidebar__contents');
      const listId = list.dataset.indexNumber;
      const newRightSideBar = makeSubSideBar(subSideBarData[listId], listId);
      const sideBarMenuChilds = ontarget.closest('.sidebar__container').lastElementChild.childNodes;

      // 해당 인덱스의 서브 사이드바가 이미 존재한다면
      if(isSubSideBarExist(sideBarMenuChilds, listId)){
        getSubSideBar(ontarget ,listId).style['animation-name'] = 'slideSubMenuLeftWard';
        findUpWard(ontarget, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard'
      } else {      // 해당 인덱스의 서브 사이드바가 존재하지 않으면
        findUpWard(ontarget, '.sidebar__menu.main').insertAdjacentHTML('afterend', newRightSideBar);
        getSubSideBar(ontarget, listId).style['animation-name'] = 'slideSubMenuLeftWard';
        findUpWard(ontarget, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard';
      }
    };
  
    if(name === 'close-right-menu') {
      findUpWard(ontarget, '.sidebar__menu.right').style['animation-name'] = 'slideSubMenuRightWard';
      findUpWard(ontarget, '#sidebarmenu').firstElementChild.style['animation-name'] = 'slideMenuRightWard';
    }
  })
}

export {sideBarEvtHandler, sideBarOpenBtnEvtHandler}