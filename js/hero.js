import $ from './$.js'
class Hero {
  constructor() {

  }

  // allow button element 가져오기
  init () {
    const directionBtn = $('.carousel-directionArrows')
    directionBtn.addEventListener('click', ({ target }) => {
      const leftBtn = '.carousel-left'
      const rightBtn = '.carousel-right'
      const clickedBtn = target.closest('div').classList

      // contains, dataset
      if (clickedBtn === leftBtn) {
        
        return
      }
      
      if (clickedBtn === rightBtn) {

        return
      }
      console.log(clickedBtn)
      
    })  
  }
}

const hreo = new Hero()
hreo.init()