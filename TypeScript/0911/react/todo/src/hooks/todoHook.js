import { useEffect, useState } from "react";

function useTodoData() {
  const [isLoading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:330/todos")
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((todoData) => {
        setTodoList(todoData);
      });
  }, []);

  // 비슷한 로직이 반복된다..?

  const postTodo = async (todoText) => {
    setIsLoading(true);
    const res = await fetch("http://localhost:330/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todoText }),
    });
    const newTodo = await res.json();
    setIsLoading(false);

    setTodoList([...todoList, newTodo]);
  };
  return [todoList, postTodo, isLoading];
}

export default useTodoData;
