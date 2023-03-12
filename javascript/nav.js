const $header = document.querySelector('header');
const $fade_in_popup = document.querySelector('.fade_in');
const $login = document.querySelector('.login');
const $login_popup_detail = document.querySelector('.login_popup_detail');
const $shipping_address = document.querySelector('.address');
const $shipping_address_popup = document.querySelector('.address_popup');
const $modal_bg = document.querySelector('.modal_background');

$header.addEventListener('mouseenter', e => {
  $fade_in_popup.classList.add('hidden');
});

$login.addEventListener('mouseenter', e => {
  $login_popup_detail.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
});

$shipping_address.addEventListener('mouseenter', e => {
  $shipping_address_popup.classList.remove('hidden');
  $modal_bg.classList.remove('hidden');
});

$login_popup_detail.addEventListener('mouseleave', e => {
  $login_popup_detail.classList.add('hidden');
  $modal_bg.classList.add('hidden');
});

$shipping_address_popup.addEventListener('mouseleave', e => {
  $shipping_address_popup.classList.add('hidden');
  $modal_bg.classList.add('hidden');
});