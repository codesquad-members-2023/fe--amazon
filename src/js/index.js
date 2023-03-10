const loginSection = document.querySelector('.login_section');
const loginContainer = document.querySelector('.login_container');
const loginPopup = document.querySelector('.login_pop-up');
const dividingLine = document.querySelector('.dividing_line');
const listContainer = document.querySelector('.list_container');
const shippingSection = document.querySelector('.shipping_section');
const shippingContainer = document.querySelector('.shipping_container');
const shippingPopup = document.querySelector('.shipping_pop-up');
const dimmedSection = document.querySelector('.dimmed');

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
  dimmedSection.classList.remove('hidden');
};
const hideShippingLayer = () => {
  shippingPopup.classList.add('hidden');
  dimmedSection.classList.add('hidden');
};

const main = () => {
  setTimeout(() => {
    showLoginInitLayer();
  }, 1000);
  loginContainer.addEventListener('mouseenter', showLoginExtendedLayer);
  loginSection.addEventListener('mouseleave', hideLoginExtendedLayer);
  shippingContainer.addEventListener('mouseenter', showShippingLayer);
  shippingSection.addEventListener('mouseleave', hideShippingLayer);
};

main();
