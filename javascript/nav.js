const navBarEventHandler = () => {
  const $header = document.querySelector('header');
  const $login = document.querySelector('.login');
  const $shipping_address = document.querySelector('.address');
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $login_popup_detail = document.querySelector('.login_popup_detail');

  $header.addEventListener('mouseenter', hidePopup);
  $login.addEventListener('mouseenter', loginModalHandler);
  $shipping_address.addEventListener('mouseenter', shippingAddressModalHandler);
  $shipping_address_popup.addEventListener('mouseleave', shippingAddressModalHandler);
  $login_popup_detail.addEventListener('mouseleave', loginModalHandler);
}

const hidePopup = () => {
  const $fade_in_popup = document.querySelector('.fade_in');
  $fade_in_popup.classList.add('hidden');
}

const shippingAddressModalHandler = () => {
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $shipping_address_popup.classList.toggle('hidden');
  $modal_bg.classList.toggle('hidden');
}

const loginModalHandler = () => {
  const $login_popup_detail = document.querySelector('.login_popup_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_popup_detail.classList.toggle('hidden');
  $modal_bg.classList.toggle('hidden');
}

navBarEventHandler();