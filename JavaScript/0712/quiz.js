const obj = {
  num: 1,
  func() {
    setTimeout(function () {
      // 별개의 환경에서 동작 -> window에서 동작
      console.log(this); // 는 window 객체이다.
    }, 1000);
  },
};

obj.func(); // window 객체여서, 호출한 곳이 window여서는 애매하다.는 아님
// setTimeout 함수가 별개의 동작에서 작동하기 때문에

/*
 setTimeout에 전달된 콜백 함수는 기본적으로 일반 함수로 호출되기 때문에,  
 일반적으로 콜백 함수 내의 this는 전역 객체(window)를 가리킵니다. (window.setTimeout)
*/
