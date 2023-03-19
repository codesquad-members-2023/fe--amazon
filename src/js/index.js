import { $, $$ } from './util/dom.js';
import { SIDEBAR_DETAIL } from './constant/sideBarDetail.js';

const main = () => {
  const $sideBar = $('.side-bar');
  const $expandedShoppingCategoryList = $('.shopping-category__expanded-list', $sideBar);
  const SIDEBAR_CATEGORY = Object.keys(SIDEBAR_DETAIL);
  const carIdx = SIDEBAR_CATEGORY.indexOf('자동차 용품');
  const EXPANDED_CATEGORY = SIDEBAR_CATEGORY.slice(carIdx);
  const expandedCategoryTemplate = EXPANDED_CATEGORY.reduce(
    (template, category) =>
      template +
      String.raw`
      <li>${category}<span class="right-arrow-icon"></span></li>`,
    '',
  );

  $expandedShoppingCategoryList.insertAdjacentHTML('afterbegin', expandedCategoryTemplate);

  const $headerDimCover = $('.dim-cover__in-header');

  const $shippingAddress = $('.nav-main__shipping-address');
  const $shippingAddressModal = $('.shipping-address__modal', $shippingAddress);

  $shippingAddress.addEventListener('mouseenter', () => {
    $shippingAddressModal.classList.remove('hidden');
    $headerDimCover.classList.remove('hidden');
  });
  $shippingAddress.addEventListener('mouseleave', () => {
    $shippingAddressModal.classList.add('hidden');
    $headerDimCover.classList.add('hidden');
  });

  const $login = $('.nav-main__login');
  const $loginModal = $('.login__modal', $login);

  $login.addEventListener('mouseenter', () => {
    $loginModal.classList.remove('hidden');
    $headerDimCover.classList.remove('hidden');
  });
  $login.addEventListener('mouseleave', () => {
    $loginModal.classList.add('hidden');
    $headerDimCover.classList.add('hidden');
  });

  const $sideBarBtn = $('.side-bar-btn');
  const $closeSideBarBtn = $('.side-bar__close-btn', $sideBar);
  const $sideBarDimCover = $('.dim-cover__in-sideBar');

  $sideBarBtn.addEventListener('click', () => {
    if ($sideBar.classList.contains('close_side-bar')) $sideBar.classList.remove('close_side-bar');
    $sideBar.classList.add('open_side-bar');
    $sideBarDimCover.classList.remove('hidden');
  });
  $closeSideBarBtn.addEventListener('click', () => {
    if ($sideBar.classList.contains('open_side-bar')) $sideBar.classList.remove('open_side-bar');
    $sideBar.classList.add('close_side-bar');
    $sideBarDimCover.classList.add('hidden');
  });

  $sideBarDimCover.addEventListener('click', () => {
    if ($sideBar.classList.contains('open_side-bar')) $sideBar.classList.remove('open_side-bar');
    $sideBar.classList.add('close_side-bar');
    $sideBarDimCover.classList.add('hidden');
  });

  const $expandedShoppingCategoryBtn = $('.shopping-category__expanded-btn', $sideBar);
  $expandedShoppingCategoryBtn.addEventListener('click', () => {
    if ($expandedShoppingCategoryList.maxHeight) {
      $expandedShoppingCategoryList.style.maxHeight = null;
      return;
    }
    $expandedShoppingCategoryList.style.maxHeight = `${$expandedShoppingCategoryList.scrollHeight}px`;
  });

  const $closeExpandedShoppingCategory = $('.shopping-category__close-expanded-btn', $sideBar);
  $closeExpandedShoppingCategory.addEventListener('click', () => {
    if (!$expandedShoppingCategoryList.maxHeight) {
      $expandedShoppingCategoryList.style.maxHeight = null;
      return;
    }
    $expandedShoppingCategoryList.style.maxHeight = `${$expandedShoppingCategoryList.scrollHeight}px`;
  });
};

main();
