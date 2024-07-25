// 사용자가 수정하고 싶은 todo의 수정하기 버튼을 누른다.

const url = "http://localhost:3000/todos";
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");
// 새로고침 되는 이유 -> live server 때문

const getTodos = async () => {
  const response = await fetch(url);
  const todoDatas = await response.json();
  return todoDatas;
};

// 최초의 화면에 todo를 그려주는 함수
const initTodo = async function () {
  try {
    const todoDatas = await getTodos();
    todoDatas.forEach((todoData) => {
      createTodoUi(todoData);
    });
  } catch (e) {
    console.log(e);
  }
};

initTodo();

const createTodoUi = (todoData) => {
  const $li = document.createElement("li");
  $li.id = todoData.id;

  const $delButton = document.createElement("button");
  $delButton.textContent = "삭제하기";
  $delButton.classList.add("del-btn");

  const $todoText = document.createElement("span");

  const $editButton = document.createElement("button");
  $editButton.textContent = "수정하기";

  const $checkBox = document.createElement("input");
  $checkBox.setAttribute("type", "checkbox");
  $checkBox.done = true; // ?
  $checkBox.classList.add("edit-checkbox");

  $editButton.classList.add("edit-btn");
  $editButton.addEventListener("click", async () => {
    // console.log("")
    const editTodoText = prompt(
      "수정할 todo 내용을 입력해주세요",
      todoData.todo
    );
    const minTextLength = 1;
    if (editTodoText && editTodoText.trim().length >= minTextLength) {
      const res = await fetch(`${url}/${todoData.id}`, {
        method: "PATCH", // PUT: 내용을 아예 갈아 끼울때, PATCH: 일부분만 수정할 때
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: editTodoText,
        }),
      });
      if (res.ok) {
        const updatedTodo = await res.json();
        $todoText.textContent = updatedTodo.todo;
      } else {
        console.error("실패");
      }
      // console.log(res);
    } else if (editTodoText === null) {
      alert("수정이 취소되었습니다.");
    } else {
      alert("1글자 이상 입력해야 합니다.");
    }
    console.log(editTodoText);
  });

  // $editButton.done = true; // ?
  // 이부분망햇당

  $todoText.textContent = todoData.todo;
  // $li.textContent = todoData.todo;
  $ul.appendChild($li);
  $li.appendChild($todoText);
  $li.appendChild($delButton);
  $li.appendChild($editButton);
  $li.appendChild($checkBox);
};

const addTodo = async function () {
  const inputValue = $input.value;
  // 실제 db json에 추가하기
  const newTodo = {
    todo: inputValue,
    done: false,
  };
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const newTodoData = await data.json();
    return newTodoData;
    // createTodoUi(newTodoDate);
  } catch (e) {
    console.log(e);
  }
};

$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const newTodoData = await addTodo();
  createTodoUi(newTodoData);
  $input.value = "";
});

const deleteTodo = async (id) => {
  try {
    const res = await fetch(`${url}/${id}`, { method: "DELETE" });
    return res.status === 200;
  } catch (error) {
    // alert("삭제에 실패했습니다.");
  }
};
$ul.addEventListener("click", async (e) => {
  if ([...e.target.classList].includes("del-btn")) {
    const parentNode = e.target.parentNode;

    const isDeleted = await deleteTodo(parentNode.id);
    if (isDeleted) {
      parentNode.remove();
    } else {
      alert("잘못된 요청입니다.");
    }
  }
  if ([...e.target.classList].includes("edit-checkbox")) {
    const todoId = e.target.parentNode.id;
    const checked = e.target.checked;
    const editedTodo = await editStatus(todoId, checked);
    console.log(editedTodo);
    if (editedTodo.done === true || editedTodo.done === false) {
      e.target.checked = editedTodo.done;
    }
  }

  // if ([...e.target.classList].includes("edit-btn")) {
  //   console.log("수정하기");
  // }
});

const editStatus = async function (id, checked) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        done: checked,
      }),
    });
    return res;
  } catch (error) {}
};
