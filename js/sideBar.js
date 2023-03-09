
const openButton = document.querySelector('.all-menu')
const sideMenu = document.querySelector('.side-menu')

openButton.addEventListener('click', () => {
  sideMenu.style.display = 'block'
})

const closeButton = document.querySelector('.side-menu__close')

closeButton.addEventListener('click', () => {
  sideMenu.style.display = 'none'
})