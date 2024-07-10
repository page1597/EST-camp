// 연산

//1. 산술 연산
let x = 10;
let y = "3"; // + 연산만 결과가 바뀜, 나머지는 형변환되어 연산 잘 동작
console.log("x + y =", x + y);
// 숫자만 있으면 -> 더하기
// 문자가 하나라도 있으면 -> 문자열 연결
console.log(+"4"); //4
// 피연산자가 하나이면 -> 숫지형으로 변환
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);

console.log("--- 산술 할당 연산 ----");
// 산술 연산 + 할당 연산
let a = 10;
a += 20;
console.log("+=", a);

a -= 5;
console.log("-=", a);

a *= 2;
console.log("*=", a);
a /= 5;
console.log("/=", a);
a %= 4;
console.log("%=", a);
a **= 4;
console.log("**=", a);

console.log("--- 증감 연산자 ---");
let num1 = 10;

// 연산자가 앞에있으면 전위 / 뒤에있으면 후위

console.log(num1++); // 10
console.log(num1); // 11
console.log(++num1); // 12
console.log(num1); // 12

console.log(num1--); // 12
console.log(num1); // 11
console.log(--num1); // 10
console.log(num1); // 10
