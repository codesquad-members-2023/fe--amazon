import { $, $$ } from './util/dom.js';
import { SIDEBAR_DETAIL } from './constant/sideBarDetail.js';

const main = () => {
  const $sideBar = $('.side-bar');
  const $expandedCategory = $('.shopping-category__expanded-list', $sideBar);
  const SIDEBAR_CATEGORY = Object.keys(SIDEBAR_DETAIL);
  const carIdx = SIDEBAR_CATEGORY.indexOf('자동차 용품');
  const EXPANDED_CATEGORY = SIDEBAR_CATEGORY.slice(carIdx);
  const expandedCategoryTemplate = EXPANDED_CATEGORY.reduce(
    (template, category) =>
      template + String.raw`<li>${category}<span class="right-arrow-icon"></span></li>`,
    ''
  );

  $expandedCategory.insertAdjacentHTML('afterbegin', expandedCategoryTemplate);

  const $headerDimCover = $('.dim-cover__in-header');

  const $navMain = $('#nav-main');
  const $shippingAddress = $('.nav-main__shipping-address', $navMain);
  const $shippingAddressModal = $('.shipping-address__modal', $shippingAddress);

  $shippingAddress.addEventListener('mouseenter', () => {
    [$shippingAddressModal, $headerDimCover].forEach((ele) => ele.classList.remove('hidden'));
  });
  $shippingAddress.addEventListener('mouseleave', () => {
    [$shippingAddressModal, $headerDimCover].forEach((ele) => ele.classList.add('hidden'));
  });

  const $login = $('.nav-main__login', $navMain);
  const $loginModal = $('.login__modal', $login);

  $login.addEventListener('mouseenter', () => {
    [$loginModal, $headerDimCover].forEach((ele) => ele.classList.remove('hidden'));
  });
  $login.addEventListener('mouseleave', () => {
    [$loginModal, $headerDimCover].forEach((ele) => ele.classList.add('hidden'));
  });

  const $navSub = $('#nav-sub');
  const $sideBarBtn = $('.side-bar-btn', $navSub);
  const $closeSideBarBtn = $('.side-bar__close-btn', $sideBar);
  const $sideBarDimCover = $('.dim-cover__in-sideBar');

  $sideBarBtn.addEventListener('click', () => {
    $sideBar.classList.add('open');
    $sideBarDimCover.classList.remove('hidden');
  });
  $closeSideBarBtn.addEventListener('click', () => {
    $sideBar.classList.remove('open');
    $sideBarDimCover.classList.add('hidden');
  });
  $sideBarDimCover.addEventListener('click', () => {
    $sideBar.classList.remove('open');
    $sideBarDimCover.classList.add('hidden');
  });

  const $expandedCategoryBtn = $('.shopping-category__expanded-btn', $sideBar);
  $expandedCategoryBtn.addEventListener('click', () => {
    if ($expandedCategory.maxHeight) {
      $expandedCategory.style.maxHeight = null;
      return;
    }
    $expandedCategory.style.maxHeight = `${$expandedCategory.scrollHeight}px`;
  });

  const $expandedCategoryCloseBtn = $('.shopping-category__close-expanded-btn', $sideBar);
  $expandedCategoryCloseBtn.addEventListener('click', () => {
    if (!$expandedCategory.maxHeight) {
      $expandedCategory.style.maxHeight = null;
      return;
    }
    $expandedCategory.style.maxHeight = `${$expandedCategory.scrollHeight}px`;
  });
};

main();
