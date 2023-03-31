export default function searchStyle(type) {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      position: absolute;
      
      top: calc(var(--input-hegiht));
      width: 100%;
      max-height: 370px;

      overflow-y: scroll;
      z-index: 2;
    }

    .search-list-container {
      background-color: white;
      color: var(--gray-800);
      border: 1px solid var(--black);
      border-radius: 4px;
      box-sizing: content-box;

      opacity: 0;
      transition: opacity .1s;
    }

    .search-list-container.show {
      opacity: 1;
    }

    .empty {
      padding: 16px;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      color: var(--gray-800);
      list-style: none;
      padding: 8px 12px;
      font-weight: 500;
      font-size: var(--bold-md-size);
      line-height: var(--bold-md-height);
      word-spacing: var(--bold-md-spacing);
      display: flex;
      justify-content: space-between;
    }

    li:hover, li:focus {
      background-color: var(--gray-100);
      cursor: pointer;
    }

    li:focus-visible {
      outline: none;
    }

    .highlight {
      color: var(--secondary-purple);
      font-weight: bold;
    }

    li.history {
      color: var(--secondary-purple);
    }
  `;
  return style;
}
