import React from "react";
import '../styles/gamesSection.css';

import {GameCard} from "./GameCard";

export const GamesSection = () => {
    return(
        <div className="container-games">
            <div className="container-title">
                <label className="title">MORE POPULAR IN 2023</label>
            </div>
            <div className="games-container">
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
            </div>
        </div>
    )
}