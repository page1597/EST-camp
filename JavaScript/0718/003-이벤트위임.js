// 이벤트 위임
const parent = document.querySelector(".parent");
parent.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.nodeName === "BUTTON") {
    event.target.textContent = "버튼4";
  }
});
