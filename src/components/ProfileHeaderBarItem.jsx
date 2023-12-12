import React from "react";
import '../styles/profileHeaderBarItem.css';

export const ProfileHeaderBarItem = ({text,iconClass}) => {
    return(
        <div className="header-profile-item">
            <i className={`${iconClass} profile-bar-icon`}></i>
            <label className="profile-bar-item-label">{text}</label>
        </div>
    )
}