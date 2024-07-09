// 배열의 특징
const arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // 10
console.log(arr[4]); // 50
console.log(arr[10]); // undefined
console.log(arr[-1]); // undefined

// 음수 인덱스 -> at
console.log(arr.at(-2)); // 40

console.log("---길이---");
console.log(arr.length); // 5
arr.length = 2;
console.log(arr); // [10, 20]
arr.length = 5;
console.log(arr); // [10, 20, 비어 있음 × 3]

// 배열의 요소
const arr2 = [10, 20, "hello"]; // 1차원 배열 => 백터 (vector)
console.log(arr2);

const arr3 = [
  [10, 20],
  [30, 40],
]; // 2차원 배열 => 행렬 (matrix)
console.log(arr3[0][1]); // 20

const arr4 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
]; // 3차원 배열 => 텐서(tensor)
console.log(arr3[1][0][0]); // 5
