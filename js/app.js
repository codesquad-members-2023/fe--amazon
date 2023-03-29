import { Navigation } from "./layout/navigation.js";
import { Sidebar } from "./layout/sidebar.js";

const main = () => {
  const navigation = new Navigation();
  navigation.init();

  const sidebar = new Sidebar();
  sidebar.init();
};

main();
