import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      todo: "놀기",
    },
    {
      id: "2",
      todo: "밥먹기",
    },
  ]);
  const [todoText, setTodoText] = useState();
  const handleInput = (e) => {
    console.log(e.target.value);
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
  };

  const handleButton = () => {
    const newId = todoList.length + 1;
    const newTodoList = [
      ...todoList,
      {
        id: newId + "",
        todo: todoText,
      },
    ];

    if (todoList.length > 4) {
      alert("5개 까지만 가능합니다~!");
      newTodoList.shift();
    }
    setTodoList(newTodoList);
    setTodoText("");
  };

  console.log(<div></div>);
  return (
    <div>
      <h1>멋진 투두</h1>
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index}>
            <p>{todoItem.todo}</p>
          </li>
        ))}
      </ul>
      <input type="text" value={todoText} onChange={handleInput} />
      <button type="button" onClick={handleButton}>
        투두후가
      </button>
    </div>
  );
}
