// 버튼 요소 가져오기
const myBtn = document.querySelector("button");
const $li = document.querySelector("li#two");
// // 버튼 클릭 이벤트 등록하기
// // myBtn.addEventListener("click", function () {
// //   console.log("hello world!");
// // });

// function sayHello() {
//   console.log("hello world");
// }
// function buttonMouseOver() {
//   console.log("마우스 올림");
// }
// myBtn.addEventListener("click", sayHello); // sayHello: 콜백함수
// // 아직 실행되지 않아 sayHello() 처럼 괄호를 붙이지 않고 함수 자체를 전달한다.
// // 클릭했을 때 실행. 함수의 실행 여부를 이벤트가 결정함
// myBtn.addEventListener("mouseover", buttonMouseOver); // sayHello: 콜백함수

myBtn.addEventListener("click", function () {
  myBtn.classList.add("blue");
  // document.getElementsByTagName
  $li.innerText = " ??";
});

// 화면에 요소 추가
const div = document.createElement("div");
document.body.appendChild(div);
div.innerText = "oh...";
