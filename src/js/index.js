import { headerEventMainHandler } from './header.js';
import { sidebarEventMainHandler } from './sidebar.js';

const main = () => {
  headerEventMainHandler();
  sidebarEventMainHandler();
};

main();
