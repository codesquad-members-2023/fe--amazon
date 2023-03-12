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
};

main();
