import React from "react";
import BotItem from "./BotItem";

function BotCollection({ collection, clickHandler, handleDelete }) {
  return (
    <div className="">
      {"Click on a bot to add it to your army."}
      <div className="">
        {collection.map((bot) => (
          <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;