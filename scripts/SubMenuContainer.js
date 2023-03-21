export default class SubMenuContainer {
  constructor() {
    this.subMenuContainer = document.querySelector(".submenu-container");
    this.subMenuConfig = [
      {
        label: "음악 스트리밍",
        items: [
          "Amazon Music Unlimited",
          "Amazon Music HD",
          "Podcast",
          "웹 플레이어 열기",
          "웹 플레이어 열기",
          "Download the app",
        ],
        parentId: 1,
      },
      {
        label: "Kindle E-Reader",
        items: [
          "All-new Kindle Kids",
          "All-new Kindel",
          "Kindel Paperwhite",
          "Kindel Oasis",
          "Introducing Kindle Scribe",
          "액세서리",
        ],
        parentId: 2,
      },
      {
        label: "안드로이드 앱스토어",
        items: [
          "모든 앱 및 게임",
          "게임",
          "Amazon 코인",
          "Amazon Appstore 다운로드",
          "Amazon 앱",
          "앱 및 구독",
        ],
        parentId: 3,
      },
      {
        label: "전자",
        items: [
          "액세서리 및 용품",
          "카메라 및 사진",
          "자동차 및 전자기기",
          "휴대폰 및 액세서리",
          "컴퓨터 및 액세서리",
          "GPS 및 내비게이션",
          "헤드폰",
          "홈 오디오",
          "사무실 전자제품",
          "휴대용 오디오 및 비디오",
          "보안 및 감시",
          "서비스 플랜",
          "TV 및 비디오",
          "비디오 게임 콘솔 및 액세서리",
          "비디오 프로젝터",
          "웨어러블 테크 제품",
          "전자책 리더 및 액세서리",
        ],
        parentId: 4,
      },
      {
        label: "컴퓨터",
        items: [
          "컴퓨터 액세서리 및 주변기기",
          "컴퓨터 구성품",
          "컴퓨터 및 태블릿",
          "데이터 스토리지",
          "데이터 스토리지",
          "외부 구성 요소",
          "랩톱 액세서리",
          "모니터",
          "네트워킹 제품",
          "멀티 탭 및 서지 방지기",
          "프린터",
          "스캐너",
          "서버",
          "태블릿 및 액세서리",
          "태블릿 부품(교체용)",
          "품질보증 및 서비스",
        ],
        parentId: 5,
      },
      {
        label: "Alexa 스마트 홈",
        items: [
          "Amazon 스마트홈",
          "스마트 홈 조명",
          "스마트 잠금 및 입력",
          "보안 카메라 및 시스템",
          "플러그 및 콘센트",
          "새로운 스마트 기기",
          "냉난방",
          "감지기 및 센서",
          "홈 엔터테인먼트",
          "애완동물",
          "음성 어시스턴트 및 허브",
          "주방용품",
          "진공 청소기 및 대걸레",
          "잔디 및 정원",
          "WI-FI 및 네트워크",
          "기타 솔루션",
        ],
        parentId: 6,
      },
      {
        label: "예술 및 공예",
        items: [
          "회화, 드로잉 및 미술 용품",
          "비즈 및 주얼리 제작",
          "공예",
          "직물",
          "직물 장식",
          "뜨개질 및 코바늘 뜨개질",
          "바느질",
          "정리, 수납, 운반",
          "판화",
          "스크랩북 제작 및 스탬핑",
          "바느질",
          "파티 장식 및 용품",
          "선물 포장 용품",
        ],
        parentId: 7,
      },
      {
        label: "자동차 용품",
        items: [
          "자동차 관리",
          "자동차 전자기기 및 액세서리",
          "실외용품 액세서리",
          "인테리어 액세서리",
          "램프 및 조명 액세서리",
          "오토바이 및 파워스포츠 차량 용품",
          "오일 및 유체",
          "페인트 및 도장용품",
          "퍼포먼스 부품 및 액세서리",
          "교체용 부품",
          "RV 부품 및 액세서리",
          "타이어 및 휠",
          "공구 및 장비",
          "자동차 매니아용 상품",
          "대형차 및 상용차 장비",
        ],
        parentId: 8,
      },
      {
        label: "유아",
        items: [
          "놀이 및 오락",
          "의류 및 액세서리",
          "유아 및 아기 장난감",
          "유아",
          "아기 문구류",
          "카 시트 및 액세서리",
          "기저귀",
          "수유",
          "기프트",
          "유아용",
          "배변 훈련",
          "임신 및 임산부",
          "안전",
          "유모차 및 액세서리",
          "여행 용품",
        ],
        parentId: 9,
      },
      {
        label: "뷰티 및 퍼스널 케어",
        items: [
          "메이크업",
          "스킨 케어",
          "헤어 케어",
          "향수",
          "풋, 핸드 및 네일 케어",
          "도구 및 액세서리",
          "면도 및 제모",
          "퍼스널 케어",
          "구강 케어",
        ],
        parentId: 10,
      },
      {
        label: "여성 패션",
        items: [
          "의류",
          "신발",
          "보석",
          "시계",
          "핸드백",
          "액세서리",
          "남성 패션",
          "여아용 의류",
          "남아용 의류",
        ],
        parentId: 11,
      },
    ];
  }

  init() {
    const template = document.createElement("template");

    const domString = this.subMenuConfig.reduce((acc, cur, idx) => {
      const subMenuItems = cur.items.reduce((acc, cur) => {
        return (acc += `<li class="side-bar__item">
                      <button class="side-bar__button" href="">
                        <span class="side-bar__text">${cur}</span>
                      </button>
                    </li>`);
      }, "");

      return (
        acc +
        `<div class="submenu hidden" data-parent-id="${cur.parentId}">
     <div class="seperator-line"></div>
     <span class="side-bar__label">${cur.label}</span>
     <ul class="side-bar__items">
      ${subMenuItems}
     </ul>
   </div>`
      );
    }, "");

    template.innerHTML = domString;
    this.subMenuContainer.appendChild(template.content);
  }
}
