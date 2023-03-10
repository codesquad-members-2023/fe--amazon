const $every = document.getElementById('every');
const $close = document.getElementById('side_bar_close');
const $side_bar = document.querySelector('aside');
const $side_bar_menu = document.querySelectorAll('.side_bar_container li');
const $view_all = document.getElementById('view_all');
const $view_close = document.getElementById('view_close');
const $unfold_content = document.querySelector('.unfold_content');

$every.addEventListener('click', e => {
  $side_bar.classList.add('expand');
  $side_bar.classList.remove('contract');
  $side_bar.style.display = 'flex';
});

$close.addEventListener('click', e => {
  $side_bar.classList.add('contract');
});

$side_bar.addEventListener('animationend', e => {
  if(e.animationName === 'contract') {
    $side_bar.style.display = 'none';
    $side_bar.classList.remove('expand');
  } //닫힌다음 사라지게하기
});

$side_bar_menu.forEach(element => {
  element.addEventListener('mouseenter', e => {
    e.target.style.backgroundColor = 'rgba(179, 179, 179, 0.58)';
  });

  element.addEventListener('mouseleave', e => {
    e.target.style.backgroundColor = 'inherit';
  });
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
})