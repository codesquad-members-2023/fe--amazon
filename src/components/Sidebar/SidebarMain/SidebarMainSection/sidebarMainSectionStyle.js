export default function sidebarMainSectionStyle(id, foldingListHeight) {
  const style = document.createElement('style');

  style.textContent = `
    :host {
    }

    ul.folding-list {
      padding: 0;
      list-style: none;
      margin: 0;
      
      overflow: hidden;
      display: block;
      opacity: 0;
      height: 0;
      transition: height .3s, opacity .3s;
    }

    ul.folding-list.unfolded {
      opacity: 1;
    }

    #${id} ul.folding-list.unfolded {
      height: ${foldingListHeight}px;
    }

  `;

  return style;
}
