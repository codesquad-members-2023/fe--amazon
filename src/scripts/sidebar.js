import Sidebar from '../components/Sidebar.js';
import { loginActionElement } from './modals.js';
import SidebarSubContent from '../components/Sidebar/SidebarSubContent.js';
import { menus } from '../data/menu.js';

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
      .shadowRoot.querySelector('#folidng-list');

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
  const backBtn = sub.shadowRoot.querySelector('sidebar-back-element');

  mainCategories.forEach((category) =>
    category.addEventListener('click', (e) => {
      const sectionId =
        e.target.parentNode.id === 'folidng-list'
          ? e.target.parentNode.parentNode.parentNode.id
          : e.target.parentNode.id;
      const categoryId = e.target.id;

      const submenu = menus
        .find((menu) => menu.id === sectionId)
        .categories.find((category) => category.id === categoryId).subMenu;

      container.classList.add('slide-right');
      const sideSubContent = new SidebarSubContent(submenu);

      sub.shadowRoot
        .querySelector('#sidebar-sub-content')
        .append(sideSubContent);

      backBtn.addEventListener('click', () => {
        container.classList.remove('slide-right');
        sideSubContent.remove();
      });
    })
  );
});
