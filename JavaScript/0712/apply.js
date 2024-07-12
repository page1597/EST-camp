var peter = {
  name: "Peter",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};
var bruce = {
  name: "Bruce",
};
peter.sayName.apply(bruce, ["batman", "richman"]);
peter.sayName.call(bruce, ["batman", "richman"]); // 한번에 전달되는 듯?
