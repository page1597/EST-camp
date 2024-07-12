function 함수3(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(함수3()); // 60
console.log(함수3(100)); // 150
console.log(함수3(100, 200)); // 330
console.log(함수3(100, 200, 300)); // 600

console.log(함수3((c = 1000))); // 1050. 1030이 되어야 하는거 아니에요?
console.log(함수3(undefined, undefined, 1000)); // 1030

console.log(함수3((c = 1000), (a = 2000))); // 3020이 되어야 하는거 아니에요?
