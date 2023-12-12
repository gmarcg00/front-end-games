import React, { useEffect } from "react";
import {ProfileHeaderBarItem} from "./ProfileHeaderBarItem";
import '../styles/header.css';
import {Link} from "react-router-dom";

export const Header = () => {

    useEffect(() => {
        let searchBar = document.getElementById("search-bar");
        let profileBar = document.getElementById("profile-bar");
        let searchIcon = document.getElementById("search-icon");
        let closeIcon = document.getElementById("close-icon");
        let profileIcon = document.getElementById("profile-icon");

        const toggleSearchVisibility = () => {
            if(profileBar.classList.contains("header-profile-visible")) profileBar.classList.toggle("header-profile-visible");
            searchBar.classList.toggle("header-search-visible");
        };

        const toggleProfileVisibility = () => {
            if(searchBar.classList.contains("header-search-visible")) searchBar.classList.toggle("header-search-visible");
            profileBar.classList.toggle("header-profile-visible");
        };

        searchIcon.addEventListener("click", toggleSearchVisibility)
        closeIcon.addEventListener("click", toggleSearchVisibility)
        profileIcon.addEventListener("click",toggleProfileVisibility)

    })

    return(
        <div className="header-container">
            <div className="header">
                <div className="header-title">
                    <Link to="/"><li>GAME PLAYGROUND</li></Link>
                </div>
                <nav>
                    <ul>
                        <Link to="/games"><li>Games</li></Link>
                        <Link to="/reviews"><li>Reviews</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                    </ul>
                </nav>
                <div className="header-icons">
                    <i id="search-icon" className="fa fa-search"></i>
                    <i id="profile-icon" className="fa-solid fa-user"></i>
                    <Link to="/profile"> <i id="moon-icon" className="fa-regular fa-moon"></i></Link>
                </div>
            </div>
            <div id="search-bar" className="header-search">
                <i className="fa fa-search search-bar-icon"></i>
                <input className="search-bar-input" placeholder="Search..."></input>
                <i id="close-icon" className="fa-solid fa-x search-bar-icon"></i>
            </div>
            <div id="profile-bar" className="header-profile" >
                <ProfileHeaderBarItem text={"Sign up"} iconClass={"fa-solid fa-user-plus"}/>
                <ProfileHeaderBarItem text={"Sign in"} iconClass={"fa-solid fa-arrow-right-to-bracket"}/>
            </div>
        </div>
    )
}