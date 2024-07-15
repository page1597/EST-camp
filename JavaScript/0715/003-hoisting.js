// 호이스팅
// 이렇게 함수 선언 앞에 실행해도 호이스팅 때문에 잘 실행됨
sayHi();
function sayHi() {
  console.log("hi");
}

// 이건 안됨
// ReferenceError: Cannot access 'sayHello' before initialization
sayHello(); // undefined를 실행한게 됨 -> 결과: undefined
const sayHello = () => {
  console.log("hello");
};
// 왜 안되지?
// 이유: 호이스팅이 일어나서 -> undefined로 초기화
