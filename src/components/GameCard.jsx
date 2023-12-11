import React from "react";
import '../styles/gameCard.css';

export const GameCard = ({name}) => {
    return(
        <div className="game-card-container">
            <div className="game-card-image"></div>
            <label className="game-name"> THE LAST OF US</label>
            <div className="game-platform-icons">
                <i className="fa-brands fa-playstation game-icon"></i>
                <i className="fa-brands fa-xbox game-icon"></i>
                <i className="fa-brands fa-windows game-icon"></i>
            </div>
            <button className="game-card-button">See more</button>
        </div>
    )
}