import React from "react";

function Filter({ onFilter }) {
  const handleFilter = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className="sort">
      <label>Sort by:</label>
      <select onChange={handleFilter}>
        <option value="">None</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default Filter;