import Button from './Button/Button.js';
import Footer from './Footer/Footer.js';
import Loading from './Loading/Loading.js';
import Navbar from './NavBar/NavBar.js';
import MainMenu from './NavBar/MainMenu/MainMenu.js';
import SubMenu from './NavBar/SubMenu/SubMenu.js';
import Sidebar from './Sidebar/Sidebar.js';
import Icon from './Icon/Icon.js';
import Image from './Image/Image.js';
import TextInput from './TextInput/TextInput.js';
import Action from './Action/Action.js';
import LoginAction from './Action/LoginAction/LoginAction.js';
import ChangeAdressAction from './Action/ChangeAddressAction/ChangeAddressAction.js';
import Backdrop from './BackDrop/BackDrop.js';
import SideBarBack from './Sidebar/SidebarSub/SidebarBack/SidebarBack.js';
import SidebarCategory from './Sidebar/SidebarCategory/SidebarCategory.js';
import SidebarFold from './Sidebar/SidebarMain/SidebarFold/SidebarFold.js';
import SidebarUnfold from './Sidebar/SidebarMain/SidebarUnfold/SidebarUnfold.js';
import SidebarHeader from './Sidebar/SidebarHeader/SidebarHeader.js';
import SideBarTitle from './Sidebar/SidebarTitle/SidebarTitle.js';
import SidebarMain from './Sidebar/SidebarMain/SidebarMain.js';
import SidebarSub from './Sidebar/SidebarSub/SidebarSub.js';
import SidebarSubContent from './Sidebar/SidebarSub/SidebarSubContent/SidebarSubContent.js';
import SidebarMainSectionDefault from './Sidebar/SidebarMain/SidebarMainSection/SidebarMainSectionDefault/SidebarMainSectionDefault';
import SidebarMainSectionWithFoldingBtn from './Sidebar/SidebarMain/SidebarMainSection/SidebarMainSectionWithFoldingBtn/SidebarMainSectionWithFoldingBtn.js';
import Slider from './Slider/Slider.js';
import SliderController from './Slider/SliderController/SliderController.js';
import Search from './Search/Search.js';

customElements.define('btn-element', Button);
customElements.define('footer-element', Footer);
customElements.define('loading-element', Loading);
customElements.define('navbar-element', Navbar);
customElements.define('navbar-mainmenu-element', MainMenu);
customElements.define('navbar-submenu-element', SubMenu);
customElements.define('sidebar-element', Sidebar);
customElements.define('icon-element', Icon);
customElements.define('image-element', Image);
customElements.define('text-input-element', TextInput);
customElements.define('action-element', Action);
customElements.define('login-action-element', LoginAction);
customElements.define('change-address-action-element', ChangeAdressAction);
customElements.define('backdrop-element', Backdrop);
customElements.define('sidebar-back-element', SideBarBack);
customElements.define('sidebar-category-element', SidebarCategory);
customElements.define('sidebar-fold-element', SidebarFold);
customElements.define('sidebar-header-element', SidebarHeader);
customElements.define('sidebar-title-element', SideBarTitle);
customElements.define('sidebar-main-element', SidebarMain);
customElements.define('sidebar-sub-element', SidebarSub);
customElements.define('sidebar-unfold-element', SidebarUnfold);
customElements.define('sidebar-sub-content-element', SidebarSubContent);
customElements.define(
  'sidebar-main-section-default-element',
  SidebarMainSectionDefault
);
customElements.define(
  'sidebar-main-section-with-folding-btn-element',
  SidebarMainSectionWithFoldingBtn
);
customElements.define('slider-element', Slider);
customElements.define('slider-controller-element', SliderController);
customElements.define('search-element', Search);
