import ChangeAdressAction from './components/Action/ChangeAddressAction.js';
import LoginAction from './components/Action/LoginAction.js';
import { ID } from './constant.js';

const selectAddressBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#selectCountryBtn');

const loginBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#loginBtn');

let loginActionElement = null;

function runLoginAction() {
  const loginAction = new LoginAction('login-action', false);
  loginActionElement = loginAction;
  const id = ID.LOGIN_ACTION;

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
  const id = ID.CHANGE_ADDRESS_ACTION;
  const changeAddressAction = new ChangeAdressAction(id);
  changeAddressAction.showAction(e, id);
  selectAddressBtn.addEventListener('mouseout', () => {
    changeAddressAction.closeAction();
  });
});

loginBtn.addEventListener('mouseover', (e) => {
  if (loginActionElement) {
    loginActionElement.closeAction();
  }
  const id = ID.LOGIN_ACTION_WITH_FOOTER;
  const loginActionWithFooter = new LoginAction(id, true);
  loginActionWithFooter.showAction(e, id);

  loginBtn.addEventListener('mouseout', () => {
    loginActionWithFooter.closeAction();
  });
});
