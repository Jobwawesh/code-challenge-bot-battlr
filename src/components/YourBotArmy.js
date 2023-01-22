import React from "react";
import BotItem from "./BotItem";

function YourBotArmy({ collection, clickHandler, handeleDelete }) {

  return (
    <div className="">
        <h1> BOT BATTLR</h1>
      <div className="">
        <h2>Your selected Bot Army."</h2>
        <div className="yourBot">
          {collection.map((bot) => (
            <BotItem 
            key={bot.id}
            bot={bot} 
            clickHandler={clickHandler}
            handleDelete={handeleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;