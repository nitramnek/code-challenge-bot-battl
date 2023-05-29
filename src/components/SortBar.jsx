import React, { useState } from "react";

function SortBar({ onSort, onFilter }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const handleFilter = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
  };

  const handleSort = (event) => {
    const { value } = event.target;
    setSelectedSort(value);
    onSort(value);
  };

  return (
    <div className="sort">
      <label>Sort by:</label>
      <select value={selectedSort} onChange={handleSort}>
        <option value="">None</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
      <div>
        <label>
          <input
            type="checkbox"
            value="Support"
            checked={selectedFilters.includes("Support")}
            onChange={handleFilter}
          />
          Support
        </label>
        <label>
          <input
            type="checkbox"
            value="Medic"
            checked={selectedFilters.includes("Medic")}
            onChange={handleFilter}
          />
          Medic
        </label>
        <label>
          <input
            type="checkbox"
            value="Assault"
            checked={selectedFilters.includes("Assault")}
            onChange={handleFilter}
          />
          Assault
        </label>
        <label>
          <input
            type="checkbox"
            value="Defender"
            checked={selectedFilters.includes("Defender")}
            onChange={handleFilter}
          />
          Defender
        </label>
        <label>
          <input
            type="checkbox"
            value="Captain"
            checked={selectedFilters.includes("Captain")}
            onChange={handleFilter}
          />
          Captain
        </label>
        <label>
          <input
            type="checkbox"
            value="Witch"
            checked={selectedFilters.includes("Witch")}
            onChange={handleFilter}
          />
          Witch
        </label>
      </div>
      <button onClick={() => onFilter(selectedFilters)}>Apply Filters</button>
    </div>
  );
}

export default SortBar;
