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

  addEvents() {
    this.$shippingAddress.addEventListener('mouseenter', () => {
      this.$shippingAddressModal.classList.remove('d-none');
      this.$headerDimCover.classList.remove('d-none');
    });
    this.$shippingAddress.addEventListener('mouseleave', () => {
      this.$shippingAddressModal.classList.add('d-none');
      this.$headerDimCover.classList.add('d-none');
    });
    this.$login.addEventListener('mouseenter', () => {
      this.$loginModal.classList.remove('d-none');
      this.$headerDimCover.classList.remove('d-none');
    });
    this.$login.addEventListener('mouseleave', () => {
      this.$loginModal.classList.add('d-none');
      this.$headerDimCover.classList.add('d-none');
    });
  }
}
