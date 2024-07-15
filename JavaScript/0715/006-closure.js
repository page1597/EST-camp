function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

console.log(제곱2(10));
console.log(제곱3(10));
// 제곱2 = 2 ** x. 제곱2(10) = 100
// 제곱3 = 3 ** x. 제곱3(10) = 1000

const x = 100;

function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100

// 비교대상

const xx = 100;

function a() {
  const xx = 1;
  function b() {
    console.log(xx);
  }
  b();
}

a();
