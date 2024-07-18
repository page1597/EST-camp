const btnSelect = document.querySelector(".btn-select");
const listMember = document.querySelector(".list-member");

// 버튼 토글 시 목록 display 속성 변경
btnSelect.addEventListener("click", (e) => {
  btnSelect.classList.toggle("on");
});

// 목록 항목 클릭 시 버튼 텍스트 변경 및 목록 숨기기
listMember.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    btnSelect.textContent = e.target.textContent;
    btnSelect.classList.toggle("on");
  }
});
