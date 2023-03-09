const openButton = document.querySelector('.all-menu')
const sideMenu = document.querySelector('.side-menu')


openButton.addEventListener('click', () => {
  sideMenu.style.display = 'flex'
  sideMenu.style.animation = 'slide-appear .5s'
  dim.style.display = 'block'
  dim.style.top = '-85px'
})

const closeButton = document.querySelector('.side-menu__close')

closeButton.addEventListener('click', () => {
  sideMenu.style.animation = 'slide-hide .5s forwards'
  dim.style.display = 'none'
})

const body = document.querySelector('body')
body.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !openButton.contains(e.target)) {
    sideMenu.style.animation = 'slide-hide .5s forwards'
    dim.style.display = 'none'
  }
})

const allItems = document.querySelector('.side-menu__all-items')
const allItemsButton = document.querySelector('.side-menu__show-button')

allItemsButton.addEventListener('click', () => {
  allItems.style.display = 'block'
  allItems.style.animation = 'slow-appear 1s forwards'
})

const simpleItemsButton = document.querySelector('.side-menu__hide-button')
simpleItemsButton.addEventListener('click', () => {
  allItems.style.display = 'none'
  allItems.style.animation = 'slow-hide 1s'
})