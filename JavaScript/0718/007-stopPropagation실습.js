// p태그 클릭 -> 콘텐츠 보여주는 alert
// 삭제 버튼 클릭 -> confirm -> 삭제

const p = document.querySelectorAll("p");

p.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    this.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        alert(node.textContent);
      }
    });
  });
});
