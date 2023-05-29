// K3N5C0DE
import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot, addToArmy, backToCollection }) {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  {[
                    { iconClass: "icon large circular red heartbeat", value: bot.health },
                    { iconClass: "icon large circular yellow lightning", value: bot.damage },
                    { iconClass: "icon large circular blue shield", value: bot.armor },
                  ].map(({ iconClass, value }) => (
                    <div className="column" key={iconClass}>
                      <i className={iconClass} />
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="ui button fluid" onClick={backToCollection}>
              Go Back
            </button>
            <button className="ui button fluid" onClick={() => addToArmy(bot)}>
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
