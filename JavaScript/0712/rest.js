function 함수2(a, b, ...c) {
  //   console.log(a);
  console.log("c:", c);
  return Math.max(...c);
}

함수2("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}

함수2([1, 2], 10, 20, 30, 40);
