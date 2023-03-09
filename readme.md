# 🎯 아마존

## ✏️ 학습 내용

###

## git

- pull request

  1. Fork  
     Upstream Repository를 자신의 저장소로 Fork(Origin Repository)한다.
  2. Clone & remote 설정

  ```
  $ git clone {복사한 URL}
  ```

  3. 내 컴퓨터에 생성된 로컬저장소에 원격저장소를 추가

  ```
  $ git remote add post{별명} {복사한 URL}
  ```

  4. branch 생성

  ```
  $ git switch -c {브랜치 명}

  // branch 확인
  $ git branch
  ```

  5. 수정 후 add, commit, push

  - editor를 통해 코드 수정한다.
  - 작업이 완료되면 Github Repository(origin)에 add, commit, push한다.

  ```
  $ git push origin {브랜치 명}
  ```

  6. pull request

  - push 완료후 자신의 github 저장소에서 **Compare & pull request** 버튼이 활성화 되어있는걸 확인할 수 있다.
  - 버튼을 클릭해 Pull Request를 생성한다.

  7. Merge pull request

  - pr을 받은 관리자는 코드 변경 내역을 확인하고 merge를 결정한다.

  8. Merge 이후 동기화 및 branch 삭제

  - Merge가 완료되면 로컬 코드와 원본의 코드를 병합하고 최신의 상태를 유지하게 위해 동기화한다.
  - upstream 확인

  ```
  $ git remote -v
  ```

  - upstream 추가

  ```
  $ git remote add upstream
  $ git fetch upstream
  $ git merge upstream/master
  $ git branch -d {브랜치 명}
  ```

- 위 명령어를 통해 동기화하고, 브랜치를 삭제한다.
- 나중에 추가적으로 작업이 또 필요하다면, 동기화를 한 뒤 3-7번을 반복하면서 작업하면 된다.

- pull request를 하는 이유
  - 자연스러운 코드 리뷰를 위해
  - push 권한이 없는 오픈 소스 프로젝트에 기여할 때
- pull request와 merge request의 차이  
  사실상 같은 용어이며 아래와 같은 차이가 있다.
  - [github] pull request : 내가 작업한 branch를 master 입장에서 pull 하는 것
  - [gitlab] merge request :내가 작업한 branch 입장에서 master에 merge 하는 것
- draft  
  [full request] - [Reviewers] - [still in progress?] - [Convert to draft] click  
  <img width="320" alt="image" src="https://user-images.githubusercontent.com/88878874/223031668-051e4067-d4b9-4aae-82e0-567ccef22166.png">
  - 아직 작업 중인 것을 알릴 수 있으며 코드 리뷰는 받을 수 없다.
  - merge도 불가능하다.
  - [Ready for review] : 보통의 pull request 상태로 변경된다.

## html

### sementic tag

- div
- header
- section
- nav
- footer
- aside

## 💻 기능 구현

### 1주차

- 상단 네비게이션 바
  - 공통
    - [x] 각 호버 영역 혹은 레이어 영역은 마우스가 벗어나면 레이어와 효과가 사라지게 한다.
    - [x] 상단바는 화면의 가로 사이즈가 1120px 이상으로 늘어나는 경우, 검색바가 길어지고 화면의 가로사이즈에 맞춰 늘어나도록 한다.
    - [] 이 때 본문 영역은 1120px로 고정비를 유지하도록 한다.
  - 로그인
    - [x] 메인 페이지 진입 1초 뒤 [로그인] 버튼 스르륵 보이게 한다.
    - [x] [로그인] 영역에 마우스를 호버하면 확장된 버전의 레이어가 뜨게 한다.
    - [x] 이 때 배경은 딤 처리 한다.
  - 배송처 영역
    - [x] [배송처 영역]에 마우스를 호버하면 주소 변경에 대한 레이어가 뜨게 한다.
    - [x] 로그인 레이어와 동일한 배경은 딤 처리 한다.
  - 모달
    - [x] 우측 상단 - 국가, 계정 및 목록
    - [x] alert이나 confirm 함수를 사용하지 않는다.
- 사이드 바
  - [ ] 상단 바의 [모두] 버튼을 누르면 좌측에 사이드바가 애니메이션과 함께 나온다.
  - [ ] X 버튼으로 사이드 바가 닫히도록 한다.
  - [ ] 로그인 버튼은 실제로 동작하지 않는다.
  - [ ] 각 목록은 마우스를 호버하면 배경색과 아이콘 색이 변하는 효과를 준다.
  - [ ] [모두 보기]를 클릭하면 접혀 있는 카테고리가 아래로 펼쳐지게 하고 애니메이션을 준다.
  - [ ] [간단히 보기]를 클리갛면 애니메이션 효과와 함께 목록이 다시 접히게 한다.
  - [ ] [부서별 쇼핑] 하위 카테고리를 누리면 우측에서 좌측으로 내역이 보이도록 애니메이션을 준다.
  - [ ] 각 카테고리 항목은 실제로 작동하지 않는다.

## 📒 reference

[pull request](https://velog.io/@zansol/Pull-Request-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

[eslint & prettier](https://wooogy-egg.tistory.com/82)
[sementic tag](https://stonefree.tistory.com/59)
