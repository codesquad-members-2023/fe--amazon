import { $, $$ } from './util/dom.js';

export default class Header {
  constructor() {
    this.$headerDimCover = $('.dim-cover__in-header');

    this.$navMain = $('#nav-main');
    this.$shippingAddress = $('.nav-main__shipping-address', this.$navMain);
    this.$shippingAddressModal = $('.shipping-address__modal', this.$shippingAddress);

    this.$login = $('.nav-main__login', this.$navMain);
    this.$loginModal = $('.login__modal', this.$login);
  }

  showModal(...elements) {
    // [this.$shippingAddressModal, this.$headerDimCover].forEach((ele) =>
    //   ele.classList.remove('hidden')
    // );
    [...elements].forEach((ele) => ele.classList.remove('hidden'));
  }

  hideModal(...elements) {
    // [this.$shippingAddressModal, this.$headerDimCover].forEach((ele) =>
    //   ele.classList.remove('hidden')
    // );
    [...elements].forEach((ele) => ele.classList.add('hidden'));
  }

  addEvents() {
    this.$shippingAddress.addEventListener(
      'mouseenter',
      this.showModal.bind(this, this.$shippingAddressModal, this.$headerDimCover)
    );
    this.$shippingAddress.addEventListener(
      'mouseleave',
      this.hideModal.bind(this, this.$shippingAddressModal, this.$headerDimCover)
    );
    this.$login.addEventListener(
      'mouseenter',
      this.showModal.bind(this, this.$loginModal, this.$headerDimCover)
    );
    this.$login.addEventListener(
      'mouseleave',
      this.hideModal.bind(this, this.$loginModal, this.$headerDimCover)
    );
  }
}
