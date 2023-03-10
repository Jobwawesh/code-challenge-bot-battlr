import React, {useEffect, useState} from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const URL = "https://json-server-vercel-zeta.vercel.app/bots"

function BotsArmy(){

    const [bots, setBots] = useState([])
    const [army, setArmy] = useState([])

    function enlist(bot) {
        if (army.includes(bot)) return;
        setArmy((army) => [...army, bot]);
    }

    function retire(bot) {
        setArmy((army) => army.filter((it) => it.id !== bot.id))
    }

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((data) => setBots(data));
    }, [])

    function handleDelete(bot) {
        fetch(`URL${bot.id}`, {
          method: "DELETE",
        }).then(() => {
            setBots((bots) => bots.filter((it) => it.id !== bot.id))
            setArmy((army) => army.filter((it) => it.id !== bot.id))
        });
    }
    
    return(
        <div>
            <YourBotArmy collection={army} clickHandler={retire} handleDelete={handleDelete} />
            <BotCollection collection={bots} clickHandler={enlist} handleDelete={handleDelete} />
        </div>
    )
}
export default BotsArmy