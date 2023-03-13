import { $, $$ } from './util/dom.js';

const main = () => {
  const $login = $('.login');
  const $loginNav = $('.login_section', $login);
  const $loginModal = $('.login_modal', $login);
  const $loginModalMore = $('.login_modal_more', $loginModal);

  $loginNav.addEventListener('mouseenter', () => {
    $loginModalMore.classList.remove('hidden');
  });
  $loginNav.addEventListener('mouseleave', () => {
    $loginModalMore.classList.add('hidden');
  });

  const $sideBarBtn = $('.side_bar_btn');
  const $sideBar = $('.side_bar');
  const $closeSideBarBtn = $('.close_side_bar_btn', $sideBar);

  $sideBarBtn.addEventListener('click', () => {
    if ($sideBar.classList.contains('close_side_bar')) $sideBar.classList.remove('close_side_bar');
    $sideBar.classList.add('open_side_bar');
  });
  $closeSideBarBtn.addEventListener('click', () => {
    if ($sideBar.classList.contains('open_side_bar')) $sideBar.classList.remove('open_side_bar');
    $sideBar.classList.add('close_side_bar');
  });
};

main();
