import ChangeAdressAction from '../components/Action/ChangeAddressAction.js';
import LoginAction from '../components/Action/LoginAction.js';
import Sidebar from '../components/Sidebar.js';
import { ID } from '../constant.js';

export let currentAction = null;
let changeAddressActionElement = null;

function runLoginAction() {
  const loginBtn = document
    .querySelector('navbar-element')
    .shadowRoot.querySelector('#loginBtn');

  const id = ID.LOGIN_ACTION;
  const loginAction = new LoginAction(id, false);
  currentAction = loginAction;

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

function hoverSelectAddressBtn() {
  const selectAddressBtn = document
    .querySelector('navbar-element')
    .shadowRoot.querySelector('#selectCountryBtn');
  selectAddressBtn.addEventListener('mouseenter', () => {
    if (changeAddressActionElement) return;

    if (currentAction) {
      currentAction.closeAction();
    }

    const id = ID.CHANGE_ADDRESS_ACTION;
    changeAddressActionElement = new ChangeAdressAction(id);

    const e = new CustomEvent('open-change-address-action', {
      bubbles: true,
      cancelable: true,
      detail: { target: selectAddressBtn },
    });

    changeAddressActionElement.showAction(e, id);

    selectAddressBtn.addEventListener('mouseleave', (e) => {
      changeAddressActionElement?.closeAction();
      changeAddressActionElement = null;
    });
  });
}

function hoverLoginBtn() {
  const loginBtn = document
    .querySelector('navbar-element')
    .shadowRoot.querySelector('#loginBtn');
  loginBtn.addEventListener('mouseenter', () => {
    if (currentAction) {
      currentAction.closeAction();
    }
    const id = ID.LOGIN_ACTION_WITH_FOOTER;
    const loginActionWithFooter = new LoginAction(id, true);
    const e = new CustomEvent('open-change-address-action', {
      bubbles: true,
      cancelable: true,
      detail: { target: loginBtn },
    });
    loginActionWithFooter.showAction(e, id);

    loginBtn.addEventListener('mouseleave', (e) => {
      loginActionWithFooter.closeAction();
    });
  });
}

runLoginAction();
hoverSelectAddressBtn();
hoverLoginBtn();
