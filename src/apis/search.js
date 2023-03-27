const URL = import.meta.env.VITE_DEFAULT_URL;

export function getSearchData(token) {
  fetch(`${URL}/goods?q=${token}?_page=1"`, { mode: 'cors' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
