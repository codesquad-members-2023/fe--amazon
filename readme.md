# 기획서

- 기획서 링크 (https://www.figma.com/proto/QouMf5SljKnoyGEgcmWCUE/FE_%EC%95%84%EB%A7%88%EC%A1%B4%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8?page-id=17%3A4295&node-id=17%3A4304&viewport=157%2C190%2C0.25&scaling=contain&starting-point-node-id=17%3A4304)
- 디자인 링크 (https://www.figma.com/file/QouMf5SljKnoyGEgcmWCUE/FE_%EC%95%84%EB%A7%88%EC%A1%B4%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0%3A1)

# 1주차

- [x] 공부 (https://velog.io/@realsnoopso/TIL-%EC%BB%A8%EB%B2%A4%EC%85%98-HTML-%EC%8B%9C%EB%A9%98%ED%8B%B1-%ED%83%9C%EA%B7%B8-%EC%9B%B9%EC%A0%91%EA%B7%BC%EC%84%B1-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95)
- [x] 컴포넌트 만들기
  - [x] typography
  - [x] color
  - [x] symbols
  - [x] button
  - [x] navigation bar
  - [ ] footer
  - [x] sidebar
  - [ ] loading
- [x] 모달 구현
  - [x] CSS 코딩컨벤션
  - [x] Javascript 코딩컨벤션
  - [x] HTML 시멘틱 태그
  - [x] 웹접근성
  - [x] 웹사이트에 접속했을때 브라우저가 어떻게 렌더링되는가?

# 2주차

- [x] 공부 (https://velog.io/@realsnoopso/TIL-DOM-%EC%9D%B4%EB%B2%A4%ED%8A%B8)
  - [x] 노드 타입에 대한 이해
  - [x] node의 생성과 추가
  - [x] 노드의 속성
  - [x] dom 탐색
  - [x] dom 조작
  - [x] 이벤트 위임
  - [x] 이벤트 전파
  - [x] 클로저
  - [x] 스코프
- [x] 리팩토링
- [x] 디버깅

  - [x] 접는 영역 동적으로 픽셀 입력할 경우 스크롤이 원래대로 줄어들지 않는 버그 해결
  - [x] SidebarSub 를 열 때 스크롤 때문에 애니메이션이 어색해보이는 버그 해결

- [ ] Sidebar 이미 꺼낸 것은 다시 렌더링하지 않도록 쌓아두기
- [x] 메인 콘텐츠 슬라이드 작업
- [ ] Search 작업

# 3주차

- [ ] 리팩토링
  - [x] Icon 생성자 줄이기
  - [x] Icon 로딩 영역 다른 방법 생각해보기
  - [x] this.append(sidebarMainSectionStyle.call(this, id, foldingListHeight)); 부분 변수로 변경
  - [x] SidebarMainSectionDefault.js - section/data 변수명 구체적으로 변경
  - [x] slider.js - light, right 처리 과정 중복 처리
  - [ ] setInterval 문제점 찾아보기
  - [ ] prototype 방식의 객체 표현 방식을 1개 이상 구현해보기
- [x] 공부 (https://velog.io/@realsnoopso/TIL-%EC%9B%B9-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-OOP-Prototype)
  - [x] 웹 애니메이션
  - [x] OOP in JS
  - [x] prototype 과 상속
- [x] 슬라이더 디버깅
  - [x] 슬라이더 구조 변경해서 이미지 어색해보이는 부분 해결
  - [x] 슬라이더 클릭 액션과 자동으로 넘기는 액션 중첩되는 부분 해결
- [ ] 메인 콘텐츠 영역 추가하기
- [ ] Footer 추가하기

### 트러블 슈팅

![Screen Recording 2023-03-22 at 11 24 52 AM](https://user-images.githubusercontent.com/96381221/226837798-e3230b95-4709-41a8-99ad-893a3d436072.gif)

1. 슬라이드 이미지를 빠르게 움직일 경우 이미지가 겹쳐서 넘어감.

- 원인: 각각의 슬라이드 이미지 div에 tranlateX 애니메이션을 주어서 움직임. 여러 개의 애니메이션이 동시에 처리되니, 슬라이드 이동이 매우 빠르게 발생하면 브라우저가 처리하지 못한 애니메이션 프레임이 발생하여 슬라이드 이미지가 겹쳐 보이는 현상이 발생할 수 있음.
- 해결: 각각의 슬라이드에 애니메이션을 주지 않고 그 상위의 컨테이너 div에 애니메이션을 주고 해당 컨테이너를 이동시킴으로서 해결.

![Screen Recording 2023-03-22 at 4 59 36 PM](https://user-images.githubusercontent.com/96381221/226837607-ec3c9ad1-742a-4192-b933-44dfcb681986.gif)

2. 슬라이드를 왼쪽으로 넘겨도 공백 공간만 보이는 현상이 발생

- 원인: Slide가 왼쪽 정렬되어 있었음.
- 해결: 컨테이너 전체에 transform을 주면 클릭 애니메이션과 중복되는 문제가 있었음. 그래서 컨테이너 전체가 아니라 각각의 슬라이드에 transform을 주어 문제를 해결함.

# 4주차

- [ ] 공부
  - [ ] try, catch
  - [ ] Promise
    - [ ] resolve, reject, then 메서드 등
  - [ ] css - stacking context
- [ ] Search 작업
  - [ ] search GET api 작업
  - [ ] Search UI 작업
  - [ ] 검색 시 search api 호출
    - [ ] api 호출 지연 시키기
  - [ ] 아래로 내리면 무한 스크롤
- [ ] Sidebar 이미 꺼낸 것은 다시 렌더링하지 않도록 쌓아두기
- [ ] Sidebar 경계선에 border 추가

테스트 케이스

- [x] 사용자가 search input을 포커스하면 search UI가 열려야 한다.
- [x] 검색창 외부 영역을 클릭하면 검색창이 닫혀야 한다.
- [ ] 아무것도 입력하지 않은 상태에서는 추천 검색어가 떠야 한다. 만약 이전에 검색한 이력이 있다면 5개까지 보여줘야 한다.
- [ ] 검색한 이력은 삭제 버튼이 있으며 클릭하면 해당 검색 이력이 삭제 되어야 한다.
- [x] 검색어를 입력하면 해당 검색어가 10개까지 보여야 한다.
- [x] 검색 목록 중 검색 키워드는 보라색으로 강조 표시되어야 한다.
- [x] 검색 결과 중 hover 혹은 focus 상태일 경우 배경색이 어둡게 처리되어야 한다.
- [ ] 키보드 위, 아래 키를 누르면 포커스된 검색 항목을 변경할 수 있어야 한다.
- [x] 검색 결과가 없을 경우 search UI의 높이가 0이 되어야 한다.
- [ ] 검색어가 10개를 초과할 경우 스크롤을 가장 아래로 내리면 뒤의 10개를 추가로 불러와야 한다.
