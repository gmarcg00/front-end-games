import React, { useEffect } from "react";
import '../styles/header.css';
import {Link} from "react-router-dom";

export const Header = () => {

    useEffect(() => {
        let searchBar = document.getElementById("search-bar");
        let searchIcon = document.getElementById("search-icon");
        let closeIcon = document.getElementById("close-icon");

        searchIcon.addEventListener("click", () => {
            console.log("Se hizo clic en el ícono de búsqueda");
            searchBar.classList.toggle("header-search-visible")
        })

        closeIcon.addEventListener("click", () => {
            console.log("Se hizo clic en el ícono de búsqueda");
            searchBar.classList.toggle("header-search-visible")
        })
    })


    return(
        <div className="header-container">
            <div className="header">
                <div className="header-title">
                    <Link to="/"><li>GAME PLAYGROUND</li></Link>
                </div>
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/games"><li>Games</li></Link>
                        <Link to="/reviews"><li>Reviews</li></Link>
                    </ul>
                </nav>
                <div className="header-icons">
                    <i id="search-icon" className="fa fa-search"></i>
                    <Link to="/profile"><i className="fa-solid fa-user"></i></Link>
                    <i className="fa-regular fa-moon"></i>
                </div>
            </div>
            <div id="search-bar" className="header-search">
                <i className="fa fa-search search-bar-icon"></i>
                <input className="search-bar-input" placeholder="Search..."></input>
                <i id="close-icon" className="fa-solid fa-x search-bar-icon"></i>
            </div>
        </div>
    )
}