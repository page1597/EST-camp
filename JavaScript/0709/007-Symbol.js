// Symbol
// ES6 추가 문법
// 고유하고 변경 불가능한 식별자를 자동으로 만듦
let sym1 = Symbol();
console.log(sym1); // Symbol(). 이 값은 알 수 없음
let sym2 = Symbol();
console.log(sym2);

let sym3 = Symbol("name");
let sym4 = Symbol("name");
console.log(sym3);
console.log(sym3 === sym4); // false. 매번 새로운 생성자를 만듦

const passwordSymbol = Symbol("password");
const licat = {
  name: "라이캣",
  [passwordSymbol]: "#0000",
  name: "라이캣2", // x
};
console.log(licat);
// 식별자 만들 때 사용, 객체의 키 값으로 사용
