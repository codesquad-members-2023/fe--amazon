const loginPointer1 = document.querySelector(".modal__pointer1");
const loginModal1 = document.querySelector(".modal__login1");

// login 버튼 영역 변수화
const loginPath2 = document.querySelector(".modal__path2");
const loginPointer2 = document.querySelector(".modal__pointer2");
const loginModal2 = document.querySelector(".modal__login2");


(function (delay) {
  setTimeout(function() {
    loginPointer1.style.display = 'block';
    loginModal1.style.display = 'block';
  }, delay)
})(1000);

const loginButton = document.querySelector(".nav-top__elements.account-link");
const dimLayer = document.querySelector(".dim__layer");

loginButton.addEventListener("mouseover", () => {
  loginModal1.style.display = 'none';
  loginModal2.style.display = 'block';
  loginPointer2.style.display = 'block';
  loginPath2.style.display = 'block';
  dimLayer.style.display = 'block';
})

const loginModal2Layout = [loginPath2, loginModal2];

loginButton.addEventListener("mouseout", () => {
  loginModal2.style.display = 'none';
  loginPointer2.style.display = 'none';
})

loginPath2.addEventListener("mouseover", () => {
  loginModal2.style.display = 'block';
  loginPointer2.style.display = 'block';
})

loginModal2.addEventListener("mouseover", () => {
  loginModal2.style.display = 'block';
  loginPointer2.style.display = 'block';
})

loginPath2.addEventListener("mouseout", () => {
  loginModal2.style.display = 'none';
  loginPointer2.style.display = 'none';
})

loginModal2.addEventListener("mouseout", () => {
  loginModal2.style.display = 'none';
  loginPointer2.style.display = 'none';
})

/*     딤처리 부분      */
// location 버튼 영역 변수화
const locationButton = document.querySelector(".nav-top__link");
const locationModal = document.querySelector(".modal__location");

const modalLayouts = [locationButton, locationModal, loginButton, loginModal2, loginPath2];

modalLayouts.forEach((node) => {
  node.addEventListener("mouseover", () => {
    dimLayer.style.display = 'block';
  })
})

modalLayouts.forEach((node) => {
  node.addEventListener("mouseout", () => {
    if(sideBarLayer.style['animation-name'] != 'slideRightWard') dimLayer.style.display = 'none';
  })
})

/**
 * sidebar 버튼 및 레이아웃 영역  
 */

const sideBarOpenBtn = document.querySelector(".nav-bottom__category.select-all");
const sideBarLayer = document.querySelector(".sidebar__layer");
const sideBarCloseBtn = document.querySelector(".sidebar__closeBtn--container");
const sideBarCloseBtnLayer = document.querySelector(".sidebar__closeBtn")

sideBarOpenBtn.addEventListener('click', () => {
  sideBarLayer.style['animation-name'] = 'slideRightWard';
  dimLayer.style.display = 'block';
});

sideBarCloseBtn.addEventListener('click', () => {
  sideBarLayer.style['animation-name'] = 'slideLeftWard';

  dimLayer.style.display = 'none';
})

// slidebar shopping extra menu 영역

const sideBarShowAllBtn = document.querySelector('.sidebar__contents.btn.showall');
const sideBarCloseAllBtn = document.querySelector('.sidebar__contents.btn.closeall');
const sideBarExtraShoppingList = document.querySelector('.sidebar__shopping.extra');

sideBarShowAllBtn.addEventListener('click', () => {
  sideBarExtraShoppingList.style.height = '100%';
})

sideBarCloseAllBtn.addEventListener('click', () => {
  sideBarExtraShoppingList.style.height = '0';
})

// sidebar menu right 영역

//  열기
const sideBarMenuMain = document.querySelector('.sidebar__menu.main');
const sideBarMenuRight = document.querySelector('.sidebar__menu.right');
const sideBarShoppingElectronBtn = document.querySelector('.sidebar__contents-shopping__electron');

sideBarShoppingElectronBtn.addEventListener('click', () => {
  sideBarMenuMain.style['animation-name'] = 'slideMenuLeftWard';
  sideBarMenuRight.style['animation-name'] = 'slideMenuLeftWard';
})

//닫기
const sideBarMenuRightCloseBtn = document.querySelector('.sidebar__contents.btn.close-right-menu');

sideBarMenuRightCloseBtn.addEventListener('click', () => {
  sideBarMenuMain.style['animation-name'] = 'slideMenuRightWard';
  sideBarMenuRight.style['animation-name'] = 'slideMenuRightWard';
})