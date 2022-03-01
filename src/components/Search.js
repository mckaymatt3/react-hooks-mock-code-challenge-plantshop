import React from "react";

function Search({plants, searchPlants, searchInput, setSearchInput}) {

  function handleSearch (event) {
    setSearchInput(event.target.value)
    console.log("Search Input:", searchInput)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
