import logo from "./assets/logo.svg";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleToggle = (id) => {
    let mapped = todos.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodos(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...todos];
    copy = [
      ...copy,
      { id: todos.length + 1, task: userInput, complete: false },
    ];
    setTodos(copy);
  };

  return (
    <div className="App">
      <img className="logo" src={logo} />
      <Form addTask={addTask} />
      <ToDoList handleToggle={handleToggle} todos={todos} />
    </div>
  );
}

export default App;
