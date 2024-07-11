// 반복문
const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];

let text = "<ul>\n";
text += "<li>" + weniv_friends[0] + "</li>\n";
text += "<li>" + weniv_friends[1] + "</li>\n";
text += "<li>" + weniv_friends[2] + "</li>\n";
text += "<li>" + weniv_friends[3] + "</li>\n";
text += "<li>" + weniv_friends[4] + "</li>\n";
text += "</ul>\n";

console.log(text);
document.body.innerHTML = text;

let text2 = "<ul>";

for (let i = 0; i < weniv_friends.length; i++) {
  text2 += "<li>" + weniv_friends[i] + "</li>\n";
}
text2 += "</ul>";
console.log(text2);
document.body.innerHTML += text2;

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) sum += i;
}
console.log("1.", sum);

const score = [84, 92, 39, 55, 71];
let total = 0;
for (let i = 0; i < score.length; i++) {
  total += score[i];
}

console.log("2.", total / score.length);
