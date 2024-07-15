/**
 * 콜백 함수
 * : 함수에 매개변수로 전달되어 실행되는 함수
 **/

const a = () => {
  console.log("오");
};
// 함수 a를 대신 실행해주는 콜백 함수
const callback = (fn) => {
  fn(); // 이때 실행함
};

callback(a); // 이때 a를 실행한 건 아니고

const fnFactory = () => {
  return () => {
    console.log("dd");
  };
};
const callback2 = (fn) => {
  fn();
};
// callback2(fnFactory()); // 리턴값: 함수
const createdFunction = fnFactory();
callback(createdFunction);

//  forEach의 사용을 통한 콜백함수
let arr = [1, 2, 3, 4, 5];
arr.forEach((item) => console.log(e ** item));
