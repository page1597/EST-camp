// 재귀함수
// 본인이 본인을 호출하는 함수
// 종료조건 필수
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

// sigma: 1부터 n까지의 합을 계산하는 함수
function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}
// 피보나치 while문
function fibonacci(n) {
  let a = 1,
    b = 0,
    temp;
  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

let sum = 0;
for (let index = 0; index < 6; index++) {
  sum += index;
}

function sum(n) {
  if (n <= 1) {
    return n;
  }
  // 5일경우에는 5 + 4~1까지 더한값
  // 4일경우에는 4 + 3~1까지 더한값
  return n + sum(n - 1);
}
