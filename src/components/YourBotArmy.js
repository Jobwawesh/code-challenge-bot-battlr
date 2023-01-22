import React from "react";
import BotItem from "./BotItem";

function YourBotArmy({ collection, clickHandler, handeleDelete }) {

  return (
    <div className="">
        <h1> BOT BATTLR</h1>
      <div className="">
        {"Click on a Bot on the bot collection to enlist it to your army."}
        <div className="">
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