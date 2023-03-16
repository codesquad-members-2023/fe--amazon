import { $, $$ } from './util/dom.js';
import { SIDEBAR_DETAIL } from './constant/sideBarDetail.js';

const main = () => {
  const $sideBar = $('.side_bar');
  const $expandedShoppingCategoryList = $('.expanded_shopping_category_list', $sideBar);
  const SIDEBAR_CATEGORY = Object.keys(SIDEBAR_DETAIL);
  const carIdx = SIDEBAR_CATEGORY.indexOf('자동차 용품');
  const EXPANDED_CATEGORY = SIDEBAR_CATEGORY.slice(carIdx);
  const expandedCategoryTemplate = EXPANDED_CATEGORY.reduce(
    (template, category) =>
      template +
      String.raw`
      <li>${category}<span class="right_arrow_icon"></span></li>`,
    ''
  );

  $expandedShoppingCategoryList.insertAdjacentHTML('afterbegin', expandedCategoryTemplate);

  const $headerDimCover = $('.dim_cover_in_header');

  const $shippingAddress = $('.shipping_address');
  const $shippingAddressModal = $('.shipping_address_modal', $shippingAddress);

  $shippingAddress.addEventListener('mouseenter', () => {
    $shippingAddressModal.classList.remove('hidden');
    $headerDimCover.classList.remove('hidden');
  });
  $shippingAddress.addEventListener('mouseleave', () => {
    $shippingAddressModal.classList.add('hidden');
    $headerDimCover.classList.add('hidden');
  });

  const $login = $('.login');
  const $loginModal = $('.login_modal', $login);

  $login.addEventListener('mouseenter', () => {
    $loginModal.classList.remove('hidden');
    $headerDimCover.classList.remove('hidden');
  });
  $login.addEventListener('mouseleave', () => {
    $loginModal.classList.add('hidden');
    $headerDimCover.classList.add('hidden');
  });

  const $sideBarBtn = $('.side_bar_btn');
  const $closeSideBarBtn = $('.close_side_bar_btn', $sideBar);
  const $sideBarDimCover = $('.dim_cover_in_sideBar');

  $sideBarBtn.addEventListener('click', () => {
    if ($sideBar.classList.contains('close_side_bar')) $sideBar.classList.remove('close_side_bar');
    $sideBar.classList.add('open_side_bar');
    $sideBarDimCover.classList.remove('hidden');
  });
  $closeSideBarBtn.addEventListener('click', () => {
    if ($sideBar.classList.contains('open_side_bar')) $sideBar.classList.remove('open_side_bar');
    $sideBar.classList.add('close_side_bar');
    $sideBarDimCover.classList.add('hidden');
  });

  $sideBarDimCover.addEventListener('click', () => {
    if ($sideBar.classList.contains('open_side_bar')) $sideBar.classList.remove('open_side_bar');
    $sideBar.classList.add('close_side_bar');
    $sideBarDimCover.classList.add('hidden');
  });

  const $expandedShoppingCategoryBtn = $('.expanded_shopping_category_btn', $sideBar);
  $expandedShoppingCategoryBtn.addEventListener('click', () => {
    if ($expandedShoppingCategoryList.maxHeight) {
      $expandedShoppingCategoryList.style.maxHeight = null;
      return;
    }
    $expandedShoppingCategoryList.style.maxHeight = `${$expandedShoppingCategoryList.scrollHeight}px`;
  });

  const $closeExpandedShoppingCategory = $('.close_expanded_shopping_category_btn', $sideBar);
  $closeExpandedShoppingCategory.addEventListener('click', () => {
    if (!$expandedShoppingCategoryList.maxHeight) {
      $expandedShoppingCategoryList.style.maxHeight = null;
      return;
    }
    $expandedShoppingCategoryList.style.maxHeight = `${$expandedShoppingCategoryList.scrollHeight}px`;
  });
};

main();
