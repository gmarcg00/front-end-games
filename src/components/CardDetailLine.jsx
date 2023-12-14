import React from "react";
import '../styles/cardDetailLine.css';

export const CardDetailLine = ({field,text}) => {
    return(
        <>
            <div className="card-section-2-row-text">
                <label className="game-detail"> {field}</label>
                <label className="game-detail"> {text}</label>
            </div>
            <div className="card-section-2-row-footer"></div>
        </>
    )
}