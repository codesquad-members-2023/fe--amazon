function getData() {
  fetch("http://localhost:3000/goods")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

getData();

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
