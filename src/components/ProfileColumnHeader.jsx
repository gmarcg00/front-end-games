import React from "react";
import "../styles/profileColumnHeader.css"

export const ProfileColumnHeader = ({userName,progress,level,genres}) => {
    return (
        <div className="profile-column-header">
            <span className="user-avatar"></span>
            <label className="userName-label">{userName}</label>
            <progress className="progress-bar" max="100" value={progress}></progress>
            <label className="level-paragraph">Level {level}</label>
            <div className="profile-container-buttons">
                {
                    genres.map ((genre) => (
                        <button className="genre-button">{genre}</button>
                    ))
                }
            </div>
        </div>
    )
}