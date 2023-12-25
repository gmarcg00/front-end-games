import React, {useContext} from "react";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {GameCardMedium} from "../components/views/Games/GameCard/GameCardMedium";
import {Filter} from "../components/views/Games/Filter";
import '../styles/views/Games/games.css';
import {GamesContext} from "../context/GamesContext";
export const Games = () => {

    const {games} = useContext(GamesContext);

    return (
        <>
            <Header/>
            <div id="filters-section" className="filters-section">
                <div id="filters-section-title" className="filters-section-title">
                    <h1 className="title-section">Games Section</h1>
                </div>
                <div id="filters-section-container" className="filters-section-container">
                    <Filter title={"Genre"} options={["Action","Shooter","Strategy","Survival","Sports"]}/>
                    <Filter title={"Platform"} options={["Action","Shooter","Strategy","Survival","Sports"]}/>
                    <Filter title={"Company"} options={["Action","Shooter","Strategy","Survival","Sports"]}/>
                </div>
            </div>
            <div id="games-section" className="games-section">
                <div className="games-section-container">
                    {games.map((game) => {
                        return(
                            <div key={game.id} id={`game-container-${game.id}`} className="game-card-medium-container">
                                <GameCardMedium game={game} index={game.id} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}