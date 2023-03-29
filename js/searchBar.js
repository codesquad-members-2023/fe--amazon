function getData() {
  fetch("http://localhost:3000/goods")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

getData();

const homeHeaderSearch = document.querySelector(".homeHeader__search");
const headerFlyout = document.querySelector("#header-flyout");
const dimmForHeader = document.querySelector(".dimm--header");

const showHeaderFlyout = () => {
  headerFlyout.classList.remove("hide-opacity");
  headerFlyout.classList.add("show-opacity");
  dimmForHeader.classList.remove("hidden");
};

const hideHeaderFlyput = () => {
  headerFlyout.classList.add("hide-opacity");
  headerFlyout.classList.remove("show-opacity");
  dimmForHeader.classList.add("hidden");
};

homeHeaderSearch.addEventListener("click", showHeaderFlyout);
dimmForHeader.addEventListener("click", hideHeaderFlyput);

/*
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/goods');
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`Error ${xhr.status} occurred while receiving the data.`);
    }
  };
  xhr.send();
}

getData();
*/
