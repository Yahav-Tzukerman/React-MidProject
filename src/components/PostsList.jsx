import React, { useState } from "react";
import PostCard from "./PostCard";
import AddPost from "./AddPost";

const PostsList = ({
  posts,
  isAddingPost,
  setIsAddingPost,
  newPost,
  setNewPost,
  handleAddPost,
  selectedUserId,
}) => {
  return (
    <div
      style={{
        maxHeight: "50vh",
        overflowY: "auto",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      {!isAddingPost ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <h3>Posts - User {selectedUserId}</h3>
            <button
              style={{ marginLeft: "auto", padding: "5px", width: "20%" }}
              onClick={() => setIsAddingPost(!isAddingPost)}
            >
              Add
            </button>
          </div>
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
              No posts found.
            </p>
          )}
        </div>
      ) : (
        <AddPost
          selectedUserId={selectedUserId}
          newPost={newPost}
          setNewPost={setNewPost}
          handleAddPost={handleAddPost}
          setIsAddingPost={setIsAddingPost}
        />
      )}
    </div>
  );
};

export default PostsList;
