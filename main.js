const logInModal = document.querySelector('.log-in .modal')

window.addEventListener('DOMContentLoaded', () => {
  logInModal.style.animation = 'show-modal 1s forwards'
  logInModal.style.animationDelay = '1s'
})

const dim = document.querySelector('.dim')
const shippingAddress = document.querySelector('.shipping-address')

// 하나로 합칠 수 있을까?
shippingAddress.addEventListener("mouseover", () => {
  dim.style.display = 'block'
})

shippingAddress.addEventListener("mouseout", () => {
  dim.style.display = 'none'
})