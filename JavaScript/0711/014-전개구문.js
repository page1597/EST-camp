// 전개구문 (...)

// 배열의 전개구문
const fruits = ["사과", "파인애플", "수박"];
const fish = ["조기", "갈치", "다금바리"];
const food = [...fruits, ...fish];
console.log(food);
console.log(fruits.concat(fish));

const copyFruits = [...fruits]; // 배열 복사
copyFruits.push("망고");
console.log("fruits", fruits);
console.log("copyFruits", copyFruits); // 복사된 배열에만 '망고' 추가
// 배열의 전개구문 -> 얕은 복사
// (concat도 얕온복사)

console.log("--- 객체의 전개구문 ---");
const weniv1 = { gary: 1, binky: 2 };
const weniv2 = { licat: 3 };
const weniv = { ...weniv1, ...weniv2 };
console.log(weniv);

const me = { name: "weniv", address: "jeju" };
const copyMe = { ...me };
copyMe.number = 1;
console.log("me", me);
console.log("copyMe", copyMe);

// 객체의 전개구문 : key값이 동일하면 덮어쓰기(가장 마지막에 오는 값)
const obj1 = { name: "weniv", address: "jeju" };
const obj2 = { address: "seoul" };
const obj = { ...obj1, ...obj2 };
console.log(obj);
