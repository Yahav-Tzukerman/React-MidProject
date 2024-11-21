import React, { useState } from "react";
import "../styles/TodoCard.css";

const TodoCard = ({ todo, onMarkTodoComplete }) => {
  return (
    <div className="todo-card">
      <div className="card-data">
        <strong>Title:</strong>
        <p>{todo.title}</p>
      </div>
      <div className="card-data">
        <strong>Completed:</strong>
        <p>{todo.completed ? "True" : "False"}</p>
        {!todo.completed && (
          <button onClick={() => onMarkTodoComplete(todo.id)}>
            Mark Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
