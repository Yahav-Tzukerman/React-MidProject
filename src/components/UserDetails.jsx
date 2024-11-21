import React, { useState } from "react";
import TodosList from "./TodosList";
import PostsList from "./PostsList";

const UserDetails = ({
  userId,
  posts,
  todos,
  onAddPost,
  onAddTodo,
  onMarkTodoComplete,
}) => {
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddPost = () => {
    onAddPost({ userId, title: newPost.title, body: newPost.body });
    setNewPost({ title: "", body: "" });
    setIsAddingPost(false);
  };

  const handleAddTodo = () => {
    onAddTodo({ userId, title: newTodoTitle, completed: false });
    setNewTodoTitle("");
    setIsAddingTodo(false);
  };

  return (
    <div>
      <TodosList
        todos={todos}
        isAddingTodo={isAddingTodo}
        setIsAddingTodo={setIsAddingTodo}
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        handleAddTodo={handleAddTodo}
        onMarkTodoComplete={onMarkTodoComplete}
        selectedUserId={userId}
      />
      <PostsList
        posts={posts}
        isAddingPost={isAddingPost}
        setIsAddingPost={setIsAddingPost}
        newPost={newPost}
        setNewPost={setNewPost}
        handleAddPost={handleAddPost}
        selectedUserId={userId}
      />
    </div>
  );
};

export default UserDetails;
