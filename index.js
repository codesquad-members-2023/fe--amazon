import Header from "./scripts/Header.js";
import SideBar from "./scripts/SideBar.js";

const main = () => {
  const header = new Header();
  const sideBar = new SideBar();

  header.onHeader();
  sideBar.onSideBar();
};

main();
