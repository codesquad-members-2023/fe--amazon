import { customFetch } from './index.js';
const URL = import.meta.env.VITE_DEFAULT_URL;

export function getSearchDataAPI(query, page, limit = 20) {
  const url = `${URL}/search?q=${query}&page=${page}&limit=${limit}`;
  const method = 'GET';
  return customFetch({ url, method });
}

export function getSearchRecommendItemsAPI(limit) {
  return fetch(`${URL}/search-recommend?limit=${limit}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response);
      }
      return response.json();
    })
    .catch((error) => {
      throw Error(error.message);
    });
}
