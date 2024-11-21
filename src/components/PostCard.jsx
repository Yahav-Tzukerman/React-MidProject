import React, { useState } from "react";
import "../styles/PostCard.css";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="card-data">
        <strong>Title:</strong>
        <p>{post.title}</p>
      </div>
      <div className="card-data">
        <strong>Body:</strong>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
