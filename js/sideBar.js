const openSideBar = (...element) => {
  const [sideMenu, openButton] = element
  openButton.addEventListener('click', () => {
    sideMenu.style.display = 'flex'
    sideMenu.style.animation = 'slide-to-right .5s'
    dim.style.display = 'block'
    dim.style.top = '-85px'
  })
}

const hideSideBar = (...element) => {
  const [sideMenu, openButton] = element
  const closeButton = document.querySelector('.side-menu__close')
  const body = document.querySelector('body')

  closeButton.addEventListener('click', () => {
    sideMenu.style.animation = 'slide-hide .5s forwards'
    dim.style.display = 'none'
  })

  body.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !openButton.contains(e.target)) {
      sideMenu.style.animation = 'slide-hide .5s forwards'
      dim.style.display = 'none'
    }
  })
}

const openAllItems = (...element) => {
  const [allItems, allItemsButton] = element
  allItemsButton.addEventListener('click', () => {
    allItems.style.transform = 'scaleY(1)'
  })
}

const closeAllItems = (...element) => {
  const [simpleItemsButton, allItems] = element
  simpleItemsButton.addEventListener('click', () => {
    allItems.style.transform = 'scaleY(0)'
  })
}

const moveMain = (...element) => {
  const [sideMain, sideMenuDetail] = element
  const backMainButton = document.querySelector('.back__main')
  
  backMainButton.addEventListener('click', () => {
    sideMain.style.display = 'block'
    sideMain.style.animation = 'slide-to-right .5s'
    sideMenuDetail.style.display = 'none'
  })
}

const actSideBar = () => {
  const sideMenu = document.querySelector('.side-menu')
  const openButton = document.querySelector('.all-menu')
  const sideMain = document.querySelector('.side-menu__main')
  const sideMenuDetail = document.querySelector('.side-menu__detail')
  const simpleItemsButton = document.querySelector('.side-menu__hide-button')
  const allItems = document.querySelector('.side-menu__all-items')
  const allItemsButton = document.querySelector('.side-menu__show-button')

  openSideBar(sideMenu, openButton)
  hideSideBar(sideMenu, openButton)
  openAllItems(allItems, allItemsButton)
  closeAllItems(simpleItemsButton, allItems)
  moveMain(sideMain, sideMenuDetail)
}

actSideBar()
