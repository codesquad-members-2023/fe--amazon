(function main(){
  const loginModal1 = document.querySelector(".modal__login1");
  
  (function (delay) {
    setTimeout(function() {
      loginModal1.style.display = 'block';
    }, delay)
  })(1000);

  const nav = document.querySelector('.nav');
  const dimLayer = document.querySelector(".dim__layer");
  
  const findNordUpWard = (target, node) => target.closest(node);
  const findLastChildNode = (target) => target.lastElementChild;
  const findSibling = (node, targetIndex) => {
    const parent = node.parentNode;
    const children = parent.childNodes;
    const index = Array.prototype.indexOf.call(children, node);
    if (index < children.length - 1 && index >= 0) return children[index + targetIndex];
    else return null; // index가 children 배열크기를 넘어가는 경우
  }

  nav.addEventListener('mouseover', (evt) => {
    const ontarget = evt.target;

    if(ontarget.tagName === 'A') {
      ontarget.classList.add('border');
    }
    
    const [parent, element] = ontarget.className.split(" ");
    
    if(element === 'location') {
      findLastChildNode(ontarget).style.display = 'block';
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
      findLastChildNode(ontarget).style.display = 'none';
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

  /**
   * sidebar 버튼 및 레이아웃 영역  
   */
  
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

    // sidebar menu right 영역

    // 열기
    if(name === 'electron') {
      findNordUpWard(ontarget, '.sidebar__menu.main').style['animation-name'] = 'slideMenuLeftWard';
      findSibling(findNordUpWard(ontarget, '.sidebar__menu.main'), 2).style['animation-name'] = 'slideMenuLeftWard';
    }

    if(name === 'close-right-menu') {
      findNordUpWard(ontarget, '.sidebar__menu.right').style['animation-name'] = 'slideMenuRightWard';
      findSibling(findNordUpWard(ontarget, '.sidebar__menu.right'), -2).style['animation-name'] = 'slideMenuRightWard';
    }
  })
})();