import logo from "./assets/logo.svg";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";
import data from "./data.json";

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className="App">
      <img className="logo" src={logo} />
      <Form />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
