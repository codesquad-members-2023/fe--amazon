import { SIDEBAR_SIZE, SIDEBAR_HEADER_HEIGHT } from '@constant';

export default function sidebarStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 1;
    }

    .wrap {
      animation: slide-left .5s;
      transition: var(--default-transition);
      position: fixed;
      top: 0;
      left: 0;
      width: ${SIDEBAR_SIZE + 8 + 24}px;
      height: 100%;
      z-index: 1;
    }

    icon-element[name="close"] {
      position: fixed;
      z-index: 2;
      top: 8px;
      left: ${SIDEBAR_SIZE + 8}px;
    }

    icon-element[name="close"]:hover {
      cursor: pointer;
    }

    sidebar-header-element {
      width: ${SIDEBAR_SIZE}px;
    }

    .container {
      width: ${SIDEBAR_SIZE}px;
      height: calc(100% - ${SIDEBAR_HEADER_HEIGHT}px);
      display: flex;
      background-color: var(--white);
      overflow-x: hidden;
      position: fixed;
    }

    sidebar-main-element {
      overflow-y: scroll;
    }

    sidebar-sub-element {
      position: absolute;
      transform: translate(100%, 0px);
    }

    .slide-left sidebar-main-element {
      animation: slide-left-main .5s forwards;
    }

    .slide-left sidebar-sub-element {
      animation: slide-left-sub .5s forwards;
    }

    .slide-right sidebar-main-element {
      animation: slide-right-main .5s forwards;
    }

    .slide-right sidebar-sub-element {
      animation: slide-right-sub .5s forwards;
    }

    @keyframes show {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }

    @keyframes close {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes slide-left-main {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }

    @keyframes slide-left-sub {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes slide-right-main {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes slide-right-sub {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  `;
  return style;
}
