// 숫자형 메서드

console.log("---parseInt---"); // Integer 정수
// 문자열 데이터 -> 숫자형

console.log(typeof parseInt("36"));
console.log(parseInt("36px")); // 36. 오류 발생하지 x 수집할 수 있는 값만 수집해서 변환.
console.log(parseInt("12.5px")); // 12. 정수
console.log(parseInt("width: 25px")); // NaN. 숫자로 시작하는 경우에만 가능

console.log("---parseFloat---"); // Float 실수
console.log(parseFloat("12.5px")); // 12.5. 실수
console.log(parseFloat("12.5~6px")); // 12.5
console.log(parseFloat("12.345~6px")); // 12.345

console.log("---isNaN---");
console.log(isNaN(23)); // false
console.log(isNaN(undefined)); // true
// * isNaN: 자동으로 숫자로 변환해서 확인.
// undefined를 숫자로 변환하면 NaN이 됨
console.log(isNaN("2345")); // false
console.log(isNaN("hello")); // true

console.log("---Number.isNaN---");
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN(undefined)); // false
// * Number.isNaN은 형변환이 일어나지 X
// 숫자 NaN만 NaN으로 처리
console.log(Number.isNaN("2345")); // false
console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN(NaN)); // true. 이때만 true
console.log(Number.isNaN("hello" * 3)); // true

console.log("---toFixed---"); // 정수 변환이라기 보다는 소수점 '표시'할때 주로 사용!(반올림)
const pi = 3.1415926;
console.log(pi.toFixed(2)); // 3.14. 소수점 아래 두자릿수 가져오기
console.log(pi.toFixed(10)); // 3.1415926000
console.log(typeof pi.toFixed(10)); // string. 결과값은 문자열
// 소수점 지정하거나 정수 부분만 가져오기
