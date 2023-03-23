import { LOGIN_DETAIL } from './data/loginDetailData.js';

const insertLoginDetailData = () => {
  const $content = document.querySelectorAll('.login_detail > .content div');
  $content.forEach(data => {
    const loginData = LOGIN_DETAIL[data.className];
    const title = `<h3>${loginData['title']}</h3>`;
    const contents = loginData['content'];
    const content = contents.reduce((list, data) => {
      list += `<li>${data}</li>`;
      return list;
    }, `<ul>`) + `</ul>`;
  const $contentDiv = document.querySelector(`.${data.className}`);
  $contentDiv.insertAdjacentHTML('beforeend', title + content);
  });
}

export { insertLoginDetailData };