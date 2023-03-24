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

  $sideContainer.addEventListener('click', insertSidebarData.bind(this, SIDEBAR_DATA));
  $backBtn.addEventListener('click', clickBackBtn);
}

// 사이드바 여는 함수
const openSideBar = e => {
  const $sideBar = document.querySelector('.side_bar');
  const $modalBackground = document.querySelector('.modal_background');

  $sideBar.classList.add('slideRight');
  $sideBar.classList.add('flex');
  $sideBar.classList.add('hidden');
  $sideBar.classList.remove('slideLeft');
  $modalBackground.classList.remove('hidden');
  $modalBackground.style.zIndex = '1';
}

// 사이드바 닫는 함수 (메인메뉴로 돌아가게끔 재구현 필요함)
const closeSideBar = e => {
  const $sideBar = document.querySelector('.side_bar');
  const $modalBackground = document.querySelector('.modal_background');
  $sideBar.classList.add('slideLeft');

  $sideBar.addEventListener('animationend', ({ animationName, target }) => {
    if(animationName === 'slideLeft' && target.className.includes('side_bar')) {
      $sideBar.classList.add('hidden');
      $sideBar.classList.remove('flex');
      $sideBar.classList.remove('slideRight');
      $modalBackground.classList.add('hidden');
      $modalBackground.style.zIndex = 'inherit';
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
  $foldDetail.classList.remove('slideLeft');
  $foldDetail.classList.remove('hidden');
  $foldDetail.classList.add('slideRight');
}

const clickBackBtn = e => {
  const $tab = document.querySelector('.tab_content');
  if ($tab.hasChildNodes()) $tab.replaceChildren();

  const $foldDetail = document.querySelector('.fold_detail');
  $foldDetail.classList.remove('slideRight');
  $foldDetail.classList.add('slideLeft');
  $foldDetail.addEventListener('animationend', ({ animationName, target }) => {
    if(animationName === 'slideLeft' &&
    target.className.includes('fold_detail')) {
      $foldDetail.classList.add('hidden');
    }
  });
}

export { onSideBar };