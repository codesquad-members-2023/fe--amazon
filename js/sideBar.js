const sideMenu = document.querySelector('.side-menu')
const openButton = document.querySelector('.all-menu')
const sideMain = document.querySelector('.side-menu__main')
const carGoodsPage = document.querySelector('.side-menu__car-goods')
const simpleItemsButton = document.querySelector('.side-menu__hide-button')
const allItems = document.querySelector('.side-menu__all-items')
const allItemsButton = document.querySelector('.side-menu__show-button')


const openSideBar = () => {

  openButton.addEventListener('click', () => {
    sideMenu.style.display = 'flex'
    sideMenu.style.animation = 'slide-appear .5s'
    dim.style.display = 'block'
    dim.style.top = '-85px'
  })
}

const hideSideBar = () => {
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

const oepnAllItems = () => {


  allItemsButton.addEventListener('click', () => {
    allItems.style.display = 'block'
    allItems.style.animation = 'slow-appear-menu 1s forwards'
  })
}

const closeAllItems = () => {

  simpleItemsButton.addEventListener('click', () => {
    allItems.style.display = 'none'
    allItems.style.animation = 'slow-hide 1s'
  })
}

const openItemMenu = () => {
  const carGoodsButton = document.querySelector('.item__car-goods')

  carGoodsButton.addEventListener('click', () => {
    sideMain.style.display = 'none'
    carGoodsPage.style.display = 'block'
    carGoodsPage.style.animation = 'slide-appear-menu .5s forwards'
  })
}

const moveMain = () => {
  const backMainButton = document.querySelector('.back__main')
  
  backMainButton.addEventListener('click', () => {
    sideMain.style.display = 'block'
    carGoodsPage.style.display = 'none'
    sideMain.style.animation = 'slide-appear .5s forwards'
  })

}

const actSideBar = () => {
  openSideBar()
  hideSideBar()
  oepnAllItems()
  closeAllItems()
  openItemMenu()
  moveMain()
}

actSideBar()



