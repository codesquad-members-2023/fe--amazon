function getData() {
  fetch("http://localhost:3000/goods")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

getData();
