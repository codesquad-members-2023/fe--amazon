"use strict";
class App {
    constructor() {
        this.$userAccount = this.$('.user-account');
        this.$login = this.$('.login');
        this.$userExpansion = this.$('.user-expansion');
        this.$wrapperDim = this.$('.wrapper__dim');
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
}
const app = new App();
app.toggleExpandLogin();
