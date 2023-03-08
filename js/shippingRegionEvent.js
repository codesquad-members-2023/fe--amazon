const shippingRegion = document.querySelector('.menu1');
const selectRegionModal = document.querySelector('.region_modal');

shippingRegion.addEventListener('mouseover', () => {
  selectRegionModal.style.display = 'flex';
  body.style.background = 'rgba(16, 20, 26, 0.4)';
});

shippingRegion.addEventListener('mouseout', () => {
  selectRegionModal.style.display = 'none';
  body.style.background = '';
});
