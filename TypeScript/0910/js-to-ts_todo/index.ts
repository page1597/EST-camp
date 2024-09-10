interface TodoData {
  id: number;
  todo: string;
}
// const todoDatas: TodoData[] = [
//   {
//     id: 1,
//     todo: "아침먹기",
//   },
//   {
//     id: 2,
//     todo: "점심먹기",
//   },
// ];

const getTodoData = async (): Promise<TodoData[]> => {
  const res = await fetch("http://localhost:3000/todos");
  const todoDatas: TodoData[] = await res.json();
  return todoDatas;
};

const addTodoData = async (todoText: string) => {
  const newTodo: Partial<TodoData> = {
    todo: todoText,
  };
  const res = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const newTodoData = await res.json();
  return newTodoData;
};

const addTodoList = async () => {
  const $todoInput = document.querySelector(
    "#todo-input"
  ) as HTMLInputElement | null;

  if (!$todoInput) {
    return;
  }
  $todoInput.value = "";
  const newTodoDatas = await getTodoData();
  todoListRender(newTodoDatas);
};

const $todoInputButton = document.querySelector("#todo-button");
$todoInputButton?.addEventListener("click", addTodoList);

const createTodoLi = (todoData: TodoData): HTMLLIElement => {
  const $todoLi = document.createElement("li");
  const $todoP = document.createElement("p");
  $todoP.innerText = todoData.todo;
  $todoLi.append($todoP);
  return $todoLi;
};

// 데이터를 넣어주면 todoList를 만들어주는애
const todoListRender = (todoDatas: TodoData[]) => {
  const $todoContainer = document.querySelector("#todo-container");
  $todoContainer!.innerHTML = "";
  todoDatas.forEach((todoData) => {
    const $todoLi = createTodoLi(todoData);
    $todoContainer!.append($todoLi);
  });
};

const init = async () => {
  const todoDatas = await getTodoData();
  todoListRender(todoDatas);
};

init();
