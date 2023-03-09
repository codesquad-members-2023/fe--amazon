class App {
  $userAccount: HTMLElement;
  $login: HTMLElement;
  $userExpansion: HTMLElement;
  $wrapperDim: HTMLElement;
  constructor() {
    // toggleExpandLogin 관련
    this.$userAccount = this.$('.user-account')!;
    this.$login = this.$('.login')!;
    this.$userExpansion = this.$('.user-expansion')!;
    this.$wrapperDim = this.$('.wrapper__dim')!;
  }

  private $(selector: string): HTMLElement | null {
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
