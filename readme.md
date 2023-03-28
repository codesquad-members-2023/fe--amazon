# 🪴 Jayden's Week-01

- `23.03.06(Mon) ~ 23.03.10(Fri)`

## 🌵 Jayden's Keywords

- HTML
  - flex, grid
- CSS
  - BEM
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
  - [x] 상단 header 영역
  - [x] 70rem(1120px) 기준 width 반응형
  - [x] 좌측 사이드 메뉴
- 모달
  - [x] 우측 상단: 국가, 계정 및 목록

## 🌳 Jayden's Organization

### `draft` Pull Request

- 아직 변경 사항이 완료되지 않았고 리뷰 및 피드백을 받길 원할 때 설정한다.
- 작업을 공유하고 다른 기여자들로부터 피드백을 받을 수 있다.
- 변경 사항이 완료되기 전에 검토하여, 프로세스 초기에 잠재적인 문제를 파악할 수 있다.
- 아직 병합하면 안되는 PR임을 가시적으로 알 수 있다.

### 코딩 컨벤션
  
- 읽고 관리하기 쉬운 코드를 작성하기 위한 코딩 스타일 약속
- 특히 자바스크립트는 다른 언어에 비해 유연한 문법구조를 갖고 있기에 더욱더 중요하다.
- 보통 ESLint와 같은 린터를 사용한다는 가정하에 린터로 검출할 수 없는 모호한 부분을 가이드로 작성한다.
- 참고: [Toast UI 코딩 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)

### upstream에서 fork 후 local로 clone할 때, main 브랜치 없이 clone이 가능한가?
  
- clone 후에 main 브랜치를 삭제하면 된다.(혹시 모르니 일단은 두기로)

### feature1 브랜치에서 작업 후, pr을 날린 상태에서 feature1을 기반으로 feature2를 작업해야한다. 이 때, 아직 feature1이 머지가 안되었다면 어떻게 할까?
  
- feature1에서 feature2 브랜치를 따서 작업한다. 이후 feature1이 main에 머지되면 자연스럽게 feature2도 main에서 따온 것처럼 된다.

### css에서 변수를 만들어서 사용하기

- 아래와 같이 `:root` 에 변수를 설정해준다.
- 설정한 변수를 `var(변수명)`형태로 사용한다.

```css
/* Global */

:root {
  /* Color */
  --color-white: #ffffff;
  --color-gray-100: #eff2f2;
  --color-gray-200: #e5e9e9;
  --color-gray-300: #dce0e0;
  --color-gray-400: #d5d5d5;
  --color-gray-500: #c1c1c1;
  --color-gray-600: #878787;
  --color-gray-700: #535353;
  --color-gray-800: #2a3648;
  --color-gray-900: #1b232f;
  --color-black: #10141a;
  --color-black-tr40: rgba(16, 20, 26, 0.4);

  --color-yellow-100: #fed15f;
  --color-yellow-200: #febe30;
  --color-yellow-300: #de9408;
  --color-orange-100: #fcb057;
  --color-orange-200: #ff9900;

  --color-purple: #941387;
  --color-navy: #074099;
  --color-green: #0c5e72;

  /* Font size */
  --font-large: 48px;
  --font-medium: 28px;
  --font-regular: 18px;
  --font-small: 16px;
  --font-micro: 14px;
}

div {
  color: var(--color-orange-100);
}
```

### box-sizing 설정

- 기본적으로 `content-box`로 설정되어있다.
  - content-box: width, height가 padding 내부의 content를 기준으로 한다.
  - border-box: width, height가 content, padding, border를 포함한 것을 기준으로 한다.

### `reset css` vs `normalize css`

- reset css: 브라우저가 기본적으로 제공하는 내장 스타일을 모두 초기화
  - 최근에는 [new css reset](https://elad2412.github.io/the-new-css-reset/)이 자주 사용된다.
- normalize css: 가능한 브라우저들의 내장 스타일을 건드리지 않는 선에서 브라우저들 간의 차이점을 통일
  - 같은 `h1` 태그라도 브라우저마다 여백의 크기가 조금씩 다를 수 있다. 이런 부분을 동일하게 통일해준다.

### css 상속(inheritance)과 적용 우선 순위(cascading)

- 상속: 상위(부모) 태그에 적용된 스타일이 하위(자식) 태그에도 상속되어 적용되는 것
  - 몇몇 상속이 안되는 스타일이 있는데, 주로 box-model과 관련된 스타일이다. ex) padding
- 적용 우선 순위: css는 어떻게 스타일을 적용하느냐에 따라 그 우선순위가 다르다.
  - 우선순위로는 `사용자 설정` - `inline style` - `internal stylesheet` - `external stylesheet` - `browser default`로 점점 낮아진다.
  - 또한, css의 `specificity`에 따라 `class`보다 `id`가 스타일에 대한 우선순위를 갖는다.(더욱 자세한 선택자일수록 우선순위를 갖는다.)
- (주의) css의 상속과 캐스케이딩은 엄밀히 다른 개념!!!

### `display: flex`에서 `flex-grow` 속성이란?

- display가 flex로 설정된 태그의 자식 태그들에 사용하며, 각 자식 태그들은 기본적으로 `flex-grow: 0;`이다.
- 더 높은 숫자를 설정하게 되 다른 태그들과의 사이에서 해당 숫자의 크기 비율을 갖는다.

### css 상대 단위 2대장: `em` vs `rem`

- em: 위치한 곳을 기준으로 font-size에 대한 배율(해당 요소에 font-size 없으면 부모 요소, 없으면 또 부모 요소)
- rem: 위치한 곳과 상관없이 가장 최상위 요소(root; html 태그)의 font-size에 대한 배율
- (주의) em은 너무 상대적인 느낌이고 rem은 그나마 절대적인 root를 기준으로 하기에, rem 사용을 좀더 추천한다.
- (나만의 팁) 전체적인 레이아웃은 %로 맞추되, 그 안에 디테일한 박스 크기는 rem으로 해주면 편한 것 같다!

### 웹 접근성(예정)

### 웹 사이트 접속 시 브라우저의 렌더링 과정(예정)

## 🪵 Reference

- [Naver Coding Convention](https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md)
- [CSS BEM](https://nykim.work/15)
- [HTML elements & attributes](https://heropy.blog/2019/05/26/html-elements/)
- [Box-model: content-box vs border-box](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [reset css과 normalize css](https://www.daleseo.com/css-normalize-reset/)
- [css 상속(inheritance)과 적용 우선 순위(cascading)](https://poiemaweb.com/css3-inheritance-cascading)
- [css media query](https://www.daleseo.com/css-media-queries/)

# 🪴 Jayden's Week-02

- `23.03.13(Mon) ~ 23.03.17(Fri)`

## 🌵 Jayden's Keyword

- CSS
  - SCSS, 그 외 다른 CSS 라이브러리
- DOM api
- Vite 번들러
- component
- vanilla extract

## 🌴 Jayden's Rule

- DOM api를 명확히 알고 사용한다.
- 최대한 DOM 조작에서 안전한 js 코드를 짠다.
- 리팩토링에 많은 공을 들여보자!!!

## 🌾 Jayden's Learning Plan

- Mon: DOM api 및 Event delegation 학습(코드스쿼드 자료)
- Tue: 리팩토링 진행 및 vanilla extract 학습
- Wed: 리팩토링 완전 집중!!! 작게라도 component 열심히 나누기!!!
- Thu: 리팩토링 및 애니메이션 작업
- Fri: 개념 복습 및 구현 디테일 살리기

## 🌲 Jayden's Check List

- [x] readme 작성하기
- [x] sidebar
  - [x] 항목 접기/펼치기
  - [x] 하위 메뉴 영역 노출
- [x] `리팩토링`(변수명, 함수 분리 등)
  - [x] css 파일 분리
  - [x] class component
  - [x] vanilla extract 사용해보기

## 🌳 Jayden's Record

### DOM api가 존재하는 이유

- DOM Tree를 탐색하기 위해 JS로 탐색 알고리즘을 구현하면 너무 힘고 번거롭다.
- 해서 브라우저에서 DOM Tree를 탐색하기 위한 다양한 DOM api를 제공한다.

### textNode vs elementNode

- DOM의 노드들은 대부분 text 노드와 element 노드로 나누어진다.
- firstChild, nextSibling 등은 태그 사이의 공백인 textNode까지 인식한다.
- firstElementChild, firstElementChild 등은 textNode를 제외한 elementNode만 인식한다.
- 우리는 주로 textNode를 이용할 일이 없기 때문에, 주로 element가 들어간 api를 이용한다.

### Event(이벤트)

- 주로 유저에 행동에 의해 발생하는 사건
- ex) click, scroll, mouseover, mouseenter 등

### Event Listener(이벤트 리스너)

- addEventListener의 인자로 전달된 콜백 함수
- 말 그대로 어떤 이벤트를 듣게 되었을 때, 실행되는 함수를 의미한다.
- Event Handler(이벤트 핸들러)라고도 한다.

### 이벤트 위임

- 발생한 이벤트에 대한 리스너를 버블링(혹은 캡쳐링)을 이용해서 상위 태그에 달아서 이벤트에 따른 함수를 실행하는 방법
  - 버블링: 이벤트가 발생한 요소에서 상위 요소로 가는 단계
  - 캡쳐링: 상위 요소에서 이벤트가 발생한 요소로 가는 단계
  - 캡쳐링은 사용할 일이 거의 없고, 주로 버블링을 통한 이벤트 위임을 사용한다.

### `stopPropagation` vs `preventDefault`

- stopPropagation: 특정 태그에서 이벤트의 전달을 막는 api
- preventDefault: 해당 태그가 가진 기본적인 기능을 막는 api

### git stash

- a 브랜치에서 b 브랜치를 따고 로컬에서만 b 브랜치에 변경 사항이 발생하면 a 브랜치로 스위치가 가능하다.
  - 이유: commit을 기준으로는 변경이 일어나지 않았고, 로컬에서 워킹 디렉토리에서만 변경이 있기 때문에 b에서의 변경사항 이 a로 그대로 가져가진다.
  - 이 때! stash 혹은 commit을 해서 변경사항을 반영할 수 있는데, 솔직히 커밋은 기능 단위로 하는 경우가 많기에 함부로 commit을 하기 애매하다.
  - 이 때 stash를 통해 최근 커밋 기준 다음 변경사항들을 따로 빼두는 것이다.
  - 그렇다면 언제 `브랜치를 변경하기 전에 commit 혹은 stash를 하라`는 에러가 발생할까?
  - a 브랜치에서 b 브랜치를 따고 b 브랜치에서 작업을 한 뒤 커밋을 한다. 그러고 나서 또다시 로컬(워킹 디렉토리)에서 작업을 하고 a로 옮기려고 하면 에러가 발생한다.
  - 이 때, stash로 변경사항을 잠깐 빼두든가 아니면 또다시 커밋을 해서 변경사항을 반영하고 옮기면 된다.

### el.firstChild가 때로는 textNode로 뜨지 않을 때!(feat. 브라우저)

- 브라우저에서는 html 파일들의 요소들이 최적화되어 공백없이(textNode가 없이) 정리된다.
- 해서 firstChild로 textNode가 안찍히기도 한다!

### 템플릿 엔진이란?

- 템플릿 양식과 특정 데이터 모델에 따른 입력 자료를 합성하여 결과 문서를 출력하는 소프트웨어(또는 소프트웨어 컴포넌트). 그냥 템플릿 라이브러리라고 생각하면 된다.  
- 지정된 템플릿 양식에 데이터가 합쳐져서 html 문서를 출력하는 소프트웨어 즉, 화면을 어떻게 만들지 도와주는 양식이다.
- 그저 이름을 템플릿 엔진이라고 붙여서 조금 헷갈린다.
- Handlebars, Mustache 등이 있다.(넓게 보면 react, vue 등도 템플릿 엔진이다.)

## 🪵 Reference

- [이벤트 위임](https://www.grapecity.com/blogs/html-and-wijmo-events/)
- [stopPropagation vs preventDefault](https://ismydream.tistory.com/98)
- [Git stash](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Stashing%EA%B3%BC-Cleaning)
- [템플릿 엔진](https://velog.io/@hi_potato/Template-Engine-Template-Engine)

# 🪴 Jayden's Week-03

- `23.03.20(Mon) ~ 23.03.24(Fri)`

## 🌵 Jayden's Keyword

- 애니메이션 원리
- 레이아웃, 페인트, 컴포지트
- Sass
- 캐로셀(무한 슬라이드)
- OOP

## 🌴 Jayden's Rule

- CSS 전처리기가 무엇인지 확실히 공부하자
- Sass, Scss에 대해서 깊이 있게 공부하고 무조건 쓰는 게 좋은건지 의문을 갖자
- 브라우저가 html, css, js를 읽고 페이지를 그리기까지의 과정을 설명할 수 있을 정도로 깊게 알기
- 프론트엔드에게 있어 OOP는 어떻게 사용하면 될지 고민해보기
- 무한 슬라이드가 되는 캐로셀 구현하기

## 🌾 Jayden's Learning Plan

- Mon: 학습 계획 작성 및 개념 공부 정리, 저번주 못한 부분 최대한 마무리
- Tue: 최대한 리펙토링할 수 있는 코드 리펙토링해보자
- Wed: 캐로셀에 대해 공부하고 일단 유한한 캐로셀 구현하기
- Thu: 무한 슬라이드로 캐로셀 구현해보기
- Fri: 개념 복습 및 못다한 구현, 코드 정리

## 🌲 Jayden's Check List

- [x] readme 작성하기
- [x] 학습 내용 정리 및 개념 공부
  - [x] Sass
  - [x] 애니메이션
  - [x] 웹 페이지 렌더링 과정
  - [x] 프론트엔드의 OOP 그리고 prototype
  - [x] 캐로셀 + 무한 슬라이드
- [ ] 지난번 못다한 내용
  - [x] 사이드바 완성
  - [x] 애니메이션 처리
  - [ ] 구현 시각적인 부분 디테일 살리기
- [x] 캐로셀 구현
  - [x] 유한 슬라이드
  - [x] 무한 슬라이드

## 🌳 Jayden's Record

### CSS 전처리기(CSS Preprocessor)

- 전처리기만의 문법을 더한 CSS 머듈 정도로 생각하면 된다.
- CSS가 갖는 불리한 점들을 보완하기 위함이며 대부분 CSS를 프로그래밍 언어처럼 사용할 수 있게 해준다.(변수, 함수, 조건문 등)
- 결국 CSS에 대한 슈퍼셋(확장셋)이기 떄문에 CSS로 컴파일되어야만 한다.

### Sass/Scss

- Sass의 버전 3부터 CSS와 좀더 가까운 문법인 Scss가 등장

### Scss 변수 선언 방법

```scss
$jayden-color: #111111;

.button {
	background-color: $jayden-color;
}
```

```scss
// CSS
.container {
  margin-top: 10px;
}

.container .item {
  padding: 10px;
}

// Sass
.container {
  margin-top: 10px;

  .item {
    padding: 10px;
  }
}
```

### @mixin

- css에서의 함수라고 생각하면 된다. 변수도 $로 만들어서 전달할 수 있다.

```scss
@mixin jayden-styles($flexDirection: row, $backgroundColor: #000000) {
	display: flex;
	flex-direction: $flexDirection;
	justify-content: space-between;
	align-items: center;
	background-color: $backgroundColor;
} 

.jayden-box {
	@include jayden-styles(column, #ffffff);
}
```

### @extend

- 타입스크립트의 클래스 상속과 같은 기능. 그러나 css media-query 내에서 실행되지 않으며 Sass 가이드라인에서도 사용을 권장하지 않는다.

```scss
.a {
	padding: 1rem;
}

.b {
	@extend .a;
	background-color: tomato;
}
```

### @import

- 외부에 모듈화해서 분리해 놓은 Sass 파일을 불러와 병합하여 사용가능하다.(js의 모듈처럼)

> CSS @import는 사용할 때마다 매번 http 호출을 하기 때문에 속도 저하를 가져온다.
> 그러나 Sass @import는 CSS로 컴파일하여 바로 처리하기 때문에 http 호출이 필요하지 않아 속도 저하 문제를 발생시키지 않는다.

#### @import 사용 팁

1. 보통 변수와 @mixin은 따로 Sass 모듈 파일로 만들고 @import하여 사용한다.
- 이 때, 파일명 앞에 `_`를 붙이면 CSS로 컴파일 되지 않는다.
- 예를 들어 `_mixin.scss`, `_header.scss` 파일명을 만들고, 주 파일에서 @import 하면 2개(`_mixin.scss`, `_header.scss`)의 파일 내용은 주 파일에 적용되지만 `_mixin.scss`, `_header.scss` 파일은 css로 컴파일 되지 않기 때문에 관리하기가 편리해진다.

2. 하나의 @import로 여러 파일을 불러올 수 있다.
- 이 때, 파일명으로만 @import해도 알아서 확장자는 .scss인 것을 알기 때문에 안붙여도 된다.(주의: css 파일은 @import 시 .css를 붙여줘야 한다.)
```scss
@import '_aaa', '_bbb';
```

## 🪵 Reference

- [Sass, Scss](https://www.biew.co.kr/entry/Sass%E3%86%8DSCSS-%EC%86%94%EC%A7%81%ED%95%9C-%EC%9E%A5%E3%86%8D%EB%8B%A8%EC%A0%90-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%84%A4%EC%B9%98%EB%B0%A9%EB%B2%95)
- [브라우저에서 페이지를 렌더링하는 방식](https://ajdkfl6445.gitbook.io/study/web/browser-rendering)
- [window.requestAnimationFrame()](https://developer.mozilla.org/ko/docs/Web/API/window/requestAnimationFrame)

# 🪴 Jayden's Week-04

- `23.03.27(Mon) ~ 23.04.01(Fri)`

## 🌵 Jayden's Keyword

- fetch
- Promise
- 비동기 통신 
- 비동기 네트워크 API
- 검색창(구현)

## 🌴 Jayden's Rule

- 비동기 통신에 대한 개념을 확실히 잡자
- fetch api를 깊게 공부하고 활용해보자
- Promise패턴이 어떻게 동작하는지 이해하기
- mock server와의 연동
- (더 나아가보기) nodejs express로 간단한 서버 만들어보기(고민)

## 🌾 Jayden's Learning Plan

- Mon: 학습 계획 작성 및 개념 공부 정리, 리팩토링
- Tue: 개념 공부 및 검색창 구현 시작(설계)
- Wed: Node.js(express) 서버 공부(변경 가능)
- Thu: 간단한 서버 구현 및 검색창 구현(계속)
- Fri: 개념 복습 및 못다한 구현, 코드 정리

## 🌲 Jayden's Check List

- [x] readme 작성하기
- [x] 학습 내용 정리 및 개념 공부
  - [x] 비동기 통신
    - [x] fetch api(+ axios도 공부만!)
  - [ ] HTTP 공부 및 복습
- [ ] 지난번 못다한 내용
  - [x] 리팩토링(간단한 부분은 완료, 진행하면서 더 다듬기)
  - [ ] 시각적인 부분 디테일
- [ ] 구현사항
  - [ ] 검색창 구현
    - 추천 검색어, 최근 검색어 노출
    - 키보드를 통한 결과 도출 가능
    - 실제 검색 결과 노출 view는 없어도 됨
    - 검색창 자동완성 데이터를 서버와 연동해서 가져오는 방식 활용
    - get 요청(request) query를 보내 응답(response)을 받는다.
  - [ ] nodejs express로 간단한 서버 구현

## 🌳 Jayden's Record

### 동기(synchronous)?

- 동시에 일어난다는 의미로, 여기서 동시에 일어난다는 것은 `요청`과 `결과`가 동시에 일어난다는 의미
- 앞의 코드가 아직 실행 중이라면 그 실행이 끝날 때까지 기다려야한다.(블로킹)
- 설계가 매우 간단하고 직관직이다.

### 비동기(asynchronous)?

- 동시에 일어나지 않는다는 의미로, 여기서 동시에 일어나지 않는다는 것은 `요청`과 `결과`가 같은 자리에서 동시에 일어나지 않음을 의미
- 동기보다 복잡하지만 결과가 주어지는데 시간이 걸리더라도 그 시간에 다른 작업을 할 수 있어, 시간적으로 좀더 효율적이다.

### setTimeout의 동작원리?

```js
setTimeout(() => console.log('비동기입니다.'), 10000);
```

setTimeout은 브라우저의 V8 엔진 자체에 내장되어있는 함수가 아니다. 웹 브라우저가 제공하는 api인 WEB API 중 하나이다.
실행되면 10000ms 즉, 10초 뒤에 cb(callback) 함수를 실행해달라는 이벤트가 등록되고 10초 뒤에 cb가 실행된다.

### 아래의 말을 이해해보기

`자바스크립트는 싱글 쓰레드 기반이며 논 블로킹 방식의 비동기적인 동시성 언어이며 콜 스택, 이벤트 루프와 콜백 큐 그리고 여러가지 다른 API들을 가지고 있다.`

- 자바스크립트는 싱글 쓰레드이지만, 실행되는 환경(브라우저, nodejs 등)에서 제공하는 event loop, callback queue를 통해 비동기적으로 작동할 수 있다.

### JSON(JavaScript Object Notation)

- 이전에는 주로 XML 형식으로 서버에 데이터를 요청했다. 하지만 이후 비동기적으로 데이터를 요청해서 받을 수 있는 방법이 생겨나면서 JSON 형식의 데이터를 받아올 수 있게 되었다.
- 사실상 XML은 이제 거의 잘 안쓰이고 있으며, JSON 형태를 거의 표준처럼 사용하고 있다. 클라이언트에서 데이터를 보낼 때나 받을 때 모두 JSON 형태를 사용할 수 있다.

### fetch api

- 기존에는 XMLHTTPRequest 객체를 통해 비동기 데이터 통신을 진행하였다.
- 점점 비동기 요청이 더 복잡하고 증가되면서, 비동기통신 로직에 보기 좋은 패턴이 적용되고 있다.
- fetch api는 프로미스 패턴을 사용하여 비동기 로직을 좀더 동기적으로 보이게끔 해준다.(가독성을 높여준다.)

### Promise 패턴

- Promise 객체를 사용하여 비동기 처리를 동기적인 것처럼 보여주는 패턴이다.

### Promise: all vs allSettled

- Promise.all(): 모든 Promise 객체가 fulfilled되면 resolve한 값들의 배열을 반환. 단, 하나라도 에러 발생 시 즉시 reject한 값 반환.
- Promise.allSettled(): fulfilled와 rejected 상관없이 모든 Promise 객체가 settled가 되면 그 결과를 반환해준다.

### Promise: race vs any

- Promise.race(): fulfilled든 rejected든 그저 가장 먼저 settled된 값을 반환한다.
- Promise.any(): 먼저 처리된 상태들 중에서 fulfilled인 상태만 반환한다.(만약 모든 Promise에서 fulfilled가 없다면 `AggregateError` 발생)

### Promise의 then

- Promise를 통해 resolve와 reject 함수를 실행시킬 수 있다.
- 이 때, 어떤 값을 resolve하게 되면 그 때 우리는 그 값을 then의 내부 콜백함수의 파라미터로 받아서 로직을 처리할 수 있다.
- 좀 단순하게 생각해보자면, `then(cb)`를 통해서 우리는 `resolve`가 발생했을 때(이벤트 개념), then으로 전달한 `cb`를 resolve로 전달한 값과 함께 `micro task queue`에 보내게 된다.


## 🐛 Jayden's Problem


## 🪵 Reference

- [동기와 비동기](https://private.tistory.com/24)
- [이벤트 루프란?](https://baeharam.netlify.app/posts/javascript/event-loop)
- [이벤트루프란 무엇인가? - JSConf](https://www.youtube.com/watch?v=8aGhZQkoFbQ)