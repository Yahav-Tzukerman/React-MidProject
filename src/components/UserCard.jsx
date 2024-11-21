import React, { useState } from "react";
import "../styles/UserCard.css";

const UserCard = ({
  user,
  borderColor,
  onUpdate,
  onDelete,
  onSelect,
  isSelected,
}) => {
  const [showOtherData, setShowOtherData] = useState(false);
  const [editedUser, setEditedUser] = useState({
    ...user,
    address: user.address || { street: "", city: "", zipcode: "" },
  });

  const handleMouseEnter = () => {
    setShowOtherData(true);
  };

  const handleToggleOtherData = (e) => {
    e.stopPropagation();
    setShowOtherData(!showOtherData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      address: { ...editedUser.address, [name]: value },
    });
  };

  return (
    <div
      className={`user-card ${showOtherData ? "show-other-data" : ""} ${
        isSelected ? "selected" : ""
      }`}
      style={{ border: `2px solid ${borderColor}` }}
      onClick={() => onSelect(user.id)}
    >
      <div className="left-section">
        <div className="card-data">
          <label>
            <strong>ID:</strong>
          </label>
          <p>{user.id}</p>
        </div>
        <div className="card-data">
          <label>
            <strong>Name:</strong>
          </label>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="card-data">
          <label>
            <strong>Email:</strong>
          </label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button
        className="other-data-button"
        onClick={handleToggleOtherData}
        onMouseOver={handleMouseEnter}
      >
        {showOtherData ? "Hide Details" : "Show Details"}
      </button>

      {showOtherData && (
        <div className="other-data">
          <div className="card-data">
            <label>
              <strong>Street:</strong>
            </label>
            <input
              type="text"
              name="street"
              value={editedUser.address?.street}
              onChange={handleAddressChange}
            />
          </div>
          <div className="card-data">
            <label>
              <strong>City:</strong>
            </label>
            <input
              type="text"
              name="city"
              value={editedUser.address?.city}
              onChange={handleAddressChange}
            />
          </div>
          <div className="card-data">
            <label>
              <strong>Zip Code:</strong>
            </label>
            <input
              type="text"
              name="zipcode"
              value={editedUser.address?.zipcode}
              onChange={handleAddressChange}
            />
          </div>
        </div>
      )}

      <div className="button-group">
        <button
          className="update-button"
          onClick={(e) => {
            e.stopPropagation();
            onUpdate(editedUser);
          }}
        >
          Update
        </button>
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
