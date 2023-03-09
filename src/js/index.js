const loginContainer = document.querySelector('.login_container');
const loginSection = document.querySelector('.login_section');
const loginPopup = document.querySelector('.login_pop-up');
const dividingLine = document.querySelector('.dividing_line');
const listContainer = document.querySelector('.list_container');

const showLoginInitLayer = () => {
  loginPopup.classList.remove('hidden');
};

const showLoginExtendedLayer = () => {
  loginPopup.classList.remove('hidden');
  dividingLine.classList.remove('hidden');
  listContainer.classList.remove('hidden');
};

const hideLoginExtendedLayer = () => {
  loginPopup.classList.add('hidden');
};

const main = () => {
  setTimeout(() => {
    showLoginInitLayer();
  }, 1000);
  loginContainer.addEventListener('mouseenter', showLoginExtendedLayer);
  loginSection.addEventListener('mouseleave', hideLoginExtendedLayer);
};

main();
