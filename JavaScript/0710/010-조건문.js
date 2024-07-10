// 조건문
console.log("--- if ---");

/*
if (조건식) {
    조건식이 만족했을 때 실행할 코드
}
*/

// 점수에 따라 칭찬 메시지를 출력
let score = 100;
if (screen > 80) {
  // 조건식이 true일 때
  console.log("참 잘했습니다.");
} else {
  // 조건식이 false일 떄
  console.log("분발하세요!");
}
// 코드가 할 줄일 때만 중괄호 생략 가능
if (true) console.log("중괄호를 생략");
// 가독성 좋지 않아서 웬만하면 중괄호 표시하는 게 좋음

console.log("--- 조건이 여러개 ---");
// 80점 초과이면 참 잘했어요
// 60점 초과이면 잘 했어요
// 그 외에는 분발하세요

let score2 = 50;
if (score2 > 80) {
  console.log("참 잘했어요");
} else {
  if (score2 > 60) {
    console.log("잘 했어요");
  } else {
    console.log("분발하세요!");
  }
}

console.log("--- else if ---");
if (score2 > 80) {
  console.log("참 잘했어요");
} else if (score2 > 60) {
  console.log("잘 했어요");
} else if (score2 > 40) {
  console.log("했어요");
} else {
  console.log("분발하세요");
}

score2 = 100;
if (score2 > 40) {
  console.log("했어요");
} else if (score2 > 60) {
  console.log("잘 했어요");
} else if (score2 > 80) {
  console.log("참 잘했어요");
} else {
  console.log("분발하세요");
}
