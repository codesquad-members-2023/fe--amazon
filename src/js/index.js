const loginSection = document.querySelector('.login_section');
const loginContainer = document.querySelector('.login_container');
const loginPopup = document.querySelector('.login_pop-up');
const dividingLine = document.querySelector('.dividing_line');
const listContainer = document.querySelector('.list_container');
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
  listContainer.classList.remove('hidden');
  dimmedSection.classList.remove('hidden');
};

const hideLoginExtendedLayer = () => {
  loginPopup.classList.add('hidden');
  dimmedSection.classList.add('hidden');
};

const showShippingLayer = () => {
  shippingPopup.classList.remove('hidden');
  loginPopup.classList.add('hidden');
  dimmedSection.classList.remove('hidden');
};
const hideShippingLayer = () => {
  shippingPopup.classList.add('hidden');
  dimmedSection.classList.add('hidden');
};

const activateSidebar = () => {
  sidebar.classList.add('active');
};

const inactivateSidebar = () => {
  sidebar.classList.remove('active');
};

const showHiddenSidebarList = () => {
  hiddenSidebarList.classList.add('show');
};

const hideHiddenSidebarList = () => {
  hiddenSidebarList.classList.remove('show');
};

const main = () => {
  setTimeout(() => {
    showLoginInitLayer();
  }, 1000);
  loginContainer.addEventListener('mouseenter', showLoginExtendedLayer);
  loginSection.addEventListener('mouseleave', hideLoginExtendedLayer);
  shippingContainer.addEventListener('mouseenter', showShippingLayer);
  shippingSection.addEventListener('mouseleave', hideShippingLayer);
  sidebarActivateButton.addEventListener('click', activateSidebar);
  sidebarInactivateButton.addEventListener('click', inactivateSidebar);
  showHiddenSidebarListButton.addEventListener('click', showHiddenSidebarList);
  hideHiddenSidebarListButton.addEventListener('click', hideHiddenSidebarList);
};

main();
