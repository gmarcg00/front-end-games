import React from "react";
import '../styles/header.css';
import {Link} from "react-router-dom";

export const Header = () => {

    return(
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
                <i className="fa fa-search"></i>
                <Link to="/profile"><i  className="fa-solid fa-user"></i></Link>
                <i className="fa-regular fa-moon"></i>
            </div>
        </div>
    )
}