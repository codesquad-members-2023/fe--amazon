const $every = document.getElementById('every');
const $close = document.getElementById('side_bar_close');
const $side_bar = document.querySelector('aside');
const $side_bar_menu = document.querySelectorAll('.side_bar_container li');
const $view_all = document.getElementById('view_all');
const $view_close = document.getElementById('view_close');
const $unfold_content = document.querySelector('.unfold_content');
const $view_detail = document.querySelector('.view_detail');
const $back_btn = document.getElementById('back_btn');
const $car_supply_tab = document.getElementById('car_supply_tab');
const $car_supply = document.getElementById('car_supply');

$every.addEventListener('click', e => {
  const $modal_bg = document.querySelector('.modal_background');
  $side_bar.classList.add('expand');
  $side_bar.classList.remove('contract');
  $side_bar.style.display = 'flex';
  $modal_bg.classList.remove('hidden');
  $modal_bg.style.zIndex = '1';
});

$close.addEventListener('click', e => {
  $side_bar.classList.add('contract');
});

$side_bar.addEventListener('animationend', e => {
  if(e.animationName === 'contract') {
    $side_bar.style.display = 'none';
    $side_bar.classList.remove('expand');
    $modal_bg.classList.add('hidden');
    $modal_bg.style.zIndex = 'inherit';
  }
});

$view_all.addEventListener('click',e => {
  if ($unfold_content.style.maxHeight){
    $unfold_content.style.maxHeight = null;
    $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Bottom.svg\">"
  } else {
    $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Up.svg\">"
    $unfold_content.style.maxHeight = $unfold_content.scrollHeight + "px";
  }
});

$view_close.addEventListener('click', e => {
  $unfold_content.style.maxHeight = null;
  $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Bottom.svg\">"
});

$car_supply_tab.addEventListener('click', e => {
  $view_detail.classList.remove('fadeInLeftOut');
  $view_detail.classList.add('fadeInLeft');
  $view_detail.classList.remove('hidden');
});

$back_btn.addEventListener('click', e => {
  $view_detail.classList.remove('fadeInLeft');
  $view_detail.classList.add('fadeInLeftOut');
});

$view_detail.addEventListener('animationend', e => {
  if(e.animationName === 'fadeInLeftOut') {
    $view_detail.classList.add('hidden');
  }
});