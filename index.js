import Header from "./scripts/Header.js";
import SideBar from "./scripts/SideBar.js";
import Slider from "./scripts/Slider.js";

const main = () => {
  const header = new Header();
  const sideBar = new SideBar();
  const slider = new Slider();

  header.onHeader();
  sideBar.onSideBar();
  slider.onSlider();

  fetch("http://localhost:3001/tests")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

main();
