import $ from './common/$.js'
import dim from './common/dim.js'
import closeSearchList from './searchbar.js'

function getElements() {
  const body = $('body')
  const closeButton = $('.side-menu__close')
  const sideMenu = $('.side-menu')
  const openButton = $('.all-menu')
  const sideMain = $('.side-menu__main')
  const sideMenuDetail = $('.side-menu__detail')
  const simpleItemsButton = $('.side-menu__hide-button')
  const allItems = $('.side-menu__all-items')
  const allItemsButton = $('.side-menu__show-button')
  const backMainButton = $('.back__main')

  return {
    body,
    closeButton,
    sideMenu,
    openButton,
    sideMain,
    sideMenuDetail,
    simpleItemsButton,
    allItems,
    allItemsButton,
    backMainButton
  }
}

function addEvents() {
  const {
    body,
    closeButton,
    sideMenu,
    openButton,
    sideMain,
    sideMenuDetail,
    simpleItemsButton,
    allItems,
    allItemsButton,
    backMainButton
  } = getElements()
  
  openButton.addEventListener('click', () => {
    dim.classList.remove('hidden')
    dim.classList.add('dim-all')
    sideMenu.style.display = 'flex'
    sideMenu.style.animation = 'slide-to-right .5s'
  })

  closeButton.addEventListener('click', () => {
    sideMenu.style.animation = 'slide-hide .5s forwards'
    dim.classList.add('hidden')
    dim.classList.remove('dim-all')
  })

  allItemsButton.addEventListener('click', () => {
    allItems.style.transform = 'scaleY(1)'
  })
  
  simpleItemsButton.addEventListener('click', () => {
    allItems.style.transform = 'scaleY(0)'
  })

  backMainButton.addEventListener('click', () => {
    sideMain.style.display = 'block'
    sideMain.style.animation = 'slide-to-right .5s'
    sideMenuDetail.style.display = 'none'
  })
}

addEvents()
