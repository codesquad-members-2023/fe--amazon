const URL = import.meta.env.VITE_DEFAULT_URL;

export function getSearchData(query, page, limit = 20) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}/search?q=${query}&page=${page}&limit=${limit}`)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(response));
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          reject(new Error('데이터가 없습니다'));
        }
        resolve(data);
      });
  });
}
