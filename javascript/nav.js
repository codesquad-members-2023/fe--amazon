const navBarEventHandler = () => {
  const $header = document.querySelector('header');
  const $shipping_address_container = document.querySelector('.address_container');
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $login_popup_container = document.querySelector('.login_container');
  const $login_popup_detail = document.querySelector('.login_popup_detail');

  $header.addEventListener('mouseenter', hidePopup);
  $shipping_address_container.addEventListener('mouseenter', popUpShippingAddress);
  $login_popup_container.addEventListener('mouseenter', popUpLogin);

  $shipping_address_container.addEventListener('mouseleave', hideShippingAddress);
  $shipping_address_popup.addEventListener('mouseleave', hideShippingAddress);

  $login_popup_container.addEventListener('mouseleave', hideLogin);
  $login_popup_detail.addEventListener('mouseleave', hideLogin);
}

const hidePopup = () => {
  const $fade_in_popup = document.querySelector('.fade_in');
  $fade_in_popup.classList.add('hidden');
}

const popUpShippingAddress = () => {
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $shipping_address_popup.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
}

const hideShippingAddress = () => {
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $shipping_address_popup.classList.add('hidden');
  $modal_bg.classList.add('hidden');
}

const popUpLogin = () => {
  const $login_popup_detail = document.querySelector('.login_popup_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_popup_detail.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
}

const hideLogin = () => {
  const $login_popup_detail = document.querySelector('.login_popup_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_popup_detail.classList.add('hidden');
  $modal_bg.classList.add('hidden');
}

navBarEventHandler();