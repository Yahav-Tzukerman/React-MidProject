import React from "react";
import "../styles/AddUser.css";

const AddUser = ({ newUser, onChange, onAddUser, onCancel }) => {
  return (
    <div className="add-user-form">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="buttons">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onAddUser}>Add</button>
      </div>
    </div>
  );
};

export default AddUser;
