import React from "react";
import players from "../players";
import Player from "./Player";

// Import inside the PlayerList.js, the Player component and the players’ data from players.js

const PlayersList = () => {
    return (
      <div className="App" style={{display:"flex"}}>
        {players.map((el) => (<Player player={el} />))}
      </div>
    )
  }

  export default PlayersList