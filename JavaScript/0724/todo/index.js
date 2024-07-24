const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

const fetchTodos = async function () {
  const response = await fetch("http://localhost:3000/todos");
  const data = await response.json();
  return data;
};
let todos = [];

const loadTodos = async function () {
  todos = await fetchTodos();
  console.log(todos);

  todos.forEach((todo) => {
    const $li = document.createElement("li");
    $li.textContent = todo.todo;
    $ul.appendChild($li);
  });
};
loadTodos();

const addTodo = function () {
  const inputValue = $input.value;
  // 실제 db json에 추가하기
  const newTodo = {
    todo: inputValue,
    done: false,
  };
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};

// $button.addEventListener("click", () => {
//   addTodo();
// });

$form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});
