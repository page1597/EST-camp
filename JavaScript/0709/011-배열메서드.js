// 배열의 요소를 추가하거나 삭제
const arr = [10, 20, 30];
console.log("--- push & pop ---");

// push
// 배열에 요소 추가 -> 마지막에 값을 추가
const length = arr.push(40); // 길이값을 반환
console.log(arr); // [10, 20, 30, 40]
console.log("length", length); // 4

// pop
const element = arr.pop();
console.log(arr); // [10, 20, 30]
console.log("element", element); // 40

console.log("--- shift & unshift ---");
// 배열에 요소 추가 -> 첫번쨰에 값 추가
arr.unshift(50); // 길이를 반환
console.log(arr); // [50, 10, 20, 30]
arr.shift(); // 첫번째 요소를 반환
console.log(arr); // [10, 20, 30]

// splice - 여러 개의 요소를 원하는 곳에 추가
console.log("--- splice ---");
const arr2 = [1, 2, 3];
console.log(arr2.splice(1, 0, 4, 5, 6)); // (index, 바꾸려는 값 개수, 추가하려는 값들..)
console.log(arr2); // [1, 4, 5, 6, 2, 3]

// 5, 6을 삭제
arr2.splice(2, 2);
console.log(arr2); // [1, 4, 2, 3]

// 변경
arr2.splice(3, 1, 5, 8);
console.log(arr2); // [1, 4, 2, 5, 8]

// splice는 기존 배열 변경. slice는 기존 배열 변경하지 않음
// slice
console.log("--- slice ---");
const fruits = ["사과", "바나나", "체리", "블루베리", "두리안"];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(3));

const fruits2 = fruits.slice(); // 원본 배열 유지. 하고 복사
fruits2[0] = "딸기";
console.log("fruits: ", fruits);
console.log("fruits2: ", fruits2);

{
  const arr1 = [1, 2, 3];
  const arr2 = arr1; // arr2 수정 -> arr1 변경됨
  arr2[2] = 1000;
  console.log(arr1);
}

console.log("--- sort ---");
fruits.sort();
console.log(fruits); // 유니코드 -> 사전식

const numbers = [1, 5, 2, 4];
numbers.sort();
console.log(numbers);

const numbers2 = [5, 100, 27, 36];
numbers2.sort();
console.log(numbers2); // [100, 27, 36, 5] 이상하게 정렬됨.
// 이유: 문자열로 정렬하기 때문에 사전식에 따라서 '1'로 시작하는 100이 맨앞에 옴

// 숫자를 오름차순 정렬 -> 비교 함수를 인자로 전달하여 정렬
numbers2.sort(function (a, b) {
  return a - b;
  /* 음수 -> 작은 값이 앞에 위치
     양수 -> 큰 값이 앞에 위치 */
});
console.log(numbers2);

// 숫자를 내림차순 정렬
numbers2.sort(function (a, b) {
  return b - a;
});
console.log(numbers2);

console.log("--- indexOf ---");
const arr3 = [1, 2, 3, 1, 2, 3, 4];
console.log(arr3.indexOf(2));
console.log(arr3.indexOf(5));
console.log(arr3.indexOf(2, 3)); // 4, arr3에서 값 2를 인덱스 3부터 검색하라는 뜻

console.log("--- includes ---");
console.log(arr3.includes(3)); // true
console.log(arr3.includes(5)); // false

console.log("--- forEach ---");
const fruits3 = ["참외", "키위", "감귤"];

fruits3.forEach(function (item, index) {
  console.log(item, index);
  fruits3[index] = item + "@";
});
console.log(fruits3);

console.log("--- map ---");
const arr4 = [10, 20, 30];
const newArr = arr4.map(function (item, index) {
  item * index;
});
console.log(newArr); // [undefined, undefined, undefined]
const newArr2 = arr4.map(function (item, index) {
  return item * index;
});
console.log(newArr2); // [0, 20, 60]
console.log(arr4); // [10, 20, 30]. 그대로이다.

// map은 새로운 배열을 반환한다.
// 원본 배열 수정: forEach
// 원본 배열 수정 없이 새로운 배열 반환: map

console.log("--- filter ---");
const arr5 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5];
const filterArr = arr5.filter(function (item, index) {
  // 짝수만
  return item % 2 == 0;
});

const filterArr2 = arr5.filter(function (item, index) {
  // 홀수만
  return item % 2;
});
console.log(filterArr2);

console.log("--- reduce ---"); // 계산 속도가 빠름
const arr6 = [1, 2, 3, 4, 5];
const reduceRes = arr6.reduce(function (acc, cur) {
  return acc + cur;
}, 0); // 초기값 (생략시, 첫번째 요소가 초기값이 됨)
console.log(reduceRes); // 15
/*
    acc = 0, cur = 1
    acc = 1, cur = 3
    acc = 3, cur = 6
    acc = 4, cur = 10
    acc = 5, cur = 15
    리턴값: 15
*/

console.log("--- join ---"); // split의 반대
const arr7 = ["hello", "world", "weniv"];
console.log(arr7.join(" ")); // hello world weniv
console.log(arr7.join("-")); // hello-world-weniv

console.log("--- concat ---"); // 배열 복사
const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];

// 배열(1차원)은 풀어서, 값은 요소로 넣는다.
// 원본 배열은 수정되지 않는다.
const concatRes = arr8.concat(arr9, 7, 8, [10]);
console.log(concatRes);

const arr10 = [0, 1, [2, 3]];
const copyArr = arr10.concat(); // 얕은 복사

copyArr[0] = 10; // 원래 배열은 안바뀜. (복사했으니까)
copyArr[2][0] = 20; // 이때는 copyArr 수정하면 원본 배열이 바뀜. 얕은 복사 (같은 주소값)

// 원시값들은 복사가 되고, 배열 안에 있는 객체값들은 주소값을 가지고 있으니까 주소가 복사.
// 실제로 객체는 가리키는 주소값이 같게 되는것임. -> 원본 배열도 변경됨
console.log("copy: ", copyArr);
console.log("origin: ", arr10);
