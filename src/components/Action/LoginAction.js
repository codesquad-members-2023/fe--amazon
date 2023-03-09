import Action from '../Action.js';

class LoginActionWithFooter extends Action {
  constructor(id, hasFooter) {
    super();

    const text = this.innerText;
    const shadow = this.shadowRoot;

    shadow.innerHTML = `
    <action-element id="${id}" flexibleBtn="로그인" pointerPosition="right">
      <span slot="caption">기존 사용자가 아니십니까? <a href="/">여기에서 시작합니다.</a></span>
      ${
        hasFooter
          ? `<div slot="bottom">
        <div class="section">
          <h3>귀하의 목록</h3>
          <ul>
            <li>목록 생성</li>
            <li>목록 또는 레지스트리 찾기</li>
            <li>AmazonSmile 자선 품목 목록</li>
          </ul>
        </div>
        <div class="section">
        <h3>계정</h3>
          <ul>
            <li>계정</li>
            <li>주문</li>
            <li>권장 사항</li>
            <li>검색 기록</li>
            <li>워치리스트</li>
            <li>비디오 구매 및 대여</li>
            <li>Kindle 언리미티드</li>
            <li>콘텐츠 및 기기</li>
            <li>항목 구독 및 저장</li>
            <li>멤버십 및 구독</li>
            <li>음악 라이브러리</li>
          </ul>
        </div>
      </div>`
          : ''
      }
      
    </action-element>
    <backdrop-element></backdrop-element>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
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
}

export default LoginActionWithFooter;
