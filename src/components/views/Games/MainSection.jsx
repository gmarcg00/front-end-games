import React, {useContext, useEffect, useState} from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../styles/views/Games/mainSection.css';
import {Link,useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {GamesContext} from "../../../context/GamesContext";

export const MainSection = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const { games } = useContext(GamesContext);

    useEffect(() => {
        if (Array.isArray(games) && games.length > 0) {
            let gameTitle = document.getElementById("label-game-title")
            gameTitle.innerText = games[count].name
            let container = document.getElementById("containerMainSection")
            container.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${games[count].background_image})`;
            container.style.backgroundSize = "100% 100%";
            container.style.backgroundSize = "background 2s ease-in-out;"
        }
    },[games,count])

    setTimeout(() =>{
        if (Array.isArray(games) && games.length > 0) {
            if(count === games.length-1) setCount(0)
            else setCount(count + 1)
        }

    },4000)


    return(

        (Array.isArray(games) && games.length > 0)
            ? <div id="containerMainSection" className="container">
                <div className="container-info">
                    <Link to={`/game/${games[count].slug}`}> <label id="label-game-title"></label></Link>
                    <div className="container-info-icons">
                        <i className="fa-brands fa-playstation"></i>
                        <i className="fa-brands fa-xbox"></i>
                        <i className="fa-brands fa-windows"></i>
                    </div>
                    <button>See more</button>
                </div>
             </div>
            : (
                <div id="containerMainSection" className="container-loading">
                    <CircularProgress size={75} color="inherit"/>
                </div>)


    )
}