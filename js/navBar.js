import $ from './common/$.js'
import dim from './common/dim.js'

function navbarHandler() {
  const DELAY_TIME = 1000
  const logInModal = $('.log-in .modal')
  const logInPointer = $('.log-in .pointer')
  
  window.addEventListener('load', () => setTimeout(() => {
    onLoginModal()
  }, DELAY_TIME))
  
  function onLoginModal () {
    logInModal.setAttribute('id', 'modal__visibility')
    logInPointer.setAttribute('id', 'modal__visibility')
  }
  
  const logInSection = $('.log-in')
  const extendeLoginModal = $('.modal__extension')
  const extendeLoginModalPointer = $('.modal__extension .pointer')
  
  logInSection.addEventListener('mouseover', () => {
    logInModal.classList.add('hidden')
    dim.classList.remove('hidden')
    extendeLoginModal.classList.remove('hidden')
    extendeLoginModalPointer.style.opacity = '1'
  })
  
  logInSection.addEventListener('mouseout', () => {
    dim.classList.add('hidden')
    extendeLoginModal.classList.add('hidden')
  })
  
  const shippingAddress = $('.shipping-address')
  shippingAddress.addEventListener('mouseover', () => {
    dim.classList.remove('hidden')
  })
  shippingAddress.addEventListener('mouseout', () => {
    dim.classList.add('hidden')
  })
}

navbarHandler()
