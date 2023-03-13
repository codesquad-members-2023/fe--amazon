github

- github 기반 온라인 코드 리뷰 방법 학습
  - pr, merge, rebase

HTML

- HTML tag
  - 의미에 맞는 tag(이미지, 제목, 문단, 표, 목록, 강조 등)
  - attribute(class, id, data, style)
  - 닫히지 않는 태그
- HTML5 기본 Layout
- DOM Tree
- HTML 시멘틱 태그
- 웹 접근성

CSS

- Flexbox
- CSS 속성
- block vs lnline
- inline, internal, external
- Cascading
- CSS Selector
- BOX Model
- CSS Layout
  - 직관적인 레이아웃 코드

JavaScript

- DOM APIs
- EVENT

HTML, CSS 디버깅

코딩컨벤션

브라우저 동작 방식(렌더링)

### 1주차 미션 구현

1. HTML
   - [x] header_main layout
   - [x] header_nav layout
   - [x] svg 파일 이용해서 img 파일 넣기
   - [x] html 네이밍 규칙에 대해 학습하고 나만의 규칙 세우기
   - [ ] img 태그에 alt 속성에 대해 정리하기(alt 작성하기)
2. CSS
   - [ ] position, flex에 대해 정리하기
   - [ ] font-face, font-family 정리하고 학습하기
   - [ ] css styling의 순서
   - [ ] z-index 공부
3. JavaScript
   - [x] 페이지 로딩 후 1초 뒤에 login 레이어 나타내기
   - [x] 특정 영역 마우스 hover가 되면 확장된 버전의 레이어 나타내고 배경 딤처리하기
   - [x] 특정 영역 마우스 hover가 종료되면, 레이어와 효과 사라지게 하기
   - [x] mouseover <-> mouseenter 차이점
4. etc
   - [x] figma 사용법 배우기
   - [ ] git fork, pr, draft pr 등 과정에 필요한 내용 익숙해지기
   - [ ] git 커밋메시지 작성법 공부

1주차 코드 리뷰

1. `<!DOCTYPE html>`의 의미(브라우저에게 어떤 것을 알려주는 것인지)
2. ul >li의 사용 목적(목록을 표현)과 메뉴 항목의 경우 li 태그가 아닌 다른 html 태그를 사용할 수 있도록 고민해보기
3. CSS 변수 활용의 브라우저 지원 범위
4. CSS font-family 사용시에, font가 없을 경우에 대체 font를 설정하는 방법

배운 것
CSS에서 clip-path로 다각형을 만드는 경우, 내부의 요소들의 정렬은 다각형 전체 크기 기준으로 동작한다.

look-back
마우스 hover 이벤트로 모달창을 띄우는 경우, 해당 요소의 padding을 고려해야 한다(모달창까지 마우스 hover 이벤트를 가져가기 위해서)

추가로 해야할 것

- [ ] 페이지 로딩 후 로그인 창 애니메이션 추가
- [ ] 사이드바 레이아웃 및 애니메이션, 이벤트 추가
- [ ] login section, shipping section 레이아웃 변경하기(마우스 호버 이벤트 버그)
- [x] 딤처리 하기
- [ ] svg 파일 색상 css로 제어하기
- [ ] 작성한 css 내용 공부하기
- [ ] 창 크기를 줄였을 때, 요소들의 줄바꿈 방지 - wrap
