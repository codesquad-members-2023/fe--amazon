import ChangeAdressAction from '../components/Action/ChangeAddressAction.js';
import LoginAction from '../components/Action/LoginAction.js';
import Sidebar from '../components/Sidebar.js';
import { ID } from '../constant.js';

export let loginActionElement = null;

const selectAddressBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#selectCountryBtn');

const loginBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#loginBtn');

const showAllBtn = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#showAllBtn');

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

showAllBtn.addEventListener('click', (e) => {
  if (loginActionElement) {
    loginActionElement.closeAction();
  }

  const sidebar = new Sidebar();
  sidebar.showAction(e);

  showAllBtn.addEventListener('mouseout', () => {
    sidebar.closeAction();
  });
});
