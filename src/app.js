import ChangeAdressAction from './components/Action/ChangeAddressAction.js';
import LoginActionWithFooter from './components/Action/LoginActionWithFooter.js';
import {
  LOGIN_ACTION_WITH_FOOTER_WIDTH,
  CHANGE_ADDRESS_ACTION_WIDTH,
} from './constant.js';

const selectAddressBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#selectCountryBtn');

const loginBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#loginBtn');

const changeAddressAction = new ChangeAdressAction(CHANGE_ADDRESS_ACTION_WIDTH);
selectAddressBtn.addEventListener('mouseover', (e) => {
  openAction(changeAddressAction, e);
});
selectAddressBtn.addEventListener('mouseout', () => {
  closeAction(changeAddressAction);
});

const loginActionWithFooter = new LoginActionWithFooter(
  LOGIN_ACTION_WITH_FOOTER_WIDTH
);
loginBtn.addEventListener('mouseover', (e) => {
  openAction(loginActionWithFooter, e);
});

loginBtn.addEventListener('mouseout', () => {
  closeAction(loginActionWithFooter);
});

function openAction(action, e) {
  action.showAction();

  const docWidth = window.innerWidth;
  const actionWidth = action.width;

  const { x, y, height } = e.target.getBoundingClientRect();
  const target = action.shadowRoot.querySelector('action-element');
  target.style.position = 'absolute';
  const isWidthOverflow = x + actionWidth > docWidth;

  if (!isWidthOverflow) {
    target.style.left = `${x}px`;
  } else {
    target.style.right = `16px`;
  }
  target.style.top = `${y + height + 16}px`;
  target.translateX = '-50%';
}

function closeAction(action) {
  action.closeAction();
}
