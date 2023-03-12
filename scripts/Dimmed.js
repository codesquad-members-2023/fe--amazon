export class DimmedMain {
  constructor() {
    this.dimmedMain = document.querySelector(".dimmed--main");
  }
  showDimmedMain = () => {
    this.dimmedMain.classList.remove("hidden");
  };
  hideDimmedMain = () => {
    this.dimmedMain.classList.add("hidden");
  };
}

export class DimmedBody {
  constructor() {
    this.dimmedBody = document.querySelector(".dimmed--body");
  }

  showDimmedBody = () => {
    this.dimmedBody.classList.remove("hidden");
  };

  hideDimmedBody = () => {
    this.dimmedBody.classList.add("hidden");
  };
}
