// map
const m = new Map();

m.set("하나", 1);
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

// const obj = { name: "kim", age: 20 };
// const key = "nickName";
// obj.nickName = "초원범";
// obj[key] = "초원범";

// Map의 값에 접근
console.log(m.get("하나"));
console.log(m.get(true));

// Map 객체에서 값이 있는지 확인
m.has("하나"); // true

// Object에서 값이 있는지 확인
const obj = {
  name: "kim",
  age: 20,
};
obj.hasOwnProperty("name");

m.delete("하나");

// object에서 값 지우기
delete obj.name;

// map 길이 가져오기
m.size();

// object 같이 가져오기 예시 하나만...
Object.keys(obj).length;

// Map에서의 순환
for (const variable of m) {
  console.log(`m을 순회 key: ${variable[0]}`);
  console.log(`m을 순회 value: ${variable[1]}`);
}
// m 순회하기
for (const [key, value] of m) {
  console.log(key, value);
}

// Map의 값에 접근
console.log(m.keys());
console.log(m.values());
console.log(m.entries()); // 키-값 쌍 가져오기

// m.entries().array.forEach((element) => {
//   console.log(element);
// });

// map의 모든 값을 지우기
m.clear();
