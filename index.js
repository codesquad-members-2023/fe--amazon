import Header from "./scripts/Header.js";
import SideBar from "./scripts/SideBar.js";
import Slider from "./scripts/Slider.js";

const main = async () => {
  const header = new Header();
  const sideBar = new SideBar();
  const slider = new Slider();

  header.onHeader();
  sideBar.onSideBar();
  slider.onSlider();
};

main();
