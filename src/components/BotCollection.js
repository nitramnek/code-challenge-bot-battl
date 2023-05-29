// K3N5C0DE
import React, { useState } from "react";
import BotCard from "./BotCard";
import SortBar from "./SortBar";

function BotCollection({ bots, displayBot, deleteBot }) {
  const [filters, setFilters] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const handleFilter = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  const handleSort = (selectedSort) => {
    setSortOption(selectedSort);
  };

  const filteredAndSortedBots = bots.filter((bot) => filters.length === 0 || filters.includes(bot.bot_class)).sort((a, b) => {
    if (sortOption === "health") return b.health - a.health;
    if (sortOption === "damage") return b.damage - a.damage;
    if (sortOption === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="ui four column grid">
      <div className="row">
        <SortBar onSort={handleSort} onFilter={handleFilter} />
        {filteredAndSortedBots.map((bot) => (
          <BotCard bot={bot} key={bot.id} displayBot={displayBot} deleteBot={deleteBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
