export const navEvtHandler = (dimLayer, findUpWard, findSiblingForward) => {
  const nav = document.querySelector('.nav');
  
  nav.addEventListener('mouseover', (evt) => {
    const ontarget = evt.target;
  
    if(ontarget.tagName === 'A') ontarget.classList.add('border');
    
    const [parent, element] = ontarget.className.split(" ");
    
    if(element === 'location') {
      ontarget.lastElementChild.style.display = 'block';
      dimLayer.style.display = 'block';
    }
    if(findUpWard(ontarget, '.modal__location')) {
      findUpWard(ontarget, '.modal__location').style.display = 'block';
      dimLayer.style.display = 'block';
    }
    if(element === 'account-link') {
      findSiblingForward(ontarget, 'modal__login1').style.display = 'none';
      findSiblingForward(ontarget, 'modal__login2').style.display = 'block';
      dimLayer.style.display = 'block';
    }
    if(findUpWard(ontarget, '.modal__login2')) {
      findUpWard(ontarget, '.modal__login2').style.display = 'block';
      dimLayer.style.display = 'block';
    }
  })
  
  nav.addEventListener('mouseout', (evt) => {
    const ontarget = evt.target;
    const [parent, element] = ontarget.className.split(" ");
  
    if(ontarget.tagName === 'A') {
      ontarget.classList.remove('border');
      if(element != 'select-all') dimLayer.style.display = 'none';
    }
    if(element === 'location') {
      ontarget.lastElementChild.style.display = 'none';
      dimLayer.style.display = 'none';
    }
    if(findUpWard(ontarget, '.modal__location')){
      findUpWard(ontarget, '.modal__location').style.display = 'none';
      dimLayer.style.display = 'none';
    }
    if(element === 'account-link') {
      findSiblingForward(ontarget, 'modal__login1').style.display = 'none';
      findSiblingForward(ontarget, 'modal__login2').style.display = 'none';
      dimLayer.style.display = 'none';
    }
    if(findUpWard(ontarget, '.modal__login2')) {
      findUpWard(ontarget, '.modal__login2').style.display = 'none';
      dimLayer.style.display = 'none';
    }
  })
}