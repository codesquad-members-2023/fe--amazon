import { SIDEBAR_SIZE } from '../../constant.js';

class SidebarMain extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;

    const menuDigitals = {
      title: '디지털 콘텐츠 및 기기',
      categories: [
        'Amazon Music',
        'Kindle E-Reader 및 도서',
        '안드로이드 앱스토어',
      ],
    };

    const etcDigitals = {
      title: '부서별 쇼핑',
      categories: [
        '전자',
        '컴퓨터',
        'Alexa 스마트 홈',
        '예술 및 공예',
        '자동차 용품',
        '유아',
        '뷰티 및 퍼스널 케어',
        '여성 패션',
        '남성 패션',
        '여아용 의류',
        '남아용 의류',
        '건강 및 가정용품',
        '가정 및 주방',
        '산업용 및 과학용',
        '여행 가방',
        '영화 및 TV',
        '애완동물 용품',
        '소프트웨어',
        '스포츠 및 야외 활동',
        '공구 및 주택 개조',
        '장난감 및 게임',
        '비디오 게임',
      ],
      dividingNum: 4,
    };

    const etcDigitalsCategory = etcDigitals.categories.splice(
      0,
      etcDigitals.dividingNum
    );
    const etcDigitalsCategoryOverflowed = etcDigitals.categories.splice(
      etcDigitals.dividingNum,
      etcDigitals.categories.length
    );

    shadow.innerHTML = `
      <section class="section">
        <sidebar-title-element>${menuDigitals.title}</sidebar-title-element>
        ${menuDigitals.categories
          .map((category) => {
            return `<sidebar-category-element>${category}</sidebar-category-element>`;
          })
          .join('')}
      </section>
      <section class="section">
        <sidebar-title-element>${etcDigitals.title}</sidebar-title-element>
        ${etcDigitalsCategory
          .map((category) => {
            return `<sidebar-category-element>${category}</sidebar-category-element>`;
          })
          .join('')}
        <div id="folding-container">
          <sidebar-fold-element id="folidng-btn"></sidebar-fold-element>
          <ul class="folidng-list">
            ${etcDigitalsCategoryOverflowed
              .map((category) => {
                return `<sidebar-category-element>${category}</sidebar-category-element>`;
              })
              .join('')}
            <sidebar-unfold-element id="unfolidng-btn"></sidebar-unfold-element>
          </ul>
        </div>
      </section>
      
      
    `;

    this.shadowRoot.append(this.getStyle());
  }

  createTitle(parent, text) {
    const title = document.createElement('sidebar-title-element');
    title.shadowRoot.querySelector('p').innerHTML = text;
    parent.append(title);
  }

  createCategory(parent, text) {
    const category = document.createElement('sidebar-category-element');
    category.shadowRoot.querySelector('p').innerHTML = text;
    parent.append(category);
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      :host {
        display: block;
        width: ${SIDEBAR_SIZE}px;
        height: 100%;
      }

      .folidng-list {
        padding: 0;
        list-style: none;
        margin: 0;
        opacity: 0;
        height: 0;
        overflow: hidden;
      }

      .unfolded {
        opacity: 1;
        height: auto;
        transition: height .3s ease-in, opacity .3s ease-in;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      .section {
        border-bottom: 1px solid var(--gray-100);
      }

      .section:last-of-type {
        border-bottom: none;
      }
    `;
    return style;
  }
}

export default SidebarMain;
