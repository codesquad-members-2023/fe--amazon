// utility 함수에 넣기(범용적인 함수, 나만의 유틸리티 함수를 만들자. 함수의 집합을 만들자. npm에 올려보자. 오픈소스 활동을 시작해보자)
export const _ = {
  addAClass : (className, ...selectors) => {
    console.log(className, ...selectors);
    return [...selectors].forEach(selector => {
      selector.classList.add(className);
    });
  },

  removeAClass : (className, ...selectors) => {
    return [...selectors].forEach(selector => {
      selector.classList.remove(className);
    });
  },

  addClasses : (selector, ...classNames) => {
    return [...classNames].forEach(className => {
      selector.classList.add(className);
    });
  },

  removeClasses : (selector, ...classNames) => {
    return [...classNames].forEach(className => {
      selector.classList.remove(className);
    });
  }
}