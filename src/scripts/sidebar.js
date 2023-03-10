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
  sidebar.showSidebar(e);

  const closeBtn = sidebar.shadowRoot.querySelector('#sidebar-close-btn');
  const foldingBtn = sidebar.shadowRoot
    .querySelector('sidebar-main-element')
    .shadowRoot.querySelector('#folidng-btn');

  const unfoldingBtn = sidebar.shadowRoot
    .querySelector('sidebar-main-element')
    .shadowRoot.querySelector('#unfolidng-btn');

  closeBtn.addEventListener('click', () => {
    sidebar.closeSidebar();
  });

  foldingBtn.addEventListener('click', () => {
    const foldingList = sidebar.shadowRoot
      .querySelector('sidebar-main-element')
      .shadowRoot.querySelector('.folidng-list');

    foldingList.classList.add('unfolded');

    unfoldingBtn.addEventListener('click', () => {
      foldingList.classList.remove('unfolded');
    });
  });

  const container = sidebar.shadowRoot.querySelector('.container');
  const main = sidebar.shadowRoot.querySelector('sidebar-main-element');
  const sub = sidebar.shadowRoot.querySelector('sidebar-sub-element');

  const mainCategories = main.shadowRoot.querySelectorAll(
    'sidebar-category-element'
  );
  mainCategories.forEach((category) =>
    category.addEventListener('click', () => {
      container.classList.add('slide-right');
    })
  );

  sub.addEventListener('click', () => {
    sub.classList.add('hide');
  });
});
