import React, { useLayoutEffect } from "react";
import ToDo from "./Todo";

function ToDoList({ todos, handleToggle }) {
  return (
    <div className="list-container">
      {todos.map((todo) => {
        return (
          <ToDo
            handleToggle={handleToggle}
            task={todo.task}
            complete={todo.complete}
            id={todo.id}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;
