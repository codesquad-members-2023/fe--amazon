import { header } from './header_module.js';
import { sidebar } from './sidebar_module.js';
import { global } from './amazon_module.js';

const showLoginInitLayer = () => {
  console.log('good');
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
};

const inactiveSidebarHandler = () => {
  sidebar.sidebar.classList.remove('active');
};

const showHiddenSidebarList = () => {
  sidebar.hiddenSidebarList.classList.add('show');
};

const hideHiddenSidebarList = () => {
  sidebar.hiddenSidebarList.classList.remove('show');
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
  sidebar.showHiddenSidebarListButton.addEventListener('click', showHiddenSidebarList);
  sidebar.hideHiddenSidebarListButton.addEventListener('click', hideHiddenSidebarList);
};

main();
