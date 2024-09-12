import { ChangeEvent } from "react";
import { TodoItem } from "../hooks/todoHook";
interface TodoViewProps {
  todoList: TodoItem[];
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  todoText: string;
  handleButton: () => void;
}
export const TodoView: React.FC<TodoViewProps> = ({
  todoList,
  handleInput,
  todoText,
  handleButton,
}) => {
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
        투두추가
      </button>
    </div>
  );
};
