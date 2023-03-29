export function customFetch({ url, method, body, headers }) {
  return fetch(url, { method, body, headers })
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
