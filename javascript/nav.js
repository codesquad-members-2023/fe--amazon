const navBarEventHandler = () => {
  const $header = document.querySelector('header');
  const $login = document.querySelector('.login');
  const $shipping_address_container = document.querySelector('.address_container');
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $login_popup_detail = document.querySelector('.login_popup_detail');

  $header.addEventListener('mouseenter', hidePopup);
  $login.addEventListener('mouseenter', loginModalHandler);
  $shipping_address_container.addEventListener('mouseenter', popUpShippingAddressModalHandler);
  $shipping_address_container.addEventListener('mouseleave', hideShippingAddressModalHandler);
  $shipping_address_popup.addEventListener('mouseleave', hideShippingAddressModalHandler);
  $login_popup_detail.addEventListener('mouseleave', loginModalHandler);
}

const hidePopup = () => {
  const $fade_in_popup = document.querySelector('.fade_in');
  $fade_in_popup.classList.add('hidden');
}

const popUpShippingAddressModalHandler = () => {
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $shipping_address_popup.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
}

const hideShippingAddressModalHandler = () => {
  const $shipping_address_popup = document.querySelector('.address_popup');
  const $modal_bg = document.querySelector('.modal_background');
  $shipping_address_popup.classList.add('hidden');
  $modal_bg.classList.add('hidden');
}

const loginModalHandler = () => {
  const $login_popup_detail = document.querySelector('.login_popup_detail');
  const $modal_bg = document.querySelector('.modal_background');
  $login_popup_detail.classList.toggle('hidden');
  $modal_bg.classList.toggle('hidden');
}

navBarEventHandler();