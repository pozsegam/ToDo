import AddIcon from "../assets/addicon.svg";
import React, { useState } from "react";

function Form({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="field"
          type="text"
          input={userInput}
          onChange={handleChange}
        />
        <input type="image" className="add-icon" src={AddIcon} />
      </form>
    </>
  );
}

export default Form;
