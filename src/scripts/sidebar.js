import Sidebar from '../components/Sidebar.js';
import { loginActionElement } from './action.js';
import SidebarSubContent from '../components/Sidebar/SidebarSub/SidebarSubContent.js';
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

  unfoldCategories(sidebar);
  closeSidebar(sidebar);
  clickCategories(sidebar);
  scrollSubmenu(sidebar);
});

function scrollSubmenu(sidebar) {
  const container = sidebar.shadowRoot.querySelector('.container');
  container.addEventListener('scroll', (e) => {
    const move = e.target.scrollTop;
    const sub = sidebar.shadowRoot.querySelector('sidebar-sub-element');
    sub.style.top = `${move}px`;
  });
}

function clickCategories(sidebar) {
  const main = sidebar.shadowRoot.querySelector('sidebar-main-element');
  const mainCategories = main.shadowRoot.querySelectorAll(
    'sidebar-category-element'
  );
  mainCategories.forEach((category) => {
    const sub = sidebar.shadowRoot.querySelector('sidebar-sub-element');
    category.addEventListener('click', (e) => {
      const sectionId =
        e.target.parentNode.id === 'folidng-list'
          ? e.target.parentNode.parentNode.parentNode.id
          : e.target.parentNode.id;
      const categoryId = e.target.id;
      const submenu = menus
        .find((menu) => menu.id === sectionId)
        .categories.find((category) => category.id === categoryId).subMenu;
      sidebar.showSubSidebar();

      const sideSubContent = new SidebarSubContent(submenu);
      sub.shadowRoot
        .querySelector('#sidebar-sub-content')
        .append(sideSubContent);
      goBack(sideSubContent, sidebar);
    });
  });
}

function closeSidebar(sidebar) {
  const closeBtn = sidebar.shadowRoot.querySelector('#sidebar-close-btn');
  closeBtn.addEventListener('click', () => sidebar.closeSidebar());
}

function goBack(sideSubContent, sidebar) {
  const sub = sidebar.shadowRoot.querySelector('sidebar-sub-element');
  const backBtn = sub.shadowRoot.querySelector('sidebar-back-element');
  backBtn.addEventListener('click', () => {
    sidebar.closeSubSidebar(sideSubContent);
  });
}

function unfoldCategories(sidebar) {
  const foldingBtn = sidebar.shadowRoot
    .querySelector('sidebar-main-element')
    .shadowRoot.querySelector('#unfolidng-btn');
  foldingBtn.addEventListener('click', () => {
    const foldingList = sidebar.shadowRoot
      .querySelector('sidebar-main-element')
      .shadowRoot.querySelector('#folidng-list');
    foldingList.classList.add('unfolded');
    foldingList.classList.add('slide-down');
    if (foldingList.classList.contains('slide-up'))
      foldingList.classList.remove('slide-up');
    foldCategories(sidebar);
  });
}

function foldCategories(sidebar) {
  const foldingList = sidebar.shadowRoot
    .querySelector('sidebar-main-element')
    .shadowRoot.querySelector('#folidng-list');
  const unfoldingBtn = sidebar.shadowRoot
    .querySelector('sidebar-main-element')
    .shadowRoot.querySelector('#folidng-btn');
  unfoldingBtn.addEventListener('click', () => {
    const sub = sidebar.shadowRoot.querySelector('sidebar-sub-element');
    sub.style.top = '0px';
    foldingList.classList.remove('unfolded');
    foldingList.classList.add('slide-up');
    foldingList.classList.remove('slide-down');
  });
}
