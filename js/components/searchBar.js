import API from '../utils/server.js';

fetch(API.GET_SEARCH_DATA)
  .then((response) => response.json())
  .then((data) => console.log(data));
