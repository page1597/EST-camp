document.querySelector("input")!.addEventListener("onChange", (e) => {
  const target = e.target as HTMLInputElement;
  console.log(target.value);
});
// as 안쓰고 타입 경고 없애기
document.querySelector("input")!.addEventListener("onChange", (e) => {
  const target = e.target;
  if (target instanceof HTMLInputElement) {
    console.log(target.value);
  }
});
