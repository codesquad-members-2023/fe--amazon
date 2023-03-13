const $every = document.querySelector('.every');
const $close = document.getElementById('side_bar_close');
const $side_bar = document.querySelector('.side_bar');
const $view_all = document.getElementById('view_all');
const $view_simple = document.getElementById('view_simple');
const $fold_content = document.querySelector('.fold_content');
const $view_detail = document.querySelector('.view_detail');
const $back_btn = document.getElementById('back_btn');
const $car_supply_tab = document.getElementById('car_supply_tab');
// const $car_supply = document.getElementById('car_supply');

$every.addEventListener('click', e => {
  const $modal_bg = document.querySelector('.modal_background');
  $side_bar.classList.add('slideRight');
  $side_bar.classList.remove('slideLeft');
  $side_bar.style.display = 'flex';
  $modal_bg.classList.remove('hidden');
  $modal_bg.style.zIndex = '1';
});

$close.addEventListener('click', e => {
  $side_bar.classList.add('slideLeft');
});

$side_bar.addEventListener('animationend', e => {
  if(e.animationName === 'slideLeft' && e.target.className.includes('side_bar')) {
    $side_bar.style.display = 'none';
    $side_bar.classList.remove('slideRight');
    $modal_bg.classList.add('hidden');
    $modal_bg.style.zIndex = 'inherit';
  }
});

$view_all.addEventListener('click',e => {
  if ($fold_content.style.maxHeight){
    $fold_content.style.maxHeight = null;
    $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Bottom.svg\">"
  } else {
    $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Up.svg\">"
    $fold_content.style.maxHeight = $fold_content.scrollHeight + "px";
  }
});

$view_simple.addEventListener('click', e => {
  $fold_content.style.maxHeight = null;
  $view_all.lastElementChild.outerHTML = "<img src=\"/asset/images/vectors/Bottom.svg\">"
});

$car_supply_tab.addEventListener('click', e => {
  $view_detail.classList.remove('slideLeft');
  $view_detail.classList.add('slideRight');
  $view_detail.classList.remove('hidden');
});

$back_btn.addEventListener('click', e => {
  $view_detail.classList.remove('slideRight');
  $view_detail.classList.add('slideLeft');
});

$view_detail.addEventListener('animationend', e => {
  if(e.animationName === 'slideLeft' && e.target.className.includes('view_detail')) {
    $view_detail.classList.add('hidden');
  }
});