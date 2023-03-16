import ChangeAdressAction from '@components/Action/ChangeAddressAction.js';
import LoginAction from '@components/Action/LoginAction.js';
import { ID } from '@constant';

export let loginActionElement = null;
let changeAddressActionElement = null;

function runLoginAction() {
  const loginBtn = document
    .querySelector('navbar-element')
    .shadowRoot.querySelector('#loginBtn');

  const id = ID.LOGIN_ACTION;
  const loginAction = new LoginAction(id, false);
  loginActionElement = loginAction;

  loginAction.showAction(loginBtn, id);
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

    if (loginActionElement) {
      loginActionElement.closeAction();
    }

    const id = ID.CHANGE_ADDRESS_ACTION;
    changeAddressActionElement = new ChangeAdressAction(id);
    changeAddressActionElement.showAction(selectAddressBtn, id);

    selectAddressBtn.addEventListener('mouseleave', () => {
      changeAddressActionElement.closeAction();
      changeAddressActionElement = null;
    });
  });
}

function hoverLoginBtn() {
  const loginBtn = document
    .querySelector('navbar-element')
    .shadowRoot.querySelector('#loginBtn');
  loginBtn.addEventListener('mouseenter', () => {
    if (loginActionElement) {
      loginActionElement.closeAction();
    }
    const id = ID.LOGIN_ACTION_WITH_FOOTER;
    const loginActionWithFooter = new LoginAction(id, true);
    loginActionWithFooter.showAction(loginBtn, id);

    loginBtn.addEventListener('mouseleave', () => {
      loginActionWithFooter.closeAction();
    });
  });
}

runLoginAction();
hoverSelectAddressBtn();
hoverLoginBtn();
