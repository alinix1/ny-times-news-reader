import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="form-container">
      <input
        className="search"
        type="text"
        placeholder="Search for Articles"
        role="search"
        aria-label="search-input"
      />
      <button className="home-button">Reset</button>
    </form>
  );
};

export default SearchBar;
