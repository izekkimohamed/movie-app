import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="search">
      <label htmlFor="search">
        <FaSearch />
      </label>
      <input type="text" placeholder="Search" id="search" />
    </div>
  );
}

export default Search;
