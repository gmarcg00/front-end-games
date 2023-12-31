import React from "react";
import '../../../../styles/views/Games/GameCard/cardDetailButton.css';

export const CardDetailButton = ({textButton, iconClass}) => {
    return(
        <button className={`card-section-2-row-button`}>
            {textButton}
            <i className={`${iconClass} game-icon`}></i>
        </button>
    )
}