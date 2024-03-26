import React, {useEffect,useState,useContext} from "react";
import '../../../styles/views/Games/mainSection.css';
import {GamesContext} from "../../../context/GamesContext";

export const MainSection = () => {
    const [count, setCount] = useState(0);
    const [arrayGames, setArrayGames] = useState([]);
    const {games} = useContext(GamesContext);

    useEffect(() => {
        setArrayGames(games);
        if (Array.isArray(arrayGames) && arrayGames.length > 0) {
            let gameTitle = document.getElementById("container-info-game-title")
            gameTitle.innerText = arrayGames[count].name
            let container = document.getElementById("containerMainSection")
            container.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${arrayGames[count].background_image})`;
            container.style.backgroundSize = "100% 100%";
            container.style.backgroundSize = "background 2s ease-in-out;"
        }
    },[count,games])


    setTimeout(() =>{
        if (Array.isArray(arrayGames) && arrayGames.length > 0) {
            if(count === arrayGames.length-1) setCount(0)
            else setCount(count + 1)
        }

    },5000)


    return(
        <div id="containerMainSection" className="container">
            <div className="container-info">
                <label id="container-info-game-title"></label>
                <div className="container-info-icons">
                    <i className="fa-brands fa-playstation"></i>
                    <i className="fa-brands fa-xbox"></i>
                    <i className="fa-brands fa-windows"></i>
                </div>
                <button>See more</button>
            </div>
        </div>
    )
}