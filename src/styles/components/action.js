export default function actionStyle(id) {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        position: absolute;
      }

      .wrap {
        display: block;
        width: 365px;
        padding-top: 12px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }

      .container {
        background-color: var(--white);
        padding: 16px;
        border-radius: 4px;
      }

      section.header {
        font-size: var(--bold-md-size);
        font-weight: var(--bold-md-weight);
        line-height: var(--bold-md-height);
        letter-spacing: var(--bold-md-spacing);

        text-align: center;
      }

      .pointer {
        content: "";
        position: absolute;
        top: -16px;
        left: var(--${id}-pointer-left);
        border-width: 10px;
        border-style: solid;
        border-top: 18px solid transparent;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 18px solid var(--white);
        z-index: 10000;
      }

      .btn-container {
        display: flex;
        gap: 8px;
        margin: 0 auto;
      }

      btn-element[type="flexible"] {
        margin: 0 auto;
      }

      btn-element[type="main"] {
        order: 1;
      }

      btn-element[type="sub"] {
        order: 0;
        margin-left: auto;
      }

      p {
        margin: 0;
      }

      .text {
        font-size: var(--body-sm-size);
        font-weight: var(--body-sm-weight);
        line-height: var(--body-sm-height);
        letter-spacing: var(--body-sm-spacing);
      }

      .caption {
        margin-top: 8px;
        text-align: center;
        font-size: var(--body-sm-size);
        font-weight: var(--body-sm-weight);
        line-height: var(--body-sm-height);
        letter-spacing: var(--body-sm-spacing);
      }
    `;
  return style;
}
