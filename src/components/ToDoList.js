import { useLayoutEffect } from "react";
import ToDo from "./Todo";

function ToDoList({ todos }) {
  return (
    <div className="list-container">
      {todos.map((todo) => {
        return <ToDo task={todo.task} complete={todo.complete} />;
      })}
    </div>
  );
}

export default ToDoList;
