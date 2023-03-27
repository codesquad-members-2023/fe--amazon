## NANII - FE1. Amazon Website

## 학습계획서

### 학습 키워드
- [x] HTML
  - [x] HTML 시멘틱태그
  - [x] HTML 5 Layout tag
  - [x] HTML 웹접근성
- [x] CSS
  - [x] CSS Flexbox 사용법 정리
- [x] 브라우저의 렌더링과정
- [x] 코딩컨벤션

### 구현 계획
- [x] 월 : 키워드 정리 `Create draft pull request`
- [x] 화 : main, header, nav `Push`
- [x] 수 : `Create pull request(midpoint)`
- [x] 목 : side, search `Create draft pull request`
- [x] 금 : `Create pull request`

### 주요 개발 feature
- [x] 화면 레이아웃
  - [x] header
  - [x] left side menu
- [x] 모달기능
  - [x] 우측 상단 : 국가, 계정 및 목록
  - [x] hover 효과 or click 효과 구현
  - [x] 모달 영역 alert / confirm 함수 사용X
  - [x] 모달 위치 디자인 가이드라인 따르기
- [x] 상단 네비게이션바
  - [x] 로그인 호버 : 확장 버전 레이어 뜨고, 배경 딤처리
  - [x] 배송처 호버 : 확장 버전 레이어 뜨고, 배경 딤처리
  - [x] 호버 아웃 : 효과 사라지게
  - [x] 상단바 1120px이상 늘어나면 검색바 늘어나게 (본문은 유지)
- [x] 좌측 사이드 메뉴
  - [x] 모두 클릭 : 카테고리 바 -> 애니메이션
  - [x] X 버튼 : 사이드바 닫힘 -> 애니메이션
  - [ ] 각 목록 호버 : 배경색, 아이콘 변하는 효과
  - [x] 모두 보기 (아래화살표) : 접혀있던 카테고리 펼침 -> 애니메이션
  - [x] 간단히보기 (위화살표) : 전체 카테고리 접힘 -> 애니메이션
  - [x] 부서별 쇼핑
    - [x] 하위 카테고리 누르면 우측에서 좌측으로 목록 이동
    - [x] 상세 카테고리 내역이 보이도록 애니메이션 처리


## NANII - FE2. Amazon Website

### 학습 키워드
- [x] 대체폰트, 폰트정리
- [x] JS 리팩토링, 함수안에 넣기
- [x] Event delegation
- [x] DOM template literal 문법


### 주요 개발 feature
- [x] 좌측 메뉴 영역
  - [x] 항목 접기/ 펼치기
  - [x] 하위 메뉴 영역 노출

### 학습 계획
- [x] 월 :리뷰 보완하기
- [x] 화 : 학습 강의 보고 정리하기
- [x] 수 : Javascript file 코드 수정
  - [x] max - height
  - [x] overflow
  - [x] 딤 이벤트 추가
- [x] 목 : 구현 보강하기
  - [ ] css 애니메이션 코드 수정하기
  - [x] js eventListener 함수로 구현하기
    - [x] 들여쓰기 제거
    - [x] 해체할당 적용
    - [x] reduce 활용
- [x] 금 : 리팩토링
  - [ ] css 애니메이션 -> transition으로만 시도해보기
  - [x] js 중복 최소화, 함수분리
  - [x] nav login mouseenter, mouseleave 이벤트 발생 위치 버그 수정

## NANII - FE3. Amazon Website
### 주요 개발 feature
- [x] 히어로 영역 Carousel UX 구현 (무한 슬라이더)
  - [x] 좌우 화살표
    - [x] 좌우 화살표를 통해 내용을 계속해서 변경가능
    - [ ] 화살표를 누르지 않는 경우, **자동으로 10초 마다** 다음 내용으로 넘어가도록 함
  - [ ] 콘텐츠 영역
    - [ ] 이미지의 사이즈에 따라 콘텐츠 높이 다르게 적용
    - [ ] **로딩 인디케이터**를 활용하여 처음 메인 페이지 진입했을 때와 스크롤 내렸을 때 총 2번 사용될 수 있도록 함
### 학습 계획
- [x] 월
  - [x] Sass
  - [x] Transition 영상 2개
  - [x] this (call, bind)
  - [x] 자바스크립트 애니메이션 (setInterval, setTimeout, requestAnimationFrame, Animations API)
- [ ] 화
  - [x] 객체지향프로그래밍 (class, 캡슐화, 상속, 다형성, 추상화)
  - [ ] 하드웨어 가속 페이지 정리
  - [x] Carousel 구현 동작에 대해 학습
- [x] 수
  - [x] 브라우저의 렌더링 과정
  - [x] CSS absolute, relative, min-width
  - [x] Carousel 구현 시도
- [x] 목
  - [x] 리뷰 리팩토링
    - [x] 1. login popup list JS 동적 구현하기
    - [ ] 2. sideBar class list 제거 코드 수정하기
- [x] 금
  - [x] Carousel 이미지 이동 구현하기
  - [ ] Sass 으로 변경해보기

## NANII - FE4. Amazon Website
### 주요 개발 feature
- [ ] **fetch API** 를 활용해 get/post 요청
- [ ] 검색창
  - [ ] 추천검색어, 최근검색어 노출
  - [ ] 키보드를 통한 검색결과 선택
  - [ ] 기타 UX 고려한 검색창 기능 설정하기
  - [ ] 검색자동완성을 json-server와 연동해서 가져오는 방식으로 개발
  - [ ] get방식으로 query보내고 응답데이터를 받아옴
  - [ ] mock server (json-server) 이용
- [ ] 슬라이딩 UX
  - [ ] 초기데이터를 json-server와 연동해서 가져오기
- [ ] 좌측메뉴
  - [ ] **초기데이터**와 **더보기데이터**를 구분해서 서버와 통신을 통해 가져오기

### 학습 계획
- [ ] 월
  - [ ] Carousel 자동으로 구현하기
    - [ ] requestAnimationFrame API
  - [ ] promise/then 방식의 사용법 학습하기 (async,await보다 promise)
    - [ ] Promise 패턴의 동작 원리 (resolve, reject, then 메서드등)을 이해
  - [ ] fetch API 사용법 학습하기
- [ ] 화
  - [ ] sass 학습하고 적용하기
  - [ ] stacking context 개념 학습하기