"use strict";
class App {
    constructor() {
        this.$navbarUserAccount = this.$('.nav-bar__user-account');
        this.$wrapperDim = this.$('.wrapper__dim');
        this.showLoginModalDetail();
    }
    $(selector) {
        return document.querySelector(selector);
    }
    showLoginSlowly() { }
    showLoginModalDetail() {
        this.$navbarUserAccount.addEventListener('mouseenter', () => {
            this.$wrapperDim.style.display = 'block';
        });
    }
}
new App();
