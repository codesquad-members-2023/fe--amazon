const loginPointer = document.querySelector(".modal__pointer1");
const loginModalLoad = document.querySelector(".modal__login1");

(function (delay) {
  setTimeout(function() {
    loginPointer.style.display = 'block';
    loginModalLoad.style.display = 'block';
  }, delay)
})(1000);

const loginButton = document.querySelector(".nav-top__account-link");
const loginModal1 = document.querySelector(".modal__login1");
const dimLayer = document.querySelector(".dim__layer");

loginButton.addEventListener("mouseover", () => {
  loginModal1.style.display = 'none';
  dimLayer.style.display = 'block';
})

/*     딤처리 부분      */
// location 버튼 영역 변수화
const locationButton = document.querySelector(".nav-top__link");
const locationModal = document.querySelector(".modal__location");

// login 버튼 영역 변수화
const loginModal2 = document.querySelector(".modal__login2");
const loginPath = document.querySelector(".modal__path2");

const modalLayouts = [locationButton, locationModal, loginButton, loginModal2, loginPath];

modalLayouts.forEach((node) => {
  node.addEventListener("mouseover", () => {
    dimLayer.style.display = 'block';
  })
})

modalLayouts.forEach((node) => {
  node.addEventListener("mouseout", () => {
    if(sideBar.style.display != 'block') dimLayer.style.display = 'none';
  })
})

/* sidebar 버튼 및 레이아웃 영역 */

const sideBarOpenBtn = document.querySelector(".nav-bottom__selectAll");
const sideBar = document.querySelector(".sidebar-elements");
const sideBarCloseBtn = document.querySelector(".sidebar__closeBtn");

sideBarOpenBtn.addEventListener('click', () => {
  sideBar.style.display = 'block';
  dimLayer.style.display = 'block';
});

sideBarCloseBtn.addEventListener('click', () => {
  sideBar.style.display = 'none';
  dimLayer.style.display = 'none';
})
