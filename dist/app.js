"use strict";
class App {
    constructor() {
        this.$userAccount = this.$('.user-account');
        this.$login = this.$('.login');
        this.$userExpansion = this.$('.user-expansion');
        this.$wrapperDim = this.$('.wrapper__dim');
        this.$shippingCountry = this.$('.shipping-country');
        this.$addressChanging = this.$('.address-changing');
        this.$sidebar = this.$('.sidebar');
        this.$navbarAllList = this.$('.nav-bar__all-list');
        this.$departmentListAllTag = this.$('.department-list__show-all');
        this.$sidebarOthersContent = this.$('.sidebar__others-content');
    }
    $(selector) {
        return document.querySelector(selector);
    }
    toggleExpandLogin() {
        this.$login.addEventListener('mouseenter', () => {
            this.$login.style.height = '20rem';
            this.$userExpansion.style.display = 'flex';
            this.$wrapperDim.style.display = 'block';
        });
        this.$login.addEventListener('mouseleave', () => {
            this.$login.style.display = 'none';
            this.$wrapperDim.style.display = 'none';
            this.$userExpansion.style.display = 'none';
            this.$login.style.height = '6rem';
        });
        this.$userAccount.addEventListener('mouseenter', () => {
            this.$login.style.display = 'flex';
        });
    }
    toggleAddressChanging() {
        this.$shippingCountry.addEventListener('mouseenter', () => {
            this.$addressChanging.style.display = 'flex';
            this.$wrapperDim.style.display = 'block';
        });
        this.$addressChanging.addEventListener('mouseleave', () => {
            this.$addressChanging.style.display = 'none';
            this.$wrapperDim.style.display = 'none';
        });
    }
    toggleSidebar() {
        this.$navbarAllList.addEventListener('mouseenter', () => {
            this.$sidebar.style.display = 'flex';
            this.$wrapperDim.style.display = 'block';
            this.$wrapperDim.style.zIndex = '3';
        });
        this.$wrapperDim.addEventListener('click', (e) => {
            this.$wrapperDim.style.zIndex = '1';
            this.$wrapperDim.style.display = 'none';
            this.$sidebar.style.display = 'none';
        });
    }
    showSidebarOthers() {
        this.$departmentListAllTag.addEventListener('click', () => {
            this.$sidebarOthersContent.style.display = 'block';
        });
    }
}
const app = new App();
app.toggleExpandLogin();
app.toggleAddressChanging();
app.toggleSidebar();
app.showSidebarOthers();
