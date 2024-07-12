var peter = {
  name: "Peter",
  sayName: function () {
    console.log(this.name); // Bruce
  },
};
var bruce = {
  name: "Bruce",
};
// peter에 있는 sayHello를 호출하는데 this를 bruce로 바꿔서 호출해라.
// sayName을 bruce에서 불러라.
peter.sayName.call(bruce); // peter에 있는 sayName을 bruce에서 부르다
peter.sayName.call(); // 아무것도 안뜸 -> this를 빈 것으로 부름
