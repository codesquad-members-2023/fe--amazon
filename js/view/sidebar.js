import { _ } from './utility.js'

const onSideBar = (SIDEBAR_DATA) => {
  const $every = document.querySelector('.every');
  const $close = document.getElementById('side_bar_close');
  const $modalBackground = document.querySelector('.modal_background');
  const $viewAll = document.getElementById('view_all');
  const $viewSimple = document.getElementById('view_simple');
  const $sideContainer = document.querySelector('.side_container');
  const $backBtn = document.getElementById('back_btn');

  $every.addEventListener('click', openSideBar);
  $close.addEventListener('click', closeSideBar);
  $modalBackground.addEventListener('click', closeSideBar);

  $viewAll.addEventListener('click', toggleFoldContent);
  $viewSimple.addEventListener('click', toggleFoldContent);

  $sideContainer.addEventListener('click', e => insertSidebarData(e, SIDEBAR_DATA));
  $backBtn.addEventListener('click', clickBackBtn);
}

// 사이드바 여는 함수
const openSideBar = e => {
  const $sideBar = document.querySelector('.side_bar');
  const $modalBackground = document.querySelector('.modal_background');

  _.addClasses($sideBar, 'slideRight', 'flex', 'hidden');
  _.removeClasses($sideBar, 'slideLeft');
  _.removeClasses($modalBackground, 'hidden');
  $modalBackground.style.zIndex = '10';
}

// 사이드바 닫는 함수 (메인메뉴로 돌아가게끔 재구현 필요함)
const closeSideBar = e => {
  const $sideBar = document.querySelector('.side_bar');
  const $modalBackground = document.querySelector('.modal_background');
  $sideBar.classList.add('slideLeft');

  $sideBar.addEventListener('animationend', ({ animationName, target }) => {
    if(animationName === 'slideLeft' && target.className.includes('side_bar')) {
      _.addClasses($sideBar, 'hidden');
      _.removeClasses($sideBar, 'flex', 'slideRight');
      _.addClasses($modalBackground, 'hidden');
      $modalBackground.style.zIndex = '1';
    }
  });
}

const toggleFoldContent = ({ target }) => {
  const $foldContent = document.querySelector('.fold_content');
  const $viewAll = document.getElementById('view_all');

  if ($foldContent.style.maxHeight || target.id === 'view_simple'){
    $foldContent.style.maxHeight = null;
    $viewAll.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Bottom.svg\">"
  } else {
    $viewAll.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Up.svg\">"
    $foldContent.style.maxHeight = $foldContent.scrollHeight + "px";
  }
}

const insertSidebarData = ({ target }, SIDEBAR_DATA) => {
  const isLI = target.closest('li');
  const isId = target.id !== 'view_all' && target.id !== 'view_simple';

  if(!isLI || !isId) return;
  if(isLI.tagName === 'LI') {
    const title = isLI.innerText;
    const isTitle = SIDEBAR_DATA.hasOwnProperty(title);
    if(!isTitle) return;
    insertDetailData(title, SIDEBAR_DATA);
  }
}

const insertDetailData = (title, SIDEBAR_DATA) => {
  const $tab = document.querySelector('.tab_content');
  const $foldDetail = document.querySelector('.fold_detail');

  const sideBarData = SIDEBAR_DATA[title];
  const dataLI = sideBarData.reduce((list, data) => {
    list += `<li>${data}</li>`;
    return list;
  }, `<h3>${title}</h3><ul>`) + `</ul>`;

  $tab.insertAdjacentHTML('beforeend', dataLI);
  _.removeClasses($foldDetail, 'slideLeft', 'hidden');
  _.addClasses($foldDetail, 'slideRight');
}

const clickBackBtn = e => {
  const $tab = document.querySelector('.tab_content');
  if ($tab.hasChildNodes()) $tab.replaceChildren();

  const $foldDetail = document.querySelector('.fold_detail');
  _.removeClasses($foldDetail, 'slideRight');
  _.addClasses($foldDetail, 'slideLeft');
  $foldDetail.addEventListener('animationend', ({ animationName, target }) => {
    if(animationName === 'slideLeft' &&
    target.className.includes('fold_detail')) {
      _.addClasses($foldDetail, 'hidden');
    }
  });
}

export { onSideBar };