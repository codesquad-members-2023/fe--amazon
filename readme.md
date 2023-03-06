# 코드스쿼드 개인 프로젝트 #1

HTML, CSS, JavaScript를 사용하여 아마존 웹페이지를 만들어본다.

</br>

# 1주차 학습계획

- [x] : 사전 학습 키워드 정리
- [ ] : HTML 레이아웃 구성
  - [ ] : 상단 네비게이션 바
    - [ ] : CSS
  - [ ] : 메인 페이지
    - [ ] : CSS
  - [ ] : 검색바
    - [ ] : CSS
  - [ ] : 사이드바
    - [ ] : CSS

</br>

# 학습 키워드

## 모달(Modal)

모달(Modal)은 사용자의 이목을 끌기 위해 사용하는 화면전환 기법이다.  
이목을 집중해야 하는 화면을 다른 화면 위로 띄워(Presenting) 표현하는 방식이다.  
모달로 보이는 화면을 사라지게 하려면 반드시 특정 선택을 해야한다는 특징이 있다.

## 배경 딤처리 (dimmed)

화면을 흐릿하게 하거나, 어둑하게 하는 것을 말한다.  
웹 어플리케이션에서 화면을 뿌옇게 처리하고 레이어 를 띄울 때, 딤 처리 또는 딤드(dimmed) 한다고 이야기 한다.

[CSS dimmed 처리방법](https://sub0709.tistory.com/35)

## 로딩 인디게이터

로딩 인디케이터(Loading Indicator)는 어떤 작업이 진행 중일 때 사용자에게 작업 진행 상황을 알려주기 위해 화면에 표시되는 시각적인 표시물이다.  
웹사이트에서는 페이지 로딩 중일 때, 무한 스크롤이나 데이터를 불러오는 등의 작업이 진행 중일 때 로딩 인디케이터가 사용된다.  
로딩 인디케이터는 주로 프로그레스 바(Progress Bar), 스피너(Spinner), 스케일링(Scale) 등의 모양으로 표현된다.  
이를 통해 사용자는 작업이 얼마나 남았는지, 언제 완료될 것인지 등을 예측할 수 있다.

## DOM API

DOM이란 HTML과 같은 문서를 트리 구조로 나타내며, 각 요소(element)는 객체로 나타내어진다.  
DOM API는 이 객체들을 조작하는 메서드와 프로퍼티를 제공하며 이를 통해 문서 구조를 동적으로 조작(이벤트 처리) 할 수 있다.

- document.getElementById(): 문서 내에서 특정 ID 값을 가진 요소를 찾아 반환합니다.
- document.createElement(): 새로운 HTML 요소를 생성합니다.
- element.setAttribute(): 요소의 속성 값을 설정합니다.
- element.addEventListener(): 이벤트 리스너를 추가합니다.
- element.appendChild(): 요소를 다른 요소의 자식으로 추가합니다.
- element.innerHTML: 요소의 내부 HTML을 수정합니다.
- element.classList.add(): 요소의 클래스를 추가합니다.
- element.style.property: 요소의 스타일 속성 값을 변경합니다.

## 코딩 컨벤션

코딩 컨벤션은 개발자들이 코드를 작성할 때 따라야 하는 규칙들의 모음이다.

### HTML 코딩 컨벤션

- 들여쓰기: 2칸 또는 4칸을 사용한다.
- 소문자: 모든 태그와 속성은 소문자로 작성한다.
- 태그 닫기: 모든 태그는 닫아준다 (예: <img> 대신 <img />).
- 인용부호: 속성 값은 큰 따옴표(")를 사용한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </body>
</html>
```

### CSS 코딩 컨벤션

- 들여쓰기: 2칸 또는 4칸을 사용한다.
- 소문자: 모든 선택자와 속성은 소문자로 작성한다.
- 중괄호: 중괄호({})는 선택자와 같은 줄에 쓴다.
- 세미콜론: 속성 값의 마지막에 세미콜론(;)을 붙인다.
- 공백: 선택자와 중괄호 사이에는 공백을 하나 둔다.
- 줄바꿈: 새로운 규칙을 작성할 때마다 줄을 바꾼다.

```css
body {
  background-color: #fff;
  color: #000;
  font-family: Arial, sans-serif;
}

h1,
h2,
h3 {
  font-weight: bold;
}
```

### JavaScript

- 들여쓰기: 2칸 또는 4칸을 사용한다.
- 세미콜론: 각 문장의 끝에 세미콜론(;)을 붙인다.
- 중괄호: 중괄호({})는 다른 줄에 작성한다.
- 변수 이름: 카멜 케이스(camelCase)를 사용한다.
- 상수: 상수 이름은 대문자와 언더스코어(\_)를 사용한다.

```js
const PI = 3.14;

function calculateArea(radius) {
  let area = PI_radius_radius;
  return area;
}

console.log(calculateArea(5));
```
