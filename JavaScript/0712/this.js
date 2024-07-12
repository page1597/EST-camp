const button = document.getElementById("btn");
button.addEventListener("click", function () {
  // function이 객체 안에 있어서 button이 출력 // 화살표 함수로
  // 입력하면 window가 출력됨 -> 내가 생성된 곳(시점)을 기억함
  // 화살표 함수에서 this는 선언된 시점에 this가 고정됨.
  // function 키워드를 사용해서 함수 선언한 경우 this는 계속 바뀜. 호출될 때.
  //
  console.log(this);
});

/*
  function 키워드: 나 부른사람 누구야 -> 호출한 위치에 따라 다른 값 출력
  화살표: 나 여기에서 만들어졌어. 나 여기 소속이야.
*/

/**
 * - this는 어디에나 있다.
 * - 전역 this는 window다.
 * - 호출된 함수는 호출된 곳을 this로 바인딩한다.
 * - 실행되는 함수의 this를 임의로 bind할 수 있다.
 * - 화살표함수는 선언된 곳의 this를 바인딩한다.
 **/
