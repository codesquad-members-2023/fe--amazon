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
    const ol = document.querySelector('.carousel-viewport > ol')
  
    images.forEach(image => {
      const li = document.createElement('li')
      const img = document.createElement('img')

      li.classList.add('carousel-card')

      img.src = image.src
      img.alt = image.alt

      ol.appendChild(li)
      li.appendChild(img)
    })
  }
}

new FetchAndAllocateImages()