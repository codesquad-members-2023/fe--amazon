import $ from './common/$.js'
class Hero {
  #viewport
  #imageSize
  #viewportPosition
  
  init () {
    const directionBtn = $('.carousel-directionArrows')
    this.#viewport = directionBtn.previousElementSibling.firstElementChild
    this.#imageSize = 1500
    this.#viewportPosition = 0

    directionBtn.addEventListener('click', ({ target }) => {
      const [leftButton, rightButton] = 
        ['.carousel-left', '.carousel-right'].map(className => 
          target.closest(className)
        )

      if (leftButton) this.slidePrev()
      if (rightButton) this.slideNext()
    })  
  }
  
  slidePrev() {
    this.#viewportPosition += this.#imageSize
    this.#viewport.style.transform = `translateX(${this.#viewportPosition}px)`
  }

  slideNext() {
    this.#viewportPosition -= this.#imageSize
    this.#viewport.style.transform = `translateX(${this.#viewportPosition}px)`
  }
}

const hreo = new Hero()
hreo.init()
