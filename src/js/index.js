const loginSection = document.querySelector('.login_section');
const loginContainer = document.querySelector('.login_container');
const loginPopup = document.querySelector('.login_pop-up');
const dividingLine = document.querySelector('.dividing_line');
const loginListContainer = document.querySelector('.login_list_container');
const shippingSection = document.querySelector('.shipping_section');
const shippingContainer = document.querySelector('.shipping_container');
const shippingPopup = document.querySelector('.shipping_pop-up');
const dimmedSection = document.querySelector('.dimmed');
const sidebarActivateButton = document.querySelector('.sidebar_active_button');
const sidebar = document.querySelector('.sidebar');
const sidebarInactivateButton = document.querySelector('.sidebar_close_icon');
const showHiddenSidebarListButton = document.querySelector('.sidebar_list_unfold_icon');
const hiddenSidebarList = document.querySelector('.sidebar_list_hidden');
const hideHiddenSidebarListButton = document.querySelector('.sidebar_list_fold');

const showLoginInitLayer = () => {
  loginPopup.classList.remove('hidden');
};

const showLoginExtendedLayer = () => {
  loginPopup.classList.remove('hidden');
  dividingLine.classList.remove('hidden');
  loginListContainer.classList.remove('hidden');
  dimmedSection.classList.remove('hidden');
};

const hideLayer = () => {
  loginPopup.classList.add('hidden');
  shippingPopup.classList.add('hidden');
  dimmedSection.classList.add('hidden');
};

const showShippingLayer = () => {
  shippingPopup.classList.remove('hidden');
  loginPopup.classList.add('hidden');
  dimmedSection.classList.remove('hidden');
};

const activeSidebarHandler = () => {
  sidebar.classList.add('active');
};

const inactiveSidebarHandler = () => {
  sidebar.classList.remove('active');
};

const showHiddenSidebarList = () => {
  hiddenSidebarList.classList.add('show');
};

const hideHiddenSidebarList = () => {
  hiddenSidebarList.classList.remove('show');
};

const main = () => {
  const loadingTime = 1000;
  setTimeout(() => {
    showLoginInitLayer();
  }, loadingTime);
  loginContainer.addEventListener('mouseenter', showLoginExtendedLayer);
  loginSection.addEventListener('mouseleave', hideLayer);
  shippingContainer.addEventListener('mouseenter', showShippingLayer);
  shippingSection.addEventListener('mouseleave', hideLayer);
  sidebarActivateButton.addEventListener('click', activeSidebarHandler);
  sidebarInactivateButton.addEventListener('click', inactiveSidebarHandler);
  showHiddenSidebarListButton.addEventListener('click', showHiddenSidebarList);
  hideHiddenSidebarListButton.addEventListener('click', hideHiddenSidebarList);
};

main();
