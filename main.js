
const dim = document.querySelector('.dim')
const shippingAddress = document.querySelector('.shipping-address')

// 하나로 합칠 수 있을까?
shippingAddress.addEventListener("mouseover", () => {
  dim.style.display = 'block'
})

shippingAddress.addEventListener("mouseout", () => {
  dim.style.display = 'none'
})
