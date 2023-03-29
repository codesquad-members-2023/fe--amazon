import axios from 'axios';

function postTest() {
  axios
    .post('http://localhost:3000/data', { data: { title: '테스트' } })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function bundleInsert() {
  datas.forEach((v) => {
    axios
      .post('http://localhost:3000/data', { title: v })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

// postTest();
// bundleInsert();
