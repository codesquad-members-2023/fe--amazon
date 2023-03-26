const onNavBar = (LOGIN_DATA) => {
  insertLoginData(LOGIN_DATA);

  const $header = document.querySelector('header');
  const $addressContainer = document.querySelector('.address_container');
  const $loginContainer = document.querySelector('.login_container');

  $header.addEventListener('mouseenter', hidePopup);
  $addressContainer.addEventListener('mouseenter', popUpAddress);
  $loginContainer.addEventListener('mouseenter', popUpLogin);

  $addressContainer.addEventListener('mouseleave', hideAddress);
  $loginContainer.addEventListener('mouseleave', hideLogin);

}

const hidePopup = () => {
  const $fadeInPopup = document.querySelector('.fade_in');
  return hide($fadeInPopup);
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

const popUp = (...selectors) => {
  return [...selectors].forEach(selector => {
    selector.classList.remove('hidden');
  });
}

const hide = (...selectors) => {
  return [...selectors].forEach(selector => {
    selector.classList.add('hidden');
  });
}

const insertLoginData = LOGIN_DATA => {
  const $content = document.querySelectorAll('.login_detail > .content div');
  $content.forEach(data => {
    const [className, loginDataHTML] = getLoginData(data, LOGIN_DATA);
    const $contentDiv = document.querySelector(`.${className}`);
    $contentDiv.insertAdjacentHTML('beforeend', loginDataHTML);
  });
}

const getLoginData = (data, LOGIN_DATA) => {
  const loginData = LOGIN_DATA[data.className];
  const title = `<h3>${loginData['title']}</h3>`;
  const contents = loginData['content'];
  const loginList = contents.reduce((list, data) => {
    list += `<li>${data}</li>`;
    return list;
  }, `<ul>`) + `</ul>`;
  return [data.className, title + loginList];
}

export { onNavBar };