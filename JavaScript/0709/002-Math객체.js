// Math 객체

// 원주율
console.log(`Math.PI: ${Math.PI}`);

/* 숫자를 버림, 반올림, 올림 */

// 버림
console.log(`Math.floor: ${Math.floor(4.7)}`); // 4

// 반올림
console.log(`Math.round: ${Math.round(4.7)}`); // 5
console.log(`Math.round: ${Math.round(4.3)}`); // 4

// 올림
console.log(`Math.ceil: ${Math.ceil(4.3)}`); // 5

/* 정부수만 가져옴 */
console.log(`Math.trunc: ${Math.trunc(4.7)}`); // 4
console.log(`Math.trunc: ${Math.trunc(-1.5)}`); // -1

console.log(`toFixed: ${(-1.6).toFixed(0)}`); // -2. 반올림이 일어난다.
console.log(`toFixed: ${(-1.4).toFixed(0)}`); // -1. 반올림이 일어난다.

// 제곱
console.log(`Math.pow: ${Math.pow(2, 3)}`); // 8
console.log(`2 ** 3 = ${2 ** 3}`); // 8

// 제곱근
console.log(`Math.sqrt: ${Math.sqrt(16)}`); // 4

// 절댓값
console.log(`Math.abs: ${Math.abs(-5)}`); // 5
console.log(`Math.abs: ${Math.abs(4)}`); // 4

// 랜덤 숫자
console.log(`Math.random: ${Math.random}`);
// 0 <= x < 1 랜덤숫자를 만듦
console.log(`1부터 10까지의 랜덤 함수: ${Math.floor(Math.random() * 10 + 1)}`);

// 가장 큰 값 max
console.log(`Math.max: ${Math.max(10, 20, 30, 40, 20)}`);
// 가장 작은 값 min
console.log(`Math.min: ${Math.min(10, 20, 30, 40, 20)}`);
