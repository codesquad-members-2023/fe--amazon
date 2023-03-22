// components
import { Sidebar } from "./layout/sidebar.js";
import { Navigation } from "./layout/navigation.js"

const main = () => {
  const sidebar = new Sidebar();

  sidebar.openSidebar();
  sidebar.closeSidebar();

  const showLogin = new Navigation();
  showLogin.showLoginModal();
  showLogin.addLoginHoverData();
  showLogin.dimmed()
};

main();
