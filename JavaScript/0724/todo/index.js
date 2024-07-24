const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");
// 새로고침 되는 이유 -> live server 때문
const fetchTodos = async function () {
  const response = await fetch("http://localhost:3000/todos");
  const data = await response.json();
  return data;
};

const loadTodos = async function () {
  let todos = await fetchTodos();
  console.log(todos);

  todos.forEach((todo) => {
    const $li = document.createElement("li");
    $li.textContent = todo.todo;
    $ul.appendChild($li);
  });
};
loadTodos();

const addTodo = async function () {
  const inputValue = $input.value;
  // 실제 db json에 추가하기
  const newTodo = {
    todo: inputValue,
    done: false,
  };
  const data = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const newPost = await data.json();
  const $li = document.createElement("li");
  $li.textContent = newPost.todo;
  $ul.appendChild($li);
  $input.value = "";
};

// $button.addEventListener("click", () => {
//   addTodo();
// });

$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  await addTodo();
});
