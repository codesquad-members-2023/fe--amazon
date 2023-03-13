const dim = document.querySelector('.dim')
const shippingAddress = document.querySelector('.shipping-address')
const logInSection = document.querySelector('.log-in')
const logInModal = document.querySelector('.log-in .modal')

const showLogInModal = () => {
  window.addEventListener('DOMContentLoaded', () => {
    logInModal.style.animation = 'slow-appear 1s forwards'
    logInModal.style.animationDelay = '1s'
  })
}

const extendLogInModal = () => {
  logInSection.addEventListener('mouseover', () => {
    logInModal.style.display = 'none'
    showDim(logInSection)
  })  
}

const showDim = (element) => {
  element.addEventListener("mouseover", () => {
    dim.style.display = 'block'
  })
}
const hideDim = (element) => {
  element.addEventListener("mouseout", () => {
    dim.style.display = 'none'
  })
}

const actNavBar = () => {
  showLogInModal()
  extendLogInModal()
  showDim(shippingAddress)
  hideDim(shippingAddress)
  hideDim(logInSection)
}

actNavBar()