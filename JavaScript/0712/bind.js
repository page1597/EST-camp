/* function sayName() {
        console.log(this.name);
      }
      var bruce = {
        name: "bruce",
        sayName: sayName,
      };
      var peter = {
        name: "peter",
        sayName: sayName.bind(bruce), // 이 시점에 bind. 고정
      };
      peter.sayName(); // bruce
      bruce.sayName(); // bruce
      */

function sayName() {
  console.log(this.name);
}
var bruce = {
  name: "bruce",
};
const bruceSayName = sayName.bind(bruce);
bruceSayName();
