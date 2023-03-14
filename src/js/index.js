import { header } from './header_module.js';
import { sidebar } from './sidebar_module.js';
import { global } from './amazon_module.js';

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
  const delayTime = 100;
  sidebar.extraSidebarList.classList.add('show');
  sidebar.extraSidebarListItem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * delayTime);
  });
  global.dimmedSection.classList.remove('hidden');
};

const hideHiddenSidebarList = () => {
  const delayTime = 100;
  sidebar.extraSidebarListItem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('show');
    }, (sidebar.extraSidebarListItem.length - index) * delayTime);
  });
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
};

main();
