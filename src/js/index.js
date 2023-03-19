import { header } from './headerElement.js';
import { sidebar } from './sidebarElement.js';
import { dimmed } from './dimmedElement.js';
import { sidebarDetail } from './sidebarSubmenuDataset.js';

const showLoginInitLayer = () => {
  header.loginPopup.classList.remove('hidden');
};

const showLoginExtendedLayer = () => {
  header.loginPopup.classList.remove('hidden');
  header.dividingLine.classList.remove('hidden');
  header.loginListContainer.classList.remove('hidden');
  dimmed.MainExceptHeader.classList.remove('hidden');
};

const hideLayer = () => {
  header.loginPopup.classList.add('hidden');
  header.shippingPopup.classList.add('hidden');
  dimmed.MainExceptHeader.classList.add('hidden');
};

const showShippingLayer = () => {
  header.shippingPopup.classList.remove('hidden');
  header.loginPopup.classList.add('hidden');
  dimmed.MainExceptHeader.classList.remove('hidden');
};

const activeSidebarHandler = () => {
  sidebar.container.classList.add('active');
  sidebar.InactivateButton.classList.add('active');
  header.loginPopup.classList.add('hidden');
  dimmed.MainIncludingHeader.classList.remove('hidden');
};

const inactiveSidebarHandler = () => {
  sidebar.container.classList.remove('active');
  sidebar.InactivateButton.classList.remove('active');
  dimmed.MainIncludingHeader.classList.add('hidden');
};

const showExtraSidebarList = () => {
  const delayTime = 30;
  sidebar.extraList.classList.add('show');
  sidebar.extraListItem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * delayTime);
  });
};

const hideExtraSidebarList = () => {
  const delayTime = 30;
  sidebar.extraListItem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('show');
    }, (sidebar.extraListItem.length - index) * delayTime);
  });
};

const sidebarInactiveSubmenuHandler = () => {
  const submenu = document.querySelector('.submenu');
  submenu.remove();
  sidebar.Main.classList.remove('slide');
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
    submenuLists.append(li);
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

  if (className.indexOf('list') !== -1) {
    const submenuTitle = innerText;
    const submenuList = sidebarDetail[id];
    const submenu = createSidebarSubmenuFragment(submenuTitle, submenuList);

    sidebar.Main.classList.add('slide');
    sidebar.Main.insertAdjacentElement('beforebegin', submenu);
  }
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
  sidebar.ActivateButton.addEventListener('click', activeSidebarHandler);
  sidebar.InactivateButton.addEventListener('click', inactiveSidebarHandler);
  sidebar.showExtraListButton.addEventListener('click', showExtraSidebarList);
  sidebar.hideExtraListButton.addEventListener('click', hideExtraSidebarList);
  sidebar.Main.addEventListener('click', sidebarActiveSubmenuHandler);
};

main();
