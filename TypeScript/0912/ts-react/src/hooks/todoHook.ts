import { useEffect, useState } from "react";
export interface TodoItem {
  id: string;
  todo: string;
}
function useTodoData(): [TodoItem[], (todoText: string) => void, boolean] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const getTodo = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:330/todos");
    const todoData = await res.json();
    setIsLoading(false);
    setTodoList(todoData);
  };

  useEffect(() => {
    setIsLoading(true);
    getTodo();
  }, []);

  const postTodo = async (newTodo: Partial<TodoItem>): Promise<TodoItem> => {
    const res = await fetch("http://localhost:330/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const addedTodo = await res.json();
    return addedTodo;
  };

  const addTodo = async (todoText: string) => {
    setIsLoading(true);

    const addedTodo = await postTodo({ todo: todoText });
    setIsLoading(false);
    // const newTodo = await res.json();
    // setIsLoading(false);
    
    setTodoList([...todoList, addedTodo]);
  };
  return [todoList, addTodo, isLoading];
}

export default useTodoData;
