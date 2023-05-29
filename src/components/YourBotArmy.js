import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeFromArmy, deleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard
              bot={bot}
              key={bot.id}
              deleteBot={deleteBot}
              displayBot={removeFromArmy}
            />
          ))}
          <span>Your Bot Army</span>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
