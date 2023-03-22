const NAV ={
    LOGINMENU: document.querySelector(".nav__login"),
    SHIPPINGMENU: document.querySelector(".nav__shipping"),
    SHIPPINGPOPUP: document.querySelector(".nav__shipping_popup"),
    LOGINEXTENSION: document.querySelector(".nav__login_popup_extension")
};
const SIDEBAR = {
    ALL:document.querySelector(".sidebar"),
    CLOSEBUTTON:document.querySelector(".sidebar__btn_close"),
    MENUDETAIL: document.querySelector(".sidebar__all-menu_extend"),
    MENUALLBUTTON: document.querySelector(".sidebar__menu-all"),
}

const SUBMENU ={
    ALLMENU:document.querySelector(".sub__all-menu"),
};
const COMMON = {
    DIM:document.querySelector(".dim-layer")
};

export {NAV,SIDEBAR,SUBMENU,COMMON};