# 🪴 Jayden's Week-01

- `23.03.06(Mon) ~ 23.03.10(Fri)`

## 🌵 Jayden's Keywords

- HTML
  - flex, grid
- CSS
  - BEM
  - Scss
- HTML, CSS 디버깅
- branch, commit 올바른 분리
- 코딩 컨밴션

## 🌴 Jayden's Rules

- 용도에 맞는 올바른 semantic 태그를 사용한다.(`div`, `span` 태그를 남발하지 않는다.)
- 눈으로 보기에만 가지런한 게 아닌, html/css 기능을 통해 확실하게 `일정한 간격`을 갖게 한다.
- DOM api를 명확히 알고 사용한다.

## 🌲 Jayden's Check List

- [x] readme 작성하기
- html 레이아웃 만들기
  - [ ] 상단 header 영역
  - [ ] 좌측 사이드 메뉴
- 모달
  - [ ] 우측 상단: 국가, 계정 및 목록

## 🌳 Jayden's Organization

- `draft` Pull Request
  - 아직 변경 사항이 완료되지 않았고 리뷰 및 피드백을 받길 원할 때 설정한다.
  - 작업을 공유하고 다른 기여자들로부터 피드백을 받을 수 있다.
  - 변경 사항이 완료되기 전에 검토하여, 프로세스 초기에 잠재적인 문제를 파악할 수 있다.
  - 아직 병합하면 안되는 PR임을 가시적으로 알 수 있다.

- 코딩 컨벤션
  - 읽고 관리하기 쉬운 코드를 작성하기 위한 코딩 스타일 약속
  - 특히 자바스크립트는 다른 언어에 비해 유연한 문법구조를 갖고 있기에 더욱더 중요하다.
  - 보통 ESLint와 같은 린터를 사용한다는 가정하에 린터로 검출할 수 없는 모호한 부분을 가이드로 작성한다.
  - 참고: [Toast UI 코딩 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)

- upstream에서 fork 후 local로 clone할 때, main 브랜치 없이 clone이 가능한가?
  - clone 후에 main 브랜치를 삭제하면 된다.(혹시 모르니 일단은 두기로)

- feature1 브랜치에서 작업 후, pr을 날린 상태에서 feature1을 기반으로 feature2를 작업해야한다. 이 때, 아직 feature1이 머지가 안되었다면 어떻게 할까?
  - feature1에서 feature2 브랜치를 따서 작업한다. 이후 feature1이 main에 머지되면 자연스럽게 feature2도 main에서 따온 것처럼 된다.

- 웹 접근성(예정)
- 웹 사이트 접속 시 브라우저의 렌더링 과정(예정)

## 🪵 Reference

- [Naver Coding Convention](https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md)
- [CSS BEM](https://nykim.work/15)
- [HTML elements & attributes](https://heropy.blog/2019/05/26/html-elements/)