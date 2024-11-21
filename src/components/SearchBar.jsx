import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ searchText, handleSearchChange, setIsAddingUser }) => {
  return (
    <div className="search-bar">
      <label>
        <strong>Search</strong>
      </label>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button onClick={() => setIsAddingUser(true)}>Add</button>
    </div>
  );
};

export default SearchBar;
