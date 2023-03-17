const navBarEventHandler = () => {
  const $header = document.querySelector('header');
  const $login = document.querySelector('.login');
  const $shipping_address = document.querySelector('.address');
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $login_popup_detail = document.querySelector('.login_popup_detail');

  $header.addEventListener('mouseenter', hidePopup);
  $login.addEventListener('mouseenter', PopupLoginModal);
  $shipping_address.addEventListener('mouseenter', popUpShippingAddressModal);
  $shipping_address_popup.addEventListener('mouseleave', hideShippingAddress);
  $login_popup_detail.addEventListener('mouseleave', hideDetailLoginModal);
}

const hidePopup = e => {
  const $fade_in_popup = document.querySelector('.fade_in');
  $fade_in_popup.classList.add('hidden');
}

const PopupLoginModal = e => {
  const $login_popup_detail = document.querySelector('.login_popup_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_popup_detail.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
}

const popUpShippingAddressModal = e => {
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $shipping_address_popup.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
}

const hideShippingAddress = e => {
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $shipping_address_popup.classList.add('hidden');
  $modal_bg.classList.add('hidden');
}

const hideDetailLoginModal = e => {
  const $login_popup_detail = document.querySelector('.login_popup_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_popup_detail.classList.add('hidden');
  $modal_bg.classList.add('hidden');
}

navBarEventHandler();