// 함수의 매개변수와 인자
// num1, num2 -> 매개변수(parameter)
function sum(num1, num2) {
  return num1 + num2;
}
sum(2, 3); // 2, 3 -> 인자(argument)

// 파선아실: 파라미터는 선언, 아규먼트는 실행

console.log("--- 매개변수와 인자의 특징 ---");
function sumNumbers(a = 10, b = 20, c = 0) {
  console.log(`-- ${a} + ${b} + ${c}`);
  return a + b + c;
}

console.log(sumNumbers(10, 20, 30, 40)); // 자바스크립트에서는 인자가 매개변수 개수보다 많아도 오류나지 않음
console.log(sumNumbers(10, 20)); // NaN
console.log(sumNumbers(0, undefined, 0)); // 20. undefined -> 기본값
console.log(null, 0, 0); // null
// 값이 전달되지 않았거나, undefined -> 기본값

console.log("--- 원시 call ---");
let number = 10;
function test(num) {
  num += 10;
  console.log("function", num);
}
test(number);
console.log(number);

console.log("--- 객체 call ---");
const object = { a: 1, b: 2 };
function test2(obj) {
  obj.c = 3; // 객체가 수정됨
  obj = { name: "weniv" };
  console.log("function", obj);
}
test2(object);
console.log(object);
