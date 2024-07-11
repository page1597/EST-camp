// 함수를 선언하는 방법

// 1. 함수 선언식
func1(); // 함수 선언 전에도 함수 호출 가능(호이스팅)
console.log("--- 함수 선언식 ---");
function func1() {
  console.log("함수 선언식");
}

// 함수 표현식은 호이스팅 때문에 선언 전에 사용할 수 없다.
console.log("--- 함수 표현식 ---");
// 함수를 변수에 할당
// 함수 -> 자바스크립트 값
// func2(); // 오류 발생. 이유: let은 블록스코프를 가지기 때문
// 선언부 만나기 전까지 값 할당되어있지 없음 (TDZ)
let func2 = function () {
  console.log("함수 표현식");
};
func2();

// func3(); // 엥.. var로 해도 실행 오류가 남..
// 아하 값이 undefined이기 떄문에
// 값에 접근할 수 있으나, 함수로서 실행할 수 없다.
var func3 = function () {
  console.log("함수 표현식");
};
func3();

// 화살표 함수 - 함수 표현식으로만 사용 가능
console.log("--- 화살표 함수 ---");
function sum1(a, b) {
  return a + b;
}
// 함수 표현식
const arrowFunc = (a) => 2 * a;
console.log(arrowFunc(10));

// 메서드에서 콜백함수
// 함수의 인자로 다르 함수를 전달
[1, 2, 3, 4, 5].map((item, index) => {
  console.log(item, index);
  return item + index;
});
[1, 2, 3, 4, 5].map((item, index) => item + index);

console.log("--- 즉시 실행 함수 ---");
(function () {
  console.log("함수를 바로 실행합니다.");
})();

const iifeFunc = (function () {
  console.log("표현식으로 작성한 즉시 실행함수");
  let value = 0;
  return {
    increment: function () {
      value++;
    },
    print: function () {
      console.log(value);
    },
  };
})();
console.log(iifeFunc);
iifeFunc.print();
iifeFunc.increment();

// 단축평가를 이용한 반환값
function test() {
  return null || "b";
}
console.log(test());
