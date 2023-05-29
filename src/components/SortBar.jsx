// K3N5C0DE
import React, { useState } from "react";

function SortBar({ onSort, onFilter }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const handleFilter = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => {
      if (checked) {
        return [...prevFilters, value];
      } else {
        return prevFilters.filter((filter) => filter !== value);
      }
    });
  };

  const handleSort = (event) => {
    const { value } = event.target;
    setSelectedSort(value);
    onSort(value);
  };

  const filterOptions = [
    { label: "Support", value: "Support" },
    { label: "Medic", value: "Medic" },
    { label: "Assault", value: "Assault" },
    { label: "Defender", value: "Defender" },
    { label: "Captain", value: "Captain" },
    { label: "Witch", value: "Witch" },
  ];

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
        {filterOptions.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={selectedFilters.includes(option.value)}
              onChange={handleFilter}
            />
            {option.label}
          </label>
        ))}
      </div>
      <button onClick={() => onFilter(selectedFilters)}>Apply Filters</button>
    </div>
  );
}

export default SortBar;
