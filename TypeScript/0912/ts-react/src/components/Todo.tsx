import { ChangeEvent, useState } from "react";
import { TodoView } from "./TodoView";
import useTodoData from "../hooks/todoHook";

export default function Todo(): JSX.Element {
  // function useState<S>(initialState: S) {
  //   return initialState;
  // }
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, postTodo, isLoading] = useTodoData();

  // 제네릭: 사용하는 시점에 타입이 정해지는 것

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
  };
  const handleButton = () => {
    postTodo(todoText);

    // if (todoList.length > 4) {
    //   newTodoList.shift();
    // }
    // setTodoList(newTodoList);
    setTodoText("");
  };
  const props = { todoList, handleInput, todoText, handleButton };
  return isLoading ? <h1>로딩중페이지</h1> : <TodoView {...props} />;
}
