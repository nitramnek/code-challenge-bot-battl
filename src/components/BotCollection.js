import React, { useState } from "react";
import BotCard from "./BotCard";
import Filter from "./Filter";

function BotCollection({ bots, displayBot, deleteBot }) {
  const [filterId, setFilterId] = useState("");

  function handleFilter(filterId) {
    setFilterId(filterId);
  }

  const selectedBots = [...bots].sort((a, b) => {
    if (filterId === "health") {
      return b.health - a.health;
    }
    if (filterId === "damage") {
      return b.damage - a.damage;
    }
    if (filterId === "armor") {
      return b.armor - a.armor;
    }
    return 0;
  });

  return (
    <div className="ui four column grid">
      <div className="row">
        <Filter onFilter={handleFilter} />
        {selectedBots.map((bot) => (
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
