import React from "react";

function Search({searchQuery, onSearchChange}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;

