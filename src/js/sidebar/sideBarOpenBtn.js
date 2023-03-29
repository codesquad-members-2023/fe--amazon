export class SideBarOpenBtn {
  constructor(sideBarLayer, dimLayer){
    this.sideBarLayer = sideBarLayer;
    this.dimLayer = dimLayer;
    this.openBtn = document.querySelector(".nav-bottom__category.select-all");
  }

  addClickEvt(){
    this.openBtn.addEventListener('click', () => {
      this.sideBarLayer.style['animation-name'] = 'slideRightWard';
      this.dimLayer.classList.add('dim__sidebar');
    });
  }
}