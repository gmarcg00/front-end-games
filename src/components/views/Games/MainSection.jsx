import React, {useEffect,useState} from "react";
import '../../../styles/views/Games/mainSection.css';

export const MainSection = ({games}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let gameTitle = document.getElementById("container-info-game-title")
        gameTitle.innerText = games[count].name
        let container = document.getElementById("containerMainSection")
        container.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${games[count].backgroundImage})`;
        container.style.backgroundSize = "100% 100%";
        container.style.backgroundSize = "background 2s ease-in-out;"
    },[count])


    setTimeout(() =>{
        if(count === games.length-1) setCount(0)
        else setCount(count + 1)
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