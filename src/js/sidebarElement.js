const sidebar = {
  container: document.querySelector('.sidebar'),
  ActivateButton: document.querySelector('.sidebar_active_button'),
  InactivateButton: document.querySelector('.sidebar_close_icon'),
  Lists: document.querySelectorAll('.sidebar_lists'),
  Main: document.querySelector('.sidebar_main'),
  showExtraListButton: document.querySelector('.sidebar_list_unfold'),
  extraList: document.querySelector('.sidebar_extra_list_items'),
  extraListItem: document.querySelectorAll('.sidebar_extra_list_item'),
  hideExtraListButton: document.querySelector('.sidebar_list_fold'),
};

export { sidebar };
