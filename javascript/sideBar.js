const sideBarEventHandler = () => {
  const $every = document.querySelector('.every');
  const $close = document.getElementById('side_bar_close');
  const $modal_bg = document.querySelector('.modal_background');
  const $view_all = document.getElementById('view_all');
  const $view_simple = document.getElementById('view_simple');
  const $side_container = document.querySelector('.side_container');
  const $back_btn = document.getElementById('back_btn');

  $every.addEventListener('click', openSideBar);
  $close.addEventListener('click', closeSideBar);
  $modal_bg.addEventListener('click', closeSideBar);
  $view_all.addEventListener('click', clickViewAll);
  $view_simple.addEventListener('click', clickViewSimple);
  $side_container.addEventListener('click', insertDetailDataHandler);
  $back_btn.addEventListener('click', clickBackBtnHandler);
}

// 사이드바 여는 함수
const openSideBar = e => {
  const $side_bar = document.querySelector('.side_bar');
  const $modal_bg = document.querySelector('.modal_background');

  $side_bar.classList.add('slideRight');
  $side_bar.classList.remove('slideLeft');
  $side_bar.style.display = 'flex';
  $modal_bg.classList.remove('hidden');
  $modal_bg.style.zIndex = '1';
}

// 사이드바 닫는 함수
const closeSideBar = e => {
  const $side_bar = document.querySelector('.side_bar');
  const $modal_bg = document.querySelector('.modal_background');

  $side_bar.classList.add('slideLeft');
  $side_bar.addEventListener('animationend', ({animationName, target}) => {
    if(animationName === 'slideLeft' && target.className.includes('side_bar')) {
      $side_bar.style.display = 'none';
      $side_bar.classList.remove('slideRight');
      $modal_bg.classList.add('hidden');
      $modal_bg.style.zIndex = 'inherit';
    }
  });
}

const clickViewAll = e => {
  const $fold_content = document.querySelector('.fold_content');
  const $view_all = document.getElementById('view_all');

  if ($fold_content.style.maxHeight){
    $fold_content.style.maxHeight = null;
    $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Bottom.svg\">"
  } else {
    $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Up.svg\">"
    $fold_content.style.maxHeight = $fold_content.scrollHeight + "px";
  }
}

const clickViewSimple = e => {
  const $fold_content = document.querySelector('.fold_content');
  const $view_all = document.getElementById('view_all');
  $fold_content.style.maxHeight = null;
  $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Bottom.svg\">"
}

const insertDetailDataHandler = e => {
  const target = e.target;
  const isLI = target.closest('li');
  const isId = target.id !== 'view_all' && target.id !== 'view_simple';

  if(isLI === null) return;
  const title = isLI.innerText;
  const isTitle = SIDEBAR_DETAIL.hasOwnProperty(title);

  if(isTitle && isId && isLI.tagName === 'LI') {
    const $tab = document.querySelector('.tab_content');
    const $fold_detail = document.querySelector('.fold_detail');
    if ($tab.hasChildNodes()) $tab.replaceChildren();

    const data = SIDEBAR_DETAIL[title];
    const text = data.reduce((acc, cur) => {
      acc += `<li>${cur}</li>`;
      return acc;
    }, `<h3>${title}</h3><ul>`) + `</ul>` ;

    $tab.insertAdjacentHTML('beforeend', text);
    $fold_detail.classList.remove('slideLeft');
    $fold_detail.classList.add('slideRight');
    $fold_detail.classList.remove('hidden');
  }
}

const clickBackBtnHandler = e => {
  const $fold_detail = document.querySelector('.fold_detail');
  $fold_detail.classList.remove('slideRight');
  $fold_detail.classList.add('slideLeft');
  $fold_detail.addEventListener('animationend', ({animationName, target}) => {
    if(animationName === 'slideLeft' && target.className.includes('fold_detail')) {
      $fold_detail.classList.add('hidden');
    }
  });
}

sideBarEventHandler();