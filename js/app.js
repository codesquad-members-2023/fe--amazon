import { Navigation } from "./layout/navigation.js";
import { Sidebar } from "./layout/sidebar.js";

const main = () => {
  const navigation = new Navigation({ delayTime: 1000 });
  navigation.init();

  const sidebar = new Sidebar();
  sidebar.init();
};

main();
