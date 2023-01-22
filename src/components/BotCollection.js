import React from "react";
import BotItem from "./BotItem";

function BotCollection({ collection, clickHandler, handleDelete }) {


  return (
    <div className="">
      <h2>Bot Collection-click on a bot to add it to your army.</h2>
      <div className="botColl">
        {collection.map((bot) => (
          <BotItem   
          className="container"
          key={bot.id} 
          bot={bot} 
          clickHandler={clickHandler} 
          handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;