import ChangeAdressAction from './components/Action/ChangeAddressAction.js';
import LoginAction from './components/Action/LoginAction.js';
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

let loginActionElement = null;

function runLoginAction() {
  const loginAction = new LoginAction(450, 'login-action');
  loginActionElement = loginAction;
  const id = 'login-action';

  const e = new CustomEvent('open-login-action', {
    bubbles: true,
    cancelable: true,
    detail: { target: loginBtn },
  });

  loginAction.showAction(e, id);
  setTimeout(() => {
    loginAction.closeAction();
  }, 1000);
}
runLoginAction();

selectAddressBtn.addEventListener('mouseover', (e) => {
  if (loginActionElement) {
    loginActionElement.closeAction();
  }
  const id = 'change-address-action';
  const changeAddressAction = new ChangeAdressAction(
    CHANGE_ADDRESS_ACTION_WIDTH,
    id
  );
  changeAddressAction.showAction(e, id);
  selectAddressBtn.addEventListener('mouseout', () => {
    changeAddressAction.closeAction();
  });
});

loginBtn.addEventListener('mouseover', (e) => {
  if (loginActionElement) {
    loginActionElement.closeAction();
  }
  const id = 'login-action-with-footer';
  const loginActionWithFooter = new LoginActionWithFooter(
    LOGIN_ACTION_WITH_FOOTER_WIDTH,
    id
  );

  loginActionWithFooter.showAction(e, id);

  loginBtn.addEventListener('mouseout', () => {
    loginActionWithFooter.closeAction();
  });
});
