// undefined

let a;
// undefined는 타입이 undefined이다.
console.log(a); // undefined
console.log(typeof a); // undefined

if (b) {
  // 오류가 발생
  console.log("b 입니다.");
}

if (typeof b === "undefined") {
  // 오류가 발생x 왜냐면 타입이 문자열이기 때문
  console.log("b는 선언되지 않았습니다.");
}
