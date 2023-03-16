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
});

function clickCategories(sidebar) {
  const main = sidebar.shadowRoot.querySelector(
    'sidebar-main-element'
  ).shadowRoot;
  const sub = sidebar.shadowRoot.querySelector('sidebar-sub-element');

  main.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName !== 'SIDEBAR-CATEGORY-ELEMENT') return;
    const sectionId = target.closest('section').id;
    const categoryId = e.target.id;

    const submenu = menus
      .find((menu) => menu.id === sectionId)
      .categories.find((category) => category.id === categoryId).subMenu;

    sidebar.showSubSidebar();
    const sideSubContent = new SidebarSubContent(submenu);
    sub.shadowRoot.querySelector('#sidebar-sub-content').append(sideSubContent);
    goBack(sideSubContent, sidebar);
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
  const sections = sidebar.shadowRoot
    .querySelector('sidebar-main-element')
    .shadowRoot.querySelectorAll(
      'sidebar-main-section-with-folding-btn-element'
    );

  sections.forEach((section) => {
    const unfoldingBtn = section.querySelector('.unfolidng-btn');
    unfoldingBtn.addEventListener('click', () => {
      const foldingList = section.querySelector('.folding-list');
      foldingList.classList.add('unfolded');
      foldCategories(sidebar, section);
    });
  });
}

function foldCategories(sidebar, section) {
  const unfoldingBtn = section.querySelector('.folidng-btn');
  unfoldingBtn.addEventListener('click', () => {
    const foldingList = section.querySelector('.folding-list');
    foldingList.classList.remove('unfolded');
  });
}
