class App {
  private $navbarUserAccount: HTMLElement;
  private readonly $wrapperDim: HTMLElement;
  constructor() {
    this.$navbarUserAccount = this.$('.nav-bar__user-account')!;
    this.$wrapperDim = this.$('.wrapper__dim')!;

    this.showLoginModalDetail();
  }

  private $(selector: string): HTMLElement | null {
    return document.querySelector(selector);
  }

  private showLoginSlowly() {}

  private showLoginModalDetail() {
    this.$navbarUserAccount.addEventListener('mouseenter', () => {
      this.$wrapperDim.style.display = 'block';
    });
  }
}

new App();
