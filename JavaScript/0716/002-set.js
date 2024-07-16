// Set: 모든 타입의 값을 저장하는 객체자료형
// 객체 안의 값 중복 허용 x
let s = new Set("abcdeeeeeeeeeee");
console.log(s);
console.log(s.size);

s.add("f");

for (var variable of s) {
  console.log(variable);
}
let ss = new Set("abcdeeeeeeeee".split(""));
console.log(ss);

// 값 제거
ss.delete("b");

// 값 확인
console.log(ss.has("a"));

// 모든 값 제거
ss.clear();

const s1 = new Set([1, 2, 3]);
const s2 = new Set([2, 3, 4]);
// node 22v 이상이어야 함
// 사파리, 크롬, 엣지, 파이어폭스 최신버전에서 사용 가능
console.log(s1.difference(s2));

// 교집합
const s3 = new Set([1, 2, 3]);
const s4 = new Set([2, 3, 4]);
s3.intersection(s4); // Set(2) {2, 3}
[...s3].filter((item) => {
  return s3.has(item);
});

회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (이름이 같은경우 동일인물입니다.)
// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?

// 문제 1: 회사게시판 배열(게시판 전체 글 작성자 배열)에서 중복을 제거한 set을 만들고, 그 set 안의 요소 개수를 출력한다.
let writers = new Set(회사게시판);
console.log("문제 1 답:", writers.size);

// 문제 2:
// let posts = {};
// writers.forEach((post_writer) => {
//   posts[post_writer] = 회사게시판.filter(
//     (writer) => writer === post_writer
//   ).length;
// });
let map = new Map();
// for (const i of 회사게시판) {
//   map.set(i, (map.get(i) || 0) + 1);
// }
for (const name of 회사게시판) {
  if (map.has(name)) {
    map.set(name, map.get(name) + 1);
  } else {
    map.set(name, 1);
  }
}
console.log("문제 2 답:", map);
