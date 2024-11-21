import React from "react";
import "../styles/AddTodo.css";

const AddTodo = ({
  selectedUserId,
  newTodoTitle,
  setNewTodoTitle,
  handleAddTodo,
  setIsAddingTodo,
}) => {
  return (
    <div>
      <h3>New Todo - User {selectedUserId}</h3>
      <div className="add-todo-form">
        <div className="card-data">
          <strong>Title:</strong>
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={() => setIsAddingTodo((prev) => !prev)}>
            Cancel
          </button>
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
