import { findUpWard, findSiblingForward } from "./nodeFindFuncs.js";

export const navEvtHandler = () => {
  const nav = document.querySelector(".nav");
  const dimLayer = document.querySelector(".dim__layer");
  
  addNavMouseOverEvt(nav, dimLayer);
  addNavMouseOutEvt(nav, dimLayer);
}

const addNavMouseOverEvt = (nav, dimLayer) => {
  nav.addEventListener('mouseover', ({ target }) => {
    if(target.tagName === 'A') target.classList.add('border');
    const [_, element] = target.className.split(" ");

    displayLocationModal(element, target, dimLayer);
    maintainLocationModal(target, dimLayer);
    displayAccountModal(element, target, dimLayer);
    maintainAccountModal(target, dimLayer);
  })
}

const addNavMouseOutEvt = (nav, dimLayer) => {
  nav.addEventListener('mouseout', ({ target }) => {
    const [_, element] = target.className.split(" ");
    if(target.tagName === 'A') {
      target.classList.remove('border');
      if(element != 'select-all') dimLayer.style.display = 'none';
    };
    removeLocationModal(element, target, dimLayer);
    removeAccountModal(element, target, dimLayer);
  })
}

const displayLocationModal = (element, target, dimLayer) => {
  if(element === 'location') {
    target.lastElementChild.style.display = 'block';
    dimLayer.style.display = 'block';
  }
}

const maintainLocationModal = (target, dimLayer) => {
  if(findUpWard(target, '.modal__location')) {
    findUpWard(target, '.modal__location').style.display = 'block';
    dimLayer.style.display = 'block';
  }
}

const displayAccountModal = (element, target, dimLayer) => {
  if(element === 'account-link') {
    findSiblingForward(target, 'modal__login1').style.display = 'none';
    findSiblingForward(target, 'modal__login2').style.display = 'block';
    dimLayer.style.display = 'block';
  }
}

const maintainAccountModal = (target, dimLayer) => {
  if(findUpWard(target, '.modal__login2')) {
    findUpWard(target, '.modal__login2').style.display = 'block';
    dimLayer.style.display = 'block';
  }
}

const removeLocationModal = (element, target, dimLayer) => {
  if(element === 'location') {
    target.lastElementChild.style.display = 'none';
    dimLayer.style.display = 'none';
  }
  if(findUpWard(target, '.modal__location')){
    findUpWard(target, '.modal__location').style.display = 'none';
    dimLayer.style.display = 'none';
  }
}

const removeAccountModal = (element, target, dimLayer) => {
  if(element === 'account-link') {
    findSiblingForward(target, 'modal__login1').style.display = 'none';
    findSiblingForward(target, 'modal__login2').style.display = 'none';
    dimLayer.style.display = 'none';
  }
  if(findUpWard(target, '.modal__login2')) {
    findUpWard(target, '.modal__login2').style.display = 'none';
    dimLayer.style.display = 'none';
  }
}