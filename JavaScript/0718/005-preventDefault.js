window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
    this.alert("해당 페이지에서는 오른쪽 클릭을 제한합니다.");
  },
  false
);
