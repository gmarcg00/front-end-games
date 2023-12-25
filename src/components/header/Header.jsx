import React, { useEffect } from "react";
import {ProfileHeaderBarItem} from "./ProfileHeaderBarItem";
import {Avatar} from "../views/Avatars/Avatar";
import '../../styles/header/header.css';
import {Link} from "react-router-dom";

export const Header = () => {

    useEffect(() => {
        let header = document.getElementById("header");
        let headerTextElements = document.querySelectorAll("li");
        let searchBar = document.getElementById("search-bar");
        let profileBar = document.getElementById("profile-bar");
        let searchIcon = document.getElementById("search-icon");
        let searchBarCloseIcon = document.getElementById("search-bar-close-icon");
        let profileIcon = document.getElementById("profile-icon");
        let shopText = document.getElementById("shop-text");
        let shopBar = document.getElementById("shop-bar");

        const enableSearchVisibility = () => {
            if(profileBar.classList.contains("header-profile-visible")) profileBar.classList.remove("header-profile-visible");
            searchBar.classList.add("header-search-visible");
        };

        const disableSearchVisibility = () => {
            searchBar.classList.remove("header-search-visible");
        };

        const enableProfileVisibility = () => {
            if(searchBar.classList.contains("header-search-visible")) searchBar.classList.remove("header-search-visible");
            profileBar.classList.add("header-profile-visible");
        };

        const cursorOnHeader = ()=> {
            header.classList.add("cursor-on-header")
            headerTextElements.forEach((li) => {
                li.classList.add("color-black")
            });
            searchIcon.classList.add("color-black")
            profileIcon.classList.add("color-black")
        };

        const cursorOutHeader = () => {
            header.classList.remove("cursor-on-header")
            headerTextElements.forEach((li) => {
                li.classList.remove("color-black")
            });
            searchIcon.classList.remove("color-black")
            profileIcon.classList.remove("color-black")
        }

        searchIcon.addEventListener("click", enableSearchVisibility)
        searchBarCloseIcon.addEventListener("click", disableSearchVisibility)
        profileIcon.addEventListener("click",enableProfileVisibility)
        header.addEventListener("mouseenter", cursorOnHeader)
        header.addEventListener("mouseleave", cursorOutHeader)

        shopText.addEventListener("mouseenter", () => {
            shopBar.classList.add("header-shop-visible")
        })

        shopText.addEventListener("mouseleave", () => {
            shopBar.classList.remove("header-shop-visible")
        })

        shopBar.addEventListener("mouseenter", () => {
            cursorOnHeader()
            shopBar.classList.add("header-shop-visible")
        })

        shopBar.addEventListener("mouseleave", () => {
            cursorOutHeader()
            shopBar.classList.remove("header-shop-visible")
        })

    })

    return(
        <div className="header-container">
            <div id={"header"} className="header">
                <div className="header-title">
                    <Link to="/"><li>GAME PLAYGROUND</li></Link>
                </div>
                <nav>
                    <ul id="list">
                        <div className="xx">
                            <Link  to="/games"><li>Games</li></Link>
                        </div>
                        <div className="xx">
                            <Link  to="/reviews"><li>Reviews</li></Link>
                        </div>
                        <div id="shop-text" className="xx">
                            <Link to="/shop"><li>Avatars</li></Link>
                        </div>
                    </ul>
                </nav>
                <div className="header-icons">
                    <i id="search-icon" className="fa fa-search"></i>
                    <i id="profile-icon" className="fa-solid fa-user"></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
            <div id="search-bar" className="header-search">
                <i className="fa fa-search search-bar-icon"></i>
                <input className="search-bar-input" placeholder="Search..."></input>
                <i id="search-bar-close-icon" className="fa-solid fa-x search-bar-icon"></i>
            </div>
            <div id="profile-bar" className="header-profile" >
                 <ProfileHeaderBarItem text={"Sign up"} iconClass={"fa-solid fa-user-plus"} barItemName={"signup"}/>
                 <ProfileHeaderBarItem text={"Log in"} iconClass={"fa-solid fa-arrow-right-to-bracket"} barItemName={"login"} />
            </div>
            <div id="shop-bar" className="header-shop">
                <div className="avatars-container">
                    <Avatar name={"Ellie - The Last Of Us"} price={"1.5"} index={"1"} backgroundImage="../"/>
                    <Avatar name={"Joel - The Last Of Us"} price={"1.0"} index={"2"} backgroundImage={"../../../images/joel.jpg"}/>
                    <Avatar name={"Obi Wan Kenobi - Star Wars"} price={"1.0"} index={"3"} backgroundImage={"../../../images/obi-wan.jpg"}/>
                    <Avatar name={"Aloy - Horizon Forbidden West"} price={"0.5"} index={"4"} backgroundImage={"../../../images/aloy.jpg"}/>
                </div>
            </div>
        </div>
    )
}