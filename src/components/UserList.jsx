import React from "react";
import UserCard from "./UserCard";

const UserList = ({
  users,
  todos,
  onUpdateUser,
  onDeleteUser,
  onSelectUser,
  isSelected,
}) => {
  const getBorderColor = (userId) => {
    const userTodos = todos.filter((todo) => todo.userId === userId);
    return userTodos.some((todo) => !todo.completed) ? "red" : "green";
  };

  return (
    <div
      style={{
        maxHeight: "100vh",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            borderColor={getBorderColor(user.id)}
            onUpdate={onUpdateUser}
            onDelete={onDeleteUser}
            onSelect={onSelectUser}
            isSelected={isSelected(user.id)}
          />
        ))
      ) : (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          No users found.
        </p>
      )}
    </div>
  );
};

export default UserList;
