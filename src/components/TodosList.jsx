import React, { useState } from "react";
import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";

const TodosList = ({
  todos,
  isAddingTodo,
  setIsAddingTodo,
  newTodoTitle,
  setNewTodoTitle,
  handleAddTodo,
  onMarkTodoComplete,
  selectedUserId,
}) => {
  return (
    <div style={{ maxHeight: "50vh", overflowY: "auto", padding: "10px" }}>
      {!isAddingTodo ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <h3>Todos - User {selectedUserId}</h3>
            <button
              style={{ marginLeft: "auto", padding: "5px", width: "20%" }}
              onClick={() => setIsAddingTodo(!isAddingTodo)}
            >
              Add
            </button>
          </div>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onMarkTodoComplete={onMarkTodoComplete}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
              No todos found.
            </p>
          )}
        </div>
      ) : (
        <AddTodo
          selectedUserId={selectedUserId}
          newTodoTitle={newTodoTitle}
          setNewTodoTitle={setNewTodoTitle}
          handleAddTodo={handleAddTodo}
          setIsAddingTodo={setIsAddingTodo}
        />
      )}
    </div>
  );
};

export default TodosList;
