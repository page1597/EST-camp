import React from "react";
import { useState } from "react";
import TodoView from "./TodoView";
import useTodoData from "../hooks/todoHook";
export default function Todo() {
  const [todoText, setTodoText] = useState("");
  const [todoList, postTodo, isLoading] = useTodoData();

  const handleInput = (e) => {
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
