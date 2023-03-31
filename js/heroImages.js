import $ from './common/$.js'
import BASE_URL from './common/api.js'

class FetchAndAllocateImages {
  constructor() {
    this.getImages(BASE_URL)
  }

  getImages(url) {
    fetch(`${url}/images`)
      .then(response => response.json())
      .then(data => {
        const heroImages = data.data
        this.allocateImages(heroImages)
      }
    )
  }

  allocateImages(images) {
    const ol = $('.carousel-viewport > ol')
  
    images.forEach((image, index) => {
      const li = document.createElement('li')
      const img = document.createElement('img')

      li.classList.add('carousel-card')
      li.dataset.index = `${index + 1}`
      
      img.src = image.src
      img.alt = image.alt

      ol.appendChild(li)
      li.appendChild(img)
    })

    const firstImage = ol.firstElementChild.cloneNode(true)
    const lastImage = ol.lastElementChild.cloneNode(true)

    ol.insertAdjacentElement('afterbegin', lastImage)
    ol.insertAdjacentElement('beforeend', firstImage)
  }
}

new FetchAndAllocateImages()
