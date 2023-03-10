import Sidebar from '../components/Sidebar.js';
import { loginActionElement } from './modals.js';
import SidebarSub from '../components/Sidebar/SidebarSub.js';

const showAllBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#showAllBtn');

showAllBtn.addEventListener('click', (e) => {
  if (loginActionElement) {
    loginActionElement.closeAction();
  }

  const sidebar = new Sidebar();
  sidebar.showSidebar(e);

  sidebar.shadowRoot
    .querySelector('#sidebar-close-btn')
    .addEventListener('click', () => {
      sidebar.closeSidebar();
    });

  const container = sidebar.shadowRoot.querySelector('.container');
  const main = sidebar.shadowRoot.querySelector('sidebar-main-element');
  const sub = sidebar.shadowRoot.querySelector('sidebar-sub-element');

  main.addEventListener('click', () => {
    sub.addEventListener('click', () => {});
  });
});
