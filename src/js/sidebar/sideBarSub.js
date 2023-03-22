export const makeSubSideBar = (data, categoryId, contentsId) => {
  let str = `<div class="sidebar__menu sub" data-contents-id="${contentsId}">
  <div class="sidebar__category sub">
    <div class="sidebar__category__menu">
      <a href="" class="sidebar__contents__btn close-right-menu" onclick="return false;">
        <img src="asset/leftdir.svg" alt="" class="sidebar__submenu btn close-right-menu">
        주메뉴
      </a>
    <div class="sidebar__category__title">${contentsId}</div>`;

  let targetCategory;
  data.forEach(({id, categories}) => {
    if(id === categoryId) {
      targetCategory = categories;
    }
  });

  let targetSubMenu;
  targetCategory.forEach(({id, subMenu}) => {
    if(id === contentsId) targetSubMenu = subMenu;
  })

  targetSubMenu.forEach(({categories}) => {
    categories.forEach(element => {
      const tag = `<a href="" class="sidebar__contents sub">${element}</a>`
      str += tag;
    })
  })
  str += `</div></div></div>`
  return str;
}


