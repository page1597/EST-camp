// p태그 클릭 -> 콘텐츠 보여주는 alert
// 삭제 버튼 클릭 -> confirm -> 삭제

const p = document.querySelectorAll("p");

// p.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     const value = e.target;
//     if (value.nodeName === "BUTTON") {
//       if (window.confirm("해당 태그 삭제?")) {
//         value.parentNode.remove();
//       }
//     } else {
//       window.alert(this.childNodes[0].textContent);
//     }
//   });
// });

p.forEach((el) => {
  el.addEventListener("click", function (e) {
    // window.alert(el.textContent);
    window.alert(this.childNodes[0].textContent);
  });
});

const delBtn = document.querySelectorAll("button");

delBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    // 이벤트 전파 방지
    e.stopPropagation();
    if (confirm("정말 삭제하시겠습니까?")) {
      el.parentElement.remove();
    }
  });
});
