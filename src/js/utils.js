export const findUpWard = (target, node) => target.closest(node);
export const findSiblingForward = (node, targetNode) => {
    let nextSibling = node.nextElementSibling;
    while(true) {
      if(nextSibling.className === targetNode) return nextSibling;
      nextSibling = nextSibling.nextElementSibling;
    }
  };
export const getSubSideBar = (target, contentsId) => {
  return [...findUpWard(target, '#sidebarmenu').childNodes]
          .filter(node => node.nodeName != '#text')
          .find(node => node.dataset.contentsId === contentsId)
}
export const isSubSideBarExist = (childNodes, contentsId) => {
  return [...childNodes]
          .filter(node => node.nodeName != '#text')
          .some(node => node.dataset.contentsId === contentsId);
}