import { customFetch } from './index.js';
const URL = import.meta.env.VITE_DEFAULT_URL;

export function getSearchDataAPI(query, page, limit = 20) {
  const url = `${URL}/search?q=${query}&page=${page}&limit=${limit}`;
  return customFetch({ url, method: 'GET' });
}

export function getSearchRecommendItemsAPI(limit) {
  const url = `${URL}/search-recommend?limit=${limit}`;
  return customFetch({ url, method: 'GET' });
}
