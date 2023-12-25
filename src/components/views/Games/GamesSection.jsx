import React, {useContext} from "react";
import '../../../styles/views/Games/gamesSection.css';

import {GameCardMedium} from "./GameCard/GameCardMedium";
import {GamesContext} from "../../../context/GamesContext";

export const GamesSection = () => {

    const {games} = useContext(GamesContext);

    const gamesArray = games.slice(0,8)

    return(
        <div className="container-games">
            <div className="container-title">
                <label className="games-section-title">MORE POPULAR IN 2023</label>
            </div>
            <div id="games-container" className="games-container">
                {gamesArray.map((game) => {
                    return(
                        <div key={game.id} id={`game-container-${game.id}`} className="game-card-medium-container">
                            <GameCardMedium game={game} index={game.id} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}