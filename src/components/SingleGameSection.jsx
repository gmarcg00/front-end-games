import React from "react";
import '../styles/singleGameSection.css';

export const SingleGameSection = () => {
    return(
        <div className="single-game-container">
            <div className="game-container">
                <div className="game-image-container">
                    <div className="image"></div>
                </div>
                <div className="game-data-container">
                    <label> ASSASSIN'S CREED UNITY</label>
                    <p> The game takes place in Paris, during the Great French Revolution, from the capture of the Bastille in 1789 to the Thermidorian coup. Behind all action, there is an intrigue connected with the change of the Great Master of the Order of Templars. The game has a new assassin, Arno Victor Dorian.The setting provides an abundance of locations - from Versailles to the Parisian multi-level catacombs.<br /> The mission system is entirely different from the previous games of the series. In this game, there is a cooperative mode for a maximum of 4 people.</p>
                    <div className="game-platform-icons">
                        <i className="fa-brands fa-playstation game-icon"></i>
                        <i className="fa-brands fa-xbox game-icon"></i>
                        <i className="fa-brands fa-windows game-icon"></i>
                    </div>
                    <button className="game-card-button">See more</button>
                </div>
            </div>
        </div>
    )
}