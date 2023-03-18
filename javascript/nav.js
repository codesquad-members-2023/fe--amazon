const navBarEventHandler = () => {
  const $header = document.querySelector('header');
  const $address_container = document.querySelector('.address_container');
  const $address_popup = document.querySelector('.address_popup');
  const $login_container = document.querySelector('.login_container');
  const $login_detail = document.querySelector('.login_detail');

  $header.addEventListener('mouseenter', hidePopup);
  $address_container.addEventListener('mouseenter', popUpShippingAddress);
  $login_container.addEventListener('mouseenter', popUpLogin);

  $address_container.addEventListener('mouseleave', hideShippingAddress);
  $address_popup.addEventListener('mouseleave', hideShippingAddress);

  $login_container.addEventListener('mouseleave', hideLogin);
  $login_detail.addEventListener('mouseleave', hideLogin);
}

const hidePopup = () => {
  const $fade_in_popup = document.querySelector('.fade_in');
  $fade_in_popup.classList.add('hidden');
}

const popUpShippingAddress = () => {
  const $address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $address_popup.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
}

const hideShippingAddress = () => {
  const $address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $address_popup.classList.add('hidden');
  $modal_bg.classList.add('hidden');
}

const popUpLogin = () => {
  const $login_detail = document.querySelector('.login_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_detail.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
}

const hideLogin = () => {
  const $login_detail = document.querySelector('.login_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_detail.classList.add('hidden');
  $modal_bg.classList.add('hidden');
}

navBarEventHandler();