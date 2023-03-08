const logInModal = document.querySelector('.log-in .modal')

window.addEventListener('DOMContentLoaded', () => {
  // TODO: 1초 뒤에 애니메이션 효과와 함께 block 되게
  logInModal.style.display = 'block'
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