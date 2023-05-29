import React, { useState } from "react";
import BotCard from "./BotCard";
import SortBar from "./SortBar";

function BotCollection({ bots, displayBot, deleteBot }) {
  const [filterIds, setFilterIds] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  function handleFilter(filters) {
    setFilterIds(filters);
  }

  function handleSort(sort) {
    setSelectedSort(sort);
  }

  const filteredBots = bots.filter((bot) => {
    if (filterIds.length === 0) return true;
    return filterIds.includes(bot.bot_class);
  });

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (selectedSort === "health") {
      return b.health - a.health;
    }
    if (selectedSort === "damage") {
      return b.damage - a.damage;
    }
    if (selectedSort === "armor") {
      return b.armor - a.armor;
    }
    return 0;
  });

  return (
    <div className="ui four column grid">
      <div className="row">
        <SortBar onSort={handleSort} onFilter={handleFilter} />
        {sortedBots.map((bot) => (
          <BotCard
            bot={bot}
            key={bot.id}
            displayBot={displayBot}
            deleteBot={deleteBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
