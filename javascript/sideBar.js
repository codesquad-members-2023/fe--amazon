const $every = document.getElementById('every');
const $close = document.getElementById('side_bar_close');
const $side_bar = document.querySelector('aside');

$every.addEventListener('click', e => {
  $side_bar.classList.add('expand');
  $side_bar.style.display = 'flex';
});

$close.addEventListener('click', e => {
  $side_bar.classList.add('contract');
});

$side_bar.addEventListener('animationend', (e) =>{
  if(e.animationName === 'contract') $side_bar.style.display = 'none'; //닫힌다음 사라지게하기
});