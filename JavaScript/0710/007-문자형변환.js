// 형 변환

// String - 함수
// null, undefined일 때를 대비한 안전한 변환 가능
console.log("--- 문자열 타입 --- ");
console.log("1. String()");
console.log(typeof String(23)); // "23"
console.log(String(NaN)); // "NaN"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// toString - 메소드
console.log("2. toString()");
console.log(true.toString()); // "true"
// console.log(3.toString()); // Syntax Error
console.log((3).toString()); // "3"
console.log((2.3).toString()); // "2.3"
console.log((3).toString(2)); // 11. 3을 2진수로 변환
console.log(null.toString()); // 오류 발생
console.log(undefined.toString()); // 오류 발생

console.log("3. 자동 형 변환 이용");
console.log(23 + ""); // "23"
console.log(true + ""); // "true"
console.log(null + ""); // "null"
console.log(undefined + ""); // "undefined"
