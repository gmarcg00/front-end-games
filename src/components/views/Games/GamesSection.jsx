import React,{useContext} from "react";
import '../../../styles/views/Games/gamesSection.css';
import {GamesContext} from "../../../context/GamesContext";
import {GameCardMedium} from "./GameCard/GameCardMedium";

export const GamesSection = () => {
    const {games} = useContext(GamesContext);

    return(
        <div className="container-games">
            <div className="container-title">
                <label className="games-section-title">MORE POPULAR IN 2023</label>
            </div>
            <div id="games-container" className="games-container">
                {Array.isArray(games) && games.length > 0 ? (
                    games.map((game) => {
                        return(
                            <div id={`game-container-${game.id}`} key={`game-${game.id}`} className="game-card-medium-container">
                                <GameCardMedium game={game} index={game.id} />
                            </div>
                        )
                    })
                )
                :(<></>)
                }
            </div>
        </div>
    )
}