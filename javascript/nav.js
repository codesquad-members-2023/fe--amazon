const $header = document.querySelector('header');
const $fade_in_popup = document.querySelector('.fade_in');
const $login_bar = document.querySelector('.login_bar');
const $login_popup_detail = document.querySelector('.login_popup_detail');
const $shipping_address = document.querySelector('.shipping_address');
const $shipping_address_popup = document.querySelector('.shipping_address_popup');

const init = () => {
  setTimeout(() => {
    $header.addEventListener('mouseenter', e => {
      $fade_in_popup.classList.add('hidden');
  }, 500)});
}

$login_bar.addEventListener('mouseenter', e => {
  $login_popup_detail.classList.remove('hidden');
});

$shipping_address.addEventListener('mouseenter', e => {
  $shipping_address_popup.classList.remove('hidden');
});

$login_popup_detail.addEventListener('mouseleave', e => {
  $login_popup_detail.classList.add('hidden');
});

// const closeAddressPopup = e => {
//   if(e.target.className === 'shipping_address' || e.target.className === '$shipping_address_popup' )
//   $shipping_address_popup.classList.add('hidden');
// }
// $shipping_address.addEventListener('mouseleave', closeAddressPopup);
// $shipping_address_popup.addEventListener('mouseleave', closeAddressPopup);

$shipping_address_popup.addEventListener('mouseleave', e => {
  $shipping_address_popup.classList.add('hidden');
});

init();