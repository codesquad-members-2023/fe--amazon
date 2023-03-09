import Sidebar from '../components/Sidebar.js';
import { loginActionElement } from './modals.js';

const showAllBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#showAllBtn');

showAllBtn.addEventListener('click', (e) => {
  if (loginActionElement) {
    loginActionElement.closeAction();
  }

  const sidebar = new Sidebar();
  sidebar.showAction(e);

  sidebar.shadowRoot
    .querySelector('#sidebar-close-btn')
    .addEventListener('click', () => {
      sidebar.closeAction();
    });

  const main = sidebar.shadowRoot.querySelector('.main');
  const sub = sidebar.shadowRoot.querySelector('.sub');
  main.addEventListener('click', () => {
    sub.classList.remove('hide');
  });

  sub.addEventListener('click', () => {
    sub.classList.add('hide');
  });
});
