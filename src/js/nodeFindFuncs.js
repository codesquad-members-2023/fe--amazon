export const findUpWard = (target, node) => target.closest(node);
export const findSiblingForward = (node, targetNode) => {
    let nextSibling = node.nextElementSibling;
    while(true) {
      if(nextSibling.className === targetNode) return nextSibling;
      nextSibling = nextSibling.nextElementSibling;
    }
  };
  export const getSubSideBar = (ontarget, listId) => {
    return Array.from(findUpWard(ontarget, '#sidebarmenu').childNodes)
            .filter(node => node.nodeName != '#text')
            .find(node => {
              const convertNodeArray = node.className.split(" ");
              return convertNodeArray[convertNodeArray.length - 1] === listId;
            })
  }
  export const isSubSideBarExist = (childNodes, listId) => {
    return Array.from(childNodes)
            .filter(node => node.nodeName != '#text')
            .some(node => {
              const nodeInArray = node.className.split(" ");
              return nodeInArray[nodeInArray.length - 1] === listId;
            });
  }