// do while

let num = 0;
// 조건식 만족하지 않더라도 한번 먼저 실행한다. (최소 한 번 실행 보장)
// 먼저 실행하고 -> 조건식 판별
do {
  console.log(num);
  num++;
} while (num < 11);

let inpNum;
let count = 0;
do {
  inpNum = window.prompt("숫자를 입력하세요");
  count++;
} while (inpNum === null || isNaN(inpNum));
console.log(`입력된 숫자는 ${inpNum}`);

if (inpNum !== null) {
  console.log(`입력된 숫자는 ${inpNum}`);
}
