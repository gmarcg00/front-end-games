import React from "react";
import '../styles/gamesSection.css';

import {GameCardMedium} from "./GameCardMedium";

export const GamesSection = () => {
    return(
        <div className="container-games">
            <div className="container-title">
                <label className="title">MORE POPULAR IN 2023</label>
            </div>
            <div id="games-container" className="games-container">
                <div id="game-container-1" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={1}/>
                </div>
                <div id="game-container-2" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={2}/>
                </div>
                <div id="game-container-3" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={3}/>
                </div>
                <div id="game-container-4" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={4}/>
                </div>
                <div id="game-container-5" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={5}/>
                </div>
                <div id="game-container-6" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={6}/>
                </div>
                <div id="game-container-7" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={7}/>
                </div>
                <div id="game-container-8" className="game-card-medium-container">
                    <GameCardMedium title="THE LAST OF US" index={8}/>
                </div>
            </div>
        </div>
    )
}