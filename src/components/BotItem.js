import React from "react";

const botType = {
  Assault: "🎖",
  Defender: "🛡",
  Support: "➕",
  Medic: "🚑",
  Witch: "🪄",
  Captain: "⭐",
};

function BotItem({ bot, clickHandler, handleDelete }) {
  return (
    <div>
      <div className="bot-card" key={bot.id} onClick={() => clickHandler(bot)}>
        <div className="image">
          <img alt="bot" src={bot.avatar_url} />
        </div>
        <div>
          <div>
            {bot.name}
             {botType[bot.bot_class]}
          </div>
          <div>
            <small>{bot.catchphrase.substring(0, 38)}</small>
          </div>
        </div>
        <div>
          <span>
            ⛑{bot.health}
          </span>
          <span>
            ⚡{bot.damage}
          </span>
          <span>
            🛡{bot.armor}
          </span>
          <span>
            <div>
              <button
                title="delete this bot"
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(bot);
                }}>
                delete
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotItem;

