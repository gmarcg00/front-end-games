import React from "react";
import '../styles/cardPreviewInfo.css';

export const CardPreviewInfo = ({platformIconClass,title}) => {
    return(
        <>
            <div className="game-platform-icons">
                {
                    platformIconClass.map((icon) =>(
                        <i className={`${icon} game-icon`}></i>
                    ))
                }
            </div>
            <label className="game-name"> {title}</label>
            <div className="game-review-data-icons">
                <i className="fa-solid fa-heart game-icon"></i>
                <i className="fa-solid fa-message game-icon"></i>
            </div>
        </>
    )
}