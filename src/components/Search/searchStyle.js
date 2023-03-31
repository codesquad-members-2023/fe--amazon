export default function searchStyle(type) {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      position: absolute;
      
      top: calc(var(--input-hegiht));
      width: 100%;
      
      z-index: 2;
    }

    .search-list-container {
      background-color: white;
      color: var(--gray-800);
      box-sizing: content-box;
      max-height: 370px;
      border: 1px solid var(--black);
      border-radius: 4px;
      overflow-y: scroll;

      opacity: 0;
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
      padding: 0 12px;
      height: 37px;
      font-weight: 500;
      font-size: var(--bold-md-size);
      line-height: var(--bold-md-height);
      word-spacing: var(--bold-md-spacing);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li:hover, li:focus {
      background-color: var(--gray-100);
      cursor: pointer;
    }

    li:focus-visible {
      outline: none;
    }

    span.list-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
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
