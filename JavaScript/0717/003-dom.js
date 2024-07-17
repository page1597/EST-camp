const input = document.createElement("input");
const p = document.createElement("p");
document.body.appendChild(input);
document.body.appendChild(p);

const myButton = document.querySelector("button");
const myInput = document.querySelector("input");
const myP = document.querySelector("p");
// myButton.addEventListener("click", function () {
//   myP.textContent = input.value;
// });

// myButton.addEventListener("click", function () {
//   if (2 > myInput.value.length) {
//     alert("2글자 이상 입력해라");
//     return;
//   }
//   myP.textContent = myInput.value;
// });

// 입력을 실시간으로 보여줌
myInput.addEventListener("input", () => {
  myP.textContent = myInput.value;
});

myP.innerHTML = "<p>sdsf</p>";

const target = document.querySelector("h2");
const txtColor = target.style.color; // 현재 스타일 정보를 가져옵니다.
target.style.color = "blue"; // 현재 스타일 정보를 변경합니다.
target.style.fontWeight = "bold"; // 현재 스타일 정보에 font-weight 속성이 없다면 추가합니다.
// target.style.color = null; // 현재 스타일 정보를 제거(초기화)합니다.
/**
 * beforebegin
 * <태그>
 * afterbegin
 *
 * ---컨텐츠---
 *
 * beforeend
 * </태그>
 * afterend
 **/

target.style.backgroundImage =
  "url(https://images.unsplash.com/photo-1721141025940-178650e08b4b?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
target.insertAdjacentHTML("beforeend", "<h2>반갑습니다</h2>");

// const sayHi = document.querySelector("h2");
// target.insertAdjacentHTML("beforebegin", "<span>안녕하세요</span>");

const cont = document.querySelector(".cont");
console.log(cont.firstElementChild); // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild); // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling); // 이전 형제노드를 찾습니다.
console.log(cont.children); // 모든 자식요소를 찾습니다.
console.log(cont.childNodes); // 모든 자식노드를 찾습니다.
console.log(cont.parentElement); // 부모 요소를 찾습니다.
// 자기 자신부터 시작해 부모로 타고 올라가며 가장 가까운 cont 클래스 요소를 찾습니다. 단, 형제요소는 찾지 않습니다.
console.log(cont.querySelector("strong").closest(".cont").innerHTML);
