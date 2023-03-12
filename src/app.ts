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

  $sidebarSub: HTMLElement;
  $sidebarSubContent: HTMLElement;
  $sidebarSubList: HTMLElement;
  subCategories = {
    car: [
      '자동차 용품',
      '자동차 관리',
      '자동차 전자기기 및 액세서리',
      '실외용품 액세서리',
      '인테리어 액세서리',
      '램프 및 조명 액세서리',
      '오토바이 및 파워스포츠 차량 용품',
      '오일 및 유체',
      '페인트 및 도장용품',
      '퍼포먼스 부품 및 액세서리',
      '교체용 부품',
      'RV 부품 및 액세서리',
      '타이어 및 휠',
      '공구 및 장비',
      '자동차 매니아용 상품',
      '대형차 및 상용차 장비',
    ],
  };

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
    this.$sidebar = this.$('.sidebar-main')!;
    this.$navbarAllList = this.$('.nav-bar__all-list')!;

    // showSidebarOthers 관련
    this.$departmentListAllTag = this.$('.department-list__show-all')!;
    this.$sidebarOthersContent = this.$('.sidebar__others-content')!;

    // showSidebarSimple 관련
    this.$showOthersListSimple = this.$('.others-list__show-simple')!;

    // showSubCategory 관련
    this.$sidebarSub = this.$('.sidebar-sub')!;
    this.$sidebarSubContent = this.$('.sidebar-sub__content')!;
    this.$sidebarSubList = this.$('.sidebar-sub-list')!;
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
      this.$sidebarSub.style.display = 'none';
      this.$sidebarSubList.innerHTML =
        "<li class='sidebar-sub-list__title'></li>";
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

  toggleSubCategory() {
    this.$sidebar.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.className === 'right-brace-icon') {
        if (this.$sidebarSub.style.display === 'flex') return;

        this.$sidebarSub.style.display = 'flex';

        const categoryName: string =
          target.parentNode!.firstElementChild!.className.split('__')[0]!;
        const subCategories =
          this.subCategories[categoryName as keyof typeof this.subCategories];
        subCategories.forEach((v, i) => {
          if (i === 0) {
            this.$sidebarSubList.firstElementChild!.innerHTML += v;
            return;
          }
          this.$sidebarSubList.innerHTML += `<li>${v}</li>`;
        });
      }
    });
    this.$('.left-arrow-icon')?.addEventListener('click', () => {
      this.$sidebarSub.style.display = 'none';
      this.$sidebarSubList.innerHTML =
        "<li class='sidebar-sub-list__title'></li>";
    });
  }
}

const app = new App();

app.toggleExpandLogin();
app.toggleAddressChanging();
app.toggleSidebar();
app.showSidebarAll();
app.showSidebarSimple();
app.toggleSubCategory();
