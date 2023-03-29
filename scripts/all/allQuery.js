const NAV = {
  LOGINMENU: document.querySelector(".nav__login"),
  LOGIN_POPUP: document.querySelector(".nav__login_popup"),
  SHIPPINGMENU: document.querySelector(".nav__shipping"),
  SHIPPINGPOPUP: document.querySelector(".nav__shipping_popup"),
  LOGINEXTENSION: document.querySelector(".nav__login_popup_extension"),
  LOGIN_EXTENSION_LEFT: document.querySelector(".login_extension-left"),
  LOGIN_EXTENSION_RIGHT: document.querySelector(".login_extension-right"),
};
const SIDEBAR = {
  ALL: document.querySelector(".sidebar"),
  CLOSEBUTTON: document.querySelector(".sidebar__btn_close"),
  MENUDETAIL: document.querySelector(".sidebar__all-menu_extend"),
  MENUALLBUTTON: document.querySelector(".sidebar__menu-all"),
  MAIN_MENU_DETAIL: document.querySelector(".sidebar__menu_detail"),
  SUB_DETAIL: document.querySelector(".sidebar_detail"),
  MAIN_MENU: document.querySelector(".sidebar__menu"),
  BACK_MAIN: document.querySelector(".back-to-main"),
};

const SUBMENU = {
  ALLMENU: document.querySelector(".sub__all-menu"),
};
const COMMON = {
  DIM: document.querySelector(".dim-layer"),
};

export { NAV, SIDEBAR, SUBMENU, COMMON };
