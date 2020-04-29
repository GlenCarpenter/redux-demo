import React, { useState } from "react";

const AddToDo = props => {
  const [value, setValue] = useState("");
  const { toDos, addToDo } = props;

  const addToDoItem = (e, value, id) => {
    e.preventDefault();
    if (value === "") return;
    else setValue("");

    const newToDo = {
      task: value,
      complete: false,
      id: id
    };

    addToDo(newToDo);
  };

  return (
    <div className="AddToDo">
      <h2>Add To Do</h2>
      <form onSubmit={e => addToDoItem(e, value, toDos.length)}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button style={{ marginLeft: 25 }} disabled={value === ""}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
