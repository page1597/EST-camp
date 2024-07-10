// 객체: 키와 값의 쌍(프로퍼티)의 묶음
// 순서 보장 x
const obj = {
  name: "민서",
  state: "졸림",
  "co-woker": ["라이캣", "웨이드"], //변수명 작성 규칙 안지켰을 때
  sayHello() {
    console.log("Hello World");
  }, // 메서드: 객체의 값으로 들어가는 함수
}; // 키(key): 값(value)
// 키: 문자열, Symbol 사용 가능
// 값: any (문자열, 숫자, Symbol, 함수(메서드)), ...

console.log(obj["name"]);
console.log(obj.state); // key값이 변수명 작성 규칙을 만족할 때만 가능
console.log(obj["co-woker"]); // 이렇게 문자열 인덱스로 접근해야 함
console.log(obj.co); // undefined

// 메서드
obj["sayHello"]();
obj.sayHello();

const key = "name";
console.log(obj[key]); // 키를 변수 사용해서 접근하려면 대괄호로 접근해야 함

/* 객체 수정 */
// 프로퍼티 변경
obj["name"] = "하티";
console.log(obj);

// 프로퍼티 추가
obj["job"] = "FE";
console.log(obj);

// 프로퍼티 삭제
delete obj["job"];
console.log(obj);

// 프로퍼티 값 확인 (in) (변수 값은 찾지 않아요)
// includes와 비슷한 역할
console.log("state" in obj); // true
console.log("job" in obj); // false
console.log("졸림" in obj); // false
