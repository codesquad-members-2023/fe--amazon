const sidebar = {
  container: document.querySelector('.sidebar'),
  activateButton: document.querySelector('.sidebar_active_button'),
  inactivateButton: document.querySelector('.sidebar_close_icon'),
  lists: document.querySelectorAll('.sidebar_lists'),
  main: document.querySelector('.sidebar_main'),
  showExtraListButton: document.querySelector('.sidebar_extra_list_unfold'),
  extraList: document.querySelector('.sidebar_extra_list_items'),
  extraListItem: document.querySelectorAll('.sidebar_extra_list_item'),
  hideExtraListButton: document.querySelector('.sidebar_extra_list_fold'),
};

export { sidebar };
