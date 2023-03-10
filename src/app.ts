class App {
  $userAccount: HTMLElement;
  $login: HTMLElement;
  $userExpansion: HTMLElement;
  $wrapperDim: HTMLElement;

  $shippingCountry: HTMLElement;
  $addressChanging: HTMLElement;

  $sidebar: HTMLElement;
  $navbarAllList: HTMLElement;

  $departmentListAllTag: HTMLElement;
  $sidebarOthersContent: HTMLElement;
  $showOthersListSimple: HTMLElement;
  constructor() {
    // toggleExpandLogin 관련
    this.$userAccount = this.$('.user-account')!;
    this.$login = this.$('.login')!;
    this.$userExpansion = this.$('.user-expansion')!;
    this.$wrapperDim = this.$('.wrapper__dim')!;

    // toggleAddressChanging 관련
    this.$shippingCountry = this.$('.shipping-country')!;
    this.$addressChanging = this.$('.address-changing')!;

    // toggleSidebar 관련
    this.$sidebar = this.$('.sidebar')!;
    this.$navbarAllList = this.$('.nav-bar__all-list')!;

    // showSidebarOthers 관련
    this.$departmentListAllTag = this.$('.department-list__show-all')!;
    this.$sidebarOthersContent = this.$('.sidebar__others-content')!;

    // showSidebarSimple 관련
    this.$showOthersListSimple = this.$('.others-list__show-simple')!;
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

  showSidebarAll() {
    this.$departmentListAllTag.addEventListener('click', () => {
      this.$sidebarOthersContent.style.display = 'block';
    });
  }

  showSidebarSimple() {
    this.$showOthersListSimple.addEventListener('click', () => {
      this.$sidebarOthersContent.style.display = 'none';
    });
  }
}

const app = new App();

app.toggleExpandLogin();
app.toggleAddressChanging();
app.toggleSidebar();
app.showSidebarAll();
app.showSidebarSimple();
