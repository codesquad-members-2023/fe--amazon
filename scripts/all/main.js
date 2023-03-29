import { Sidebar } from "../sidebar/sidebar.js";
import { SidebarInputData } from "../sidebar/sidebarInputData.js";
const main = () => {
  new Sidebar().init();
  new SidebarInputData().init();
};

main();
