// K3N5C0DE
import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = () => {
    fetch("http://localhost:8002/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((botsData) => {
        setBots(botsData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const showDetails = (bot) => {
    setSelectedBot(bot);
  };

  const backToCollection = () => {
    setSelectedBot(null);
  };

  const addToArmy = (bot) => {
    const { bot_class } = bot;

    if (!army.some((b) => b.bot_class === bot_class)) {
      setArmy([...army, bot]);
      setBots(bots.filter((b) => b.id !== bot.id));
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b !== bot));
    setBots([bot, ...bots]);
  };

  const deleteBot = (botId) => {
    const updatedBots = bots.filter((bot) => bot.id !== botId);
    setBots(updatedBots);

    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <YourBotArmy
        bots={army}
        removeFromArmy={removeFromArmy}
        deleteBot={deleteBot}
      />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          addToArmy={addToArmy}
          backToCollection={backToCollection}
        />
      ) : (
        <BotCollection
          bots={bots}
          displayBot={showDetails}
          deleteBot={deleteBot}
        />
      )}
    </div>
  );
}

export default BotsPage;
