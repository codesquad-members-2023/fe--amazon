import { header } from './header_module.js';
import { sidebar } from './sidebar_module.js';
import { global } from './amazon_module.js';
import { sidebarDetail } from './sidebar_submenu_dataset.js';

const showLoginInitLayer = () => {
  header.loginPopup.classList.remove('hidden');
};

const showLoginExtendedLayer = () => {
  header.loginPopup.classList.remove('hidden');
  header.dividingLine.classList.remove('hidden');
  header.loginListContainer.classList.remove('hidden');
  global.dimmedSection.classList.remove('hidden');
};

const hideLayer = () => {
  header.loginPopup.classList.add('hidden');
  header.shippingPopup.classList.add('hidden');
  global.dimmedSection.classList.add('hidden');
};

const showShippingLayer = () => {
  header.shippingPopup.classList.remove('hidden');
  header.loginPopup.classList.add('hidden');
  global.dimmedSection.classList.remove('hidden');
};

const activeSidebarHandler = () => {
  sidebar.sidebar.classList.add('active');
  sidebar.sidebarInactivateButton.classList.add('active');
  header.loginPopup.classList.add('hidden');
  global.dimmedSection.classList.remove('hidden');
};

const inactiveSidebarHandler = () => {
  sidebar.sidebar.classList.remove('active');
  sidebar.sidebarInactivateButton.classList.remove('active');
  global.dimmedSection.classList.add('hidden');
};

const showHiddenSidebarList = () => {
  const delayTime = 30;
  sidebar.extraSidebarList.classList.add('show');
  sidebar.extraSidebarListItem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * delayTime);
  });
  global.dimmedSection.classList.remove('hidden');
};

const hideHiddenSidebarList = () => {
  const delayTime = 30;
  sidebar.extraSidebarListItem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('show');
    }, (sidebar.extraSidebarListItem.length - index) * delayTime);
  });
};

const sidebarInactiveSubmenuHandler = () => {
  //뒤로 가기 작성 필요
};

// sidebar의 submenu html 구조를 만드는 함수
const createSidebarSubmenuFragment = (title, submenu) => {
  const submenuContainer = document.createElement('div');
  const backButtonSection = document.createElement('div');
  const backButtonSectionTextSection = document.createElement('span');
  const backButtonSectionText = document.createTextNode(`주메뉴`);
  const backButtonImg = document.createElement('img');
  const dividingLine = document.createElement('div');
  const submenuTitle = document.createElement('h4');
  const submenuLists = document.createElement('ul');

  submenuContainer.classList.add('submenu');
  backButtonImg.src = 'assets/images/button=sidebarClose.svg';
  backButtonSection.classList.add('submenu_back-button');
  backButtonSectionTextSection.append(backButtonSectionText);
  backButtonSectionTextSection.classList.add('submenu_back-button_text');
  dividingLine.classList.add('sidebar_dividing_line');
  submenuTitle.classList.add('sidebar_list_title');
  submenuTitle.innerText = `${title}`;
  submenuLists.classList.add('sidebar_lists');

  submenu.forEach((list) => {
    const li = document.createElement('li');
    li.innerText = list;
    li.classList.add('sidebar_list');
    submenuLists.appendChild(li);
  });

  backButtonSection.append(backButtonImg, backButtonSectionTextSection);
  submenuContainer.append(backButtonSection, dividingLine, submenuTitle, submenuLists);

  backButtonSection.addEventListener('click', sidebarInactiveSubmenuHandler);
  return submenuContainer;
};

// sidebar의 submenu를 동작하는 함수
const sidebarActiveSubmenuHandler = (e) => {
  const { className, id, innerText } = e.target;

  if (className.indexOf('non') !== -1) return;

  const submenuTitle = innerText;
  const submenuList = sidebarDetail[id];
  const submenu = createSidebarSubmenuFragment(submenuTitle, submenuList);

  sidebar.sidebarMain.classList.add('hidden');
  sidebar.sidebar.appendChild(submenu);
};

const main = () => {
  const loadingTime = 1000;
  setTimeout(() => {
    showLoginInitLayer();
  }, loadingTime);
  header.loginContainer.addEventListener('mouseenter', showLoginExtendedLayer);
  header.loginSection.addEventListener('mouseleave', hideLayer);
  header.shippingContainer.addEventListener('mouseenter', showShippingLayer);
  header.shippingSection.addEventListener('mouseleave', hideLayer);
  sidebar.sidebarActivateButton.addEventListener('click', activeSidebarHandler);
  sidebar.sidebarInactivateButton.addEventListener('click', inactiveSidebarHandler);
  sidebar.showExtraSidebarListButton.addEventListener('click', showHiddenSidebarList);
  sidebar.hideExtraSidebarListButton.addEventListener('click', hideHiddenSidebarList);
  sidebar.sidebarLists.forEach((lists) =>
    lists.addEventListener('click', sidebarActiveSubmenuHandler)
  );
};

main();
