import { getSearchData } from '@apis/search.js';

getSearchData('s', 1).then((data) => {
  console.log(data);
});
