// 배열
const arr = [];
const arr2 = [1, 2, 3, 4];

console.log(arr);
console.log(arr2);

// Array 생성자 함수
const arr3 = new Array(10, 20, 30);
console.log(arr3);

// 생성자 함수 주의사항
const arr4 = new Array(5); // 인자가 하나인데 숫자다 -> 길이
console.log(arr4); // [비어 있음 × 5]

const arr5 = new Array("a");
console.log(arr5); // ["a"]
