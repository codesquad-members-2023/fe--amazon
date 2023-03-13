export default function loginActionStyle() {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        color: var(--black);
      }  

      action-element {
        z-index: 1;
      }

      div[slot="bottom"] {
        display: flex;
        gap: 3px;
        border-top: 1px solid var(--gray-100);
        padding: 8px 0 0;
        margin: 8px 0 0;
      }

      div[slot="bottom"] .section {
        flex-grow: 1;
      }

      div[slot="bottom"] h3 {
        font-size: var(--bold-md-size);
        font-weight: var(--bold-md-weight);
        line-height: var(--bold-md-height);
        letter-spacing: var(--bold-md-spacing);

        margin: 0;
      }

      div[slot="bottom"] ul {
        padding: 0;
        margin: 0;
      }

      div[slot="bottom"] li {
        list-style: none;
        margin-top: 4px;

        font-size: var(--body-sm-size);
        font-weight: var(--body-sm-weight);
        line-height: var(--body-sm-height);
        letter-spacing: var(--body-sm-spacing);
      }

      span[slot="caption"] a {
        color: var(--secondary-navy);
        text-decoration: none;
      }

    `;
  return style;
}
