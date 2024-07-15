// 001-func.js

function test() {
  // 키워드를 넣지 않고 선언 -> 전역변수로 선언됨
  a = 1;
}
test();
// 그래서 함수에서 만든 a변수가 사라지지 않고 살아있다.
// console.log(a); // 1

function testb() {
  // var -> 함수 스코프 -> 함수가 종료되면 사라진다.
  var b = 1;
}
testb();
// console.log(b); // Reference 에러

let z = 100;
function sum(x) {
  let y = 50;
  z = z + y;
  return x + y;
}
console.log(sum(10)); // 60
// console.log("x", x); // Reference 에러
// console.log("y", y); // Reference 에러
console.log("z", z); // 150

if (true) {
  const a = 1; // 블록 스코프
  let b = 2; // 블록 스코프
  var c = 3; // 함수 스코프
}
console.log(a); // 에러
console.log(b); // 에러
console.log(c); // 3

for (var index = 0; index < 10; index++) {
  console.log(index);
}
console.log(index); // 10

for (let index = 0; index < 5; index++) {
  console.log(index);
}
console.log(index); // 5가 나오지 않음
