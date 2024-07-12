// 구조분해할당// 개선할 여지가 있는 예제
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {
  // 회원 등급 권한
  console.log("함수기능");
  return;
}

함수4("Gold", true, true, true, "대화방 전체 백업 가능", true); // 가독성이 떨어진다.

function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}
const 회원데이터 = {
  회원등급: "Gold",
  글쓰기: true,
  글읽기: true,
  채널관리: false,
  백업: "부분가능",
  소셜로그인여부: true,
};
함수4(회원데이터);

const num = 1;
const name = "원범";
const obj = { num, name };
console.log(obj);

function getNum() {
  return 1;
}
function getName() {
  return "원범";
}
function objFactory() {
  const name = getName();
  const num = getNum();
  const obj = { name, num };
  return obj;
}
console.log(objFactory());
