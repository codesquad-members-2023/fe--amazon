function sideBarHandler(findNodeModule, dimLayer){
  const {findNordUpWard, findSibling} = findNodeModule;
  const sideBarOpenBtn = document.querySelector(".nav-bottom__category.select-all");
  const sideBarLayer = document.querySelector(".sidebar__layer");
  
  sideBarOpenBtn.addEventListener('click', () => {
    sideBarLayer.style['animation-name'] = 'slideRightWard';
    dimLayer.style.display = 'block';
  });
  sideBarLayer.addEventListener('click', (evt) => {
    const ontarget = evt.target;
    const [parent, element, name] = ontarget.className.split(" ");
  
    if(parent === "sidebar__closeBtn--container") { 
      sideBarLayer.style['animation-name'] = 'slideLeftWard';
      dimLayer.style.display = 'none';
    }
  
    if(name === 'showall') {
      findSibling(findNordUpWard(ontarget,'.sidebar__shopping'), 2).style.height = '100%';
    }
    if(name === 'closeall') {
      findNordUpWard(ontarget,'.sidebar__shopping.extra').style.height = '0';
    }
    
    /**
     * 사이드바에서 클릭 이벤트 발생시 right sub menu 생성
     */
    if(parent + '.' + element != 'sidebar__contents.btn'){
      const rightSideBarData = Object.entries(SIDEBAR_DETAIL);
      const categoryNumber = evt.target.dataset.indexNumber;
      const newRightSideBar = makeSubSideBar(rightSideBarData[categoryNumber], categoryNumber);
      const rightSideBarList = ontarget.closest('.sidebar__container').lastElementChild.childNodes;

      rightSideBarList.forEach((rightSideBar) => {
        if(rightSideBar.nodeName != '#text'){
          const name = rightSideBar.className;
          const nameInArray = name.split(" ");
          if(nameInArray[nameInArray.length - 1] != categoryNumber){
            findNordUpWard(ontarget, '.sidebar__menu.main').insertAdjacentHTML('afterend', newRightSideBar);
          }
          rightSideBar.style['animation-name'] = 'slideSubMenuLeftWard';
        }
      })
      findNordUpWard(ontarget, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard';
    };
  
    if(name === 'close-right-menu') {
      findNordUpWard(ontarget, '.sidebar__menu.right').style['animation-name'] = 'slideSubMenuRightWard';
      findNordUpWard(ontarget, '#sidebarmenu').firstElementChild.style['animation-name'] = 'slideMenuRightWard';
    }
  })
}

const navHandler = (findNodeModule, dimLayer) => {
  const {findNordUpWard, findSibling} = findNodeModule;
  const nav = document.querySelector('.nav');
  
  nav.addEventListener('mouseover', (evt) => {
    const ontarget = evt.target;
  
    if(ontarget.tagName === 'A') {
      ontarget.classList.add('border');
    }
    
    const [parent, element] = ontarget.className.split(" ");
    
    if(element === 'location') {
      ontarget.lastElementChild.style.display = 'block';
      dimLayer.style.display = 'block';
    }
    if(findNordUpWard(ontarget, '.modal__location')) {
      findNordUpWard(ontarget, '.modal__location').style.display = 'block';
      dimLayer.style.display = 'block';
    }
    if(element === 'account-link') {
      findSibling(ontarget, 2).style.display = 'none';
      findSibling(ontarget, 4).style.display = 'block';
      dimLayer.style.display = 'block';
    }
    if(findNordUpWard(ontarget, '.modal__login2')) {
      findNordUpWard(ontarget, '.modal__login2').style.display = 'block';
      dimLayer.style.display = 'block';
    }
  })
  
  nav.addEventListener('mouseout', (evt) => {
    const ontarget = evt.target;
    const [parent, element] = ontarget.className.split(" ");
  
    if(ontarget.tagName === 'A') {
      ontarget.classList.remove('border');
      if(element != 'select-all') dimLayer.style.display = 'none';
    }
    if(element === 'location') {
      ontarget.lastElementChild.style.display = 'none';
      dimLayer.style.display = 'none';
    }
    if(findNordUpWard(ontarget, '.modal__location')){
      findNordUpWard(ontarget, '.modal__location').style.display = 'none';
      dimLayer.style.display = 'none';
    }
    if(element === 'account-link') {
      findSibling(ontarget, 2).style.display = 'none';
      findSibling(ontarget, 4).style.display = 'none';
      dimLayer.style.display = 'none';
    }
    if(findNordUpWard(ontarget, '.modal__login2')) {
      findNordUpWard(ontarget, '.modal__login2').style.display = 'none';
      dimLayer.style.display = 'none';
    }
  })
}

const findNodeModule = (() => {
  const findNordUpWard = (target, node) => target.closest(node);
  const findSibling = (node, targetIndex) => {
    const parent = node.parentNode;
    const children = parent.childNodes;
    const index = Array.prototype.indexOf.call(children, node);
    if (index < children.length - 1 && index >= 0) return children[index + targetIndex];
    else return null; // index가 children 배열크기를 넘어가는 경우
  };
  return {
    findNordUpWard,
    findSibling
  }
});

(function init(){
  (function (delay) {
    const loginModal1 = document.querySelector(".modal__login1");
    setTimeout(function() {
      loginModal1.style.display = 'block';
    }, delay)
  })(1000);

  const dimLayer = document.querySelector(".dim__layer");

  navHandler(findNodeModule(), dimLayer);
  sideBarHandler(findNodeModule(), dimLayer);
})()