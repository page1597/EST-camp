// while

let num = 0;
while (num < 11) {
  console.log(num);
  num++;
}
console.log("--- while문 이중 반복문 ---");
let i = 2;
let j;
while (i <= 9) {
  console.log(`---${i}단---`);
  j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
// 종결문 또는 반복문을 종료하는 탈출구문(break) 구문 없으면 -> 무한루프
