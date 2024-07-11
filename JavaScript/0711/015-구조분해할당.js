// 구조 분해 할당
// 구조를 분해해서 변수에 할당

const foods = {
  food1: "과일",
  food2: "생선",
  food3: "채소",
};
/*
let food1, food2, food3;
food1 = foods["food1"];
food2 = foods["food2"];
food3 = foods["food3"];
console.log(food1, food2, food3);
*/
let { two: myNum } = { one: 1, two: 2 };
console.log(myNum); // 2

let { one, two, three } = { one: 1, two: 2 };
// 변수명과 키값이 동일할 때 생략 가능
// let { one: one, two: two } = { one: 1, two: 2 };
console.log(one);
console.log(two);
console.log(three); // undefined

let { food1, food2, food3 } = foods;
console.log(food1, food2, food3);

console.log("--- 배열의 디스트럭쳐링 ---");
let [a, b, c] = [1, 2, 3, 4, 5];
console.log(a, b, c); // 1 2 3

let [d, , e] = [1, 2, 3, 4, 5];
// 빈값으로 두면 필요한 값만 가져온다.
console.log(d, e); // 1, 3

let [x, y, z] = [1, 2];
console.log(x, y, z); // 1, 2, undefined

console.log("--- 함수의 매개변수 --- ");
function func1({ a, b }) {
  console.log(a, b); // hello world
}
func1({ a: "hello", b: "world" });
// 매개변수 {a, b} = {a: "hello", b: "world"}

func1({ b: 20, a: 10 });

function func2([a, b, c]) {
  console.log(a, b, c);
}
func2([10, 20, 30]);
// 매개변수 [a, b, c] = [10,20,30] 인자
// 순서대로 들어간다!
