console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].tagName);
console.log(document.body.childNodes[1].innerText);
console.log(document.body.childNodes[1].DOCUMENT_NODE);
console.log(document.body.childNodes[2].data);

// 해당하는 Id를 가진 요소에 접근하기
console.log(document.getElementById("title"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("list"));
document.getElementById("title").innerText = "!";
// css 선택자로 단일 요소에 접근하기
console.log(document.querySelector("li.one"));
console.log(document.querySelector("li#two"));
