const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    const myLi = document.createElement("li");
    myLi.innerText = `2 * ${i} = ${2 * i}`;
    myUl.appendChild(myLi);
  }
});
