import React from "react";
import '../styles/profileColumnDataSection.css';

export const ProfileColumnDataSection = ({title, elements}) => {
    return(
        <div className="profile-column-data-section">
            <label className="">{title}</label>
            {
                elements.map((element) => (
                    <div className="social-media-label">
                        <i className={`${element.class} social-media-icon`}></i>
                        <label className="social-media-text">{element.title}</label>
                    </div>
                ))
            }
        </div>
    )
}