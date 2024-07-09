// null - 의도적으로 변수의 값이 없음을 나타냄

// 사용자의 로그인 정보
let isLoggedIn = true;
let currentUser = {
  name: "licat",
  level: 3,
};

// 로그아웃
// 로그인 되어있음 isLoggedIn 거짓
// currentUser 빈 값
isLoggedIn = false;
currentUser = null; // 개발자가 비어있는 값을 명시적으로 나타내기 위해 사용

/* undefined: 선언된 변수에 아직 값이 할당되지 않았음. 자바스크립트가 자동으로 넣는 값
   null: 개발자가 의도적으로 값이 없음을 알리기 위해 넣는 값 */
console.log(typeof currentUser); // object. null이 object로 나오는 것은 자바스크립트의 오류이다.
// 좀 더 정확하게 체크
console.log(Object.prototype.toString.call(currentUser)); // [object Null]
console.log(Object.prototype.toString.call(null)); // [object Null]
