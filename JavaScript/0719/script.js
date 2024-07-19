function Robot(name, menu) {
  this.name = name;
  this.menu = menu;
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
  this.selectRandomMenu = function () {
    const randomIndex = Math.floor(Math.random() * this.menu.length);
    const randomMenu = this.menu[randomIndex];
    console.log(`오늘의 메뉴는 ${randomMenu}입니다.`);
  };
}
const menu = ["간장비빔국수", "로제파스타", "새우볶음밥", "토스트", "라면"];
let myRobot = new Robot("robot1", menu);
myRobot.selectRandomMenu();
