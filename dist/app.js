"use strict";
const $ = document.querySelector.bind(document);
const showLoginAdditional = () => {
    $('.account-list').addEventListener('mouseover', (e) => {
        $('.login__additional--hover').style.display = 'block';
        $('.login__content').style.height = '1000%';
        $('.wrapper__empty-gray').style.display = 'block';
    });
    $('.account-list').addEventListener('mouseout', (e) => {
        $('.login__additional--hover').style.display = 'none';
        $('.login__content').style.height = '300%';
    });
};
showLoginAdditional();
