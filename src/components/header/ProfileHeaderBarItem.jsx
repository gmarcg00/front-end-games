import React,{useEffect} from "react";
import '../../styles/views/Profile/profileHeaderBarItem.css';
import {Link} from "react-router-dom";

export const ProfileHeaderBarItem = ({text,iconClass,barItemName}) => {

    useEffect(() => {
        let profileBar = document.getElementById("profile-bar");
        let closeIcon = document.getElementById(`${barItemName}-bar-close-icon `);

        const disableProfileBarVisibility = () => {
            profileBar.classList.remove("header-profile-visible");
        };

        closeIcon.addEventListener("click", disableProfileBarVisibility)
    },)

    return(
        <div className="header-profile-item">
            <i className={`${iconClass} profile-bar-icon`}></i>
            {
                (barItemName !== "logout")
                    ? <Link to={`/${barItemName}`}><label className="profile-bar-item-label">{text}</label></Link>
                    : <label id="logout-label" className="profile-bar-item-label">{text}</label>

            }

            <i id={`${barItemName}-bar-close-icon `} className={`fa-solid fa-x search-bar-icon ${barItemName}-bar-close-icon`}></i>
        </div>
    )
}