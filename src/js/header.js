import { header } from './headerElement.js';
import { dimmed } from './dimmedElement.js';

const showLoginInitLayer = () => {
  header.loginPopup.classList.remove('hidden');
};

const showLoginExtendedLayer = () => {
  header.loginPopup.classList.remove('hidden');
  header.dividingLine.classList.remove('hidden');
  header.loginListContainer.classList.remove('hidden');
  dimmed.MainExceptHeader.classList.remove('hidden');
};

const showShippingLayer = () => {
  header.shippingPopup.classList.remove('hidden');
  header.loginPopup.classList.add('hidden');
  dimmed.MainExceptHeader.classList.remove('hidden');
};

const hideLayer = () => {
  header.loginPopup.classList.add('hidden');
  header.shippingPopup.classList.add('hidden');
  dimmed.MainExceptHeader.classList.add('hidden');
};

const headerEventMainHandler = () => {
  const loadingTime = 1000;
  setTimeout(() => {
    showLoginInitLayer();
  }, loadingTime);

  header.loginSection.addEventListener('mouseenter', showLoginExtendedLayer);
  header.loginSection.addEventListener('mouseleave', hideLayer);
  header.shippingSection.addEventListener('mouseenter', showShippingLayer);
  header.shippingSection.addEventListener('mouseleave', hideLayer);
};

export { headerEventMainHandler };
