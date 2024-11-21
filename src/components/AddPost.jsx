import React from "react";
import "../styles/AddPost.css";

const AddTodo = ({
  selectedUserId,
  newPost,
  setNewPost,
  handleAddPost,
  setIsAddingPost,
}) => {
  return (
    <div>
      <h3>New Post - User {selectedUserId}</h3>
      <div className="add-post-form">
        <div className="card-data">
          <strong>Title:</strong>
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </div>
        <div className="card-data">
          <strong>Body:</strong>
          <input
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
        </div>
        <div className="button-group">
          <button onClick={() => setIsAddingPost(false)}>Cancel</button>
          <button onClick={handleAddPost}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
