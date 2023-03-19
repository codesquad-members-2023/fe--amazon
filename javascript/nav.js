const navBarEventHandler = () => {
  const $header = document.querySelector('header');
  const $addressContainer = document.querySelector('.address_container');
  const $addressPopup = document.querySelector('.address_popup');
  const $loginContainer = document.querySelector('.login_container');
  const $loginDetail = document.querySelector('.login_detail');

  $header.addEventListener('mouseenter', hidePopup);
  $addressContainer.addEventListener('mouseenter', popUpAddress);
  $loginContainer.addEventListener('mouseenter', popUpLogin);

  $addressContainer.addEventListener('mouseleave', hideAddress);
  $loginContainer.addEventListener('mouseleave', hideLogin);
}

const hidePopup = () => {
  const $fadeInPopup = document.querySelector('.fade_in');
  $fadeInPopup.classList.add('hidden');
}

const popUpAddress = () => {
  const $addressPopup = document.querySelector('.address_popup');
  const $modalBackground = document.querySelector('.modal_background');
  return popUp($addressPopup, $modalBackground);
}

const hideAddress = () => {
  const $addressPopup = document.querySelector('.address_popup');
  const $modalBackground = document.querySelector('.modal_background');
  return hide($addressPopup, $modalBackground);
}

const popUpLogin = () => {
  const $loginDetail = document.querySelector('.login_detail');
  const $modalBackground = document.querySelector('.modal_background');
  return popUp($loginDetail, $modalBackground);
}

const hideLogin = () => {
  const $loginDetail = document.querySelector('.login_detail');
  const $modalBackground = document.querySelector('.modal_background');
  return hide($loginDetail, $modalBackground);
}

const popUp = (...querySelector) => {
  return [...querySelector].forEach(selector => {
    selector.classList.remove('hidden');
  });
}

const hide = (...querySelector) => {
  return [...querySelector].forEach(selector => {
    selector.classList.add('hidden');
  });
}

navBarEventHandler();