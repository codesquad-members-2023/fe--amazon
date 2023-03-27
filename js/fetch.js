fetch('https://67692f8a-c291-408b-a19a-368a662a00e1.mock.pstmn.io/images')
  .then((response) => response.json())
  .then((data) => console.log(data));
