const parent = document.querySelector(".parent");
parent.addEventListener("click", function (event) {
  console.log(event.target, "target");
  console.log(event.currentTarget, "currentTarget");
});
