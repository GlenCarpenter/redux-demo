import React from "react";

const ToDoList = props => {
  const { toDos, completeToDo } = props;

  const completeToDoItem = index => {
    let completedToDo = [...toDos];
    completedToDo[index].complete = true;

    completeToDo(completedToDo);
    // completeToDo(completedToDoAsync(completedToDo));
  };

  /* 
  const completedToDoAsync = completedToDo => {
    const completedToDoPromise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve(completedToDo);
      }, 500);
    });

    return completedToDoPromise;
  };
  */

  return (
    <div className="ToDoList">
      <h2>To Do List</h2>
      {toDos.map((toDo, index) => (
        <div key={toDo.id}>
          <span
            style={{ textDecoration: toDo.complete ? "line-through" : "none" }}
          >
            Task: {toDo.task}
          </span>
          {!toDo.complete && (
            <button
              onClick={() => completeToDoItem(index)}
              style={{ marginLeft: 25 }}
            >
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
