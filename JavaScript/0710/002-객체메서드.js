// 객체 메서드
// 객체 프로퍼티 key, value, key-value 쌍
const user = {
  name: "hati",
  job: "fe",
  sayHello() {
    console.log("Hello World");
  },
};
console.log(Object.keys(user)); // key 배열 반환
console.log(Object.values(user)); // value 배열 반환
console.log(Object.entries(user)); // [key, value] 프로퍼티 쌍

// in과 같은 역할
console.log("--- hasOwnProperty ---");
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("company")); // false
// hasOwnProperty: 상속받은 프로퍼티는 찾지 못함

console.log("--- for in ---");
for (const key in user) {
  // 프로퍼티의 키 값들을 순회
  console.log(key, user[key]);
}
