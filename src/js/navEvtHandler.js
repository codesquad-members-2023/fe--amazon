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
    if(findUpWard(target, '.nav-top__elements.location')){
      displayLocationModal(target);
      onDim(dimLayer);
    }
    if(findUpWard(target, '.nav-top__elements.account-link')){
      displayAccountModal(target);
      onDim(dimLayer);
    }
    if(findUpWard(target, '.modal__login__detail')){
      maintainAccountModal(target);
      onDim(dimLayer);
    }
  })
}

const addNavMouseOutEvt = (nav, dimLayer) => {
  nav.addEventListener('mouseout', ({ target }) => {
    if(target.tagName === 'A') target.classList.remove('border');
    if(findUpWard(target, '.nav-top__elements.location')){
      removeLocationModal(target);
      offDim(dimLayer);
    }
    if(findUpWard(target, '.nav-top__elements.account-link') || findUpWard(target, '.modal__login__detail')){
      removeAccountModal(target);
      offDim(dimLayer);
    }
  })
}

const displayLocationModal = (target) => {
  const locationNode = findUpWard(target, '.nav-top__elements.location');
  findSiblingForward(locationNode.firstChild, 'modal__location').style.display = 'block';
}

const displayAccountModal = (target) => {
  const loginModal = findUpWard(target, '.nav-top__elements.account-link');
  findSiblingForward(loginModal, 'modal__login').style.display = 'none';
  findSiblingForward(loginModal, 'modal__login__detail').style.display = 'block';
}

const maintainAccountModal = target => findUpWard(target, '.modal__login__detail').style.display = 'block';

const removeLocationModal = target => findUpWard(target, '.nav-top__elements.location').lastElementChild.style.display = 'none';
const removeAccountModal = (target) => {
  const navTop = findUpWard(target, '.nav-top__inner-wrap');
  const navTopFirstNode = navTop.firstChild;
  findSiblingForward(navTopFirstNode, 'modal__login').style.display = 'none';
  findSiblingForward(navTopFirstNode, 'modal__login__detail').style.display = 'none';
}

const onDim = (dimLayer) => dimLayer.classList.add('dim__main');
const offDim = (dimLayer) => dimLayer.classList.remove('dim__main');