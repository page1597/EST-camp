outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2 => break
// 2 0
// 2 1 => break

console.log("--- label - continue ---");
outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      continue outer2;
    }
    console.log(i, j);
  }
}
