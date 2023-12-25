import React, {useEffect } from "react";
import {CardPreviewInfo} from "./CardPreviewInfo";
import {CardDetailLine} from "./CardDetailLine";
import {CardDetailButton} from "./CardDetailButton";

import '../../../../styles/views/Games/GameCard/gameCardMedium.css';

export const GameCardMedium = ({game,index}) => {

    useEffect(() => {
        let card = document.getElementById(`game-container-${index}`);
        let cardBackground = document.getElementById(`game-card-image-${index}`);
        let cardSection1 = document.getElementById(`card-section-1-${index}`);
        let cardSection2 = document.getElementById(`card-section-2-${index}`);

        cardBackground.style.backgroundImage = `url(${game.backgroundImage})`;
        cardBackground.style.backgroundSize = "100% 100%";

        card.addEventListener("mouseenter",() => {
            cardSection1.classList.remove("card-section-1-border-card-section-2-not-visible")
            cardSection1.classList.add("card-section-1-border-card-section-2-visible")
            cardSection2.classList.add("card-section-2-visible")})
        card.addEventListener("mouseleave",() => {
            cardSection1.classList.remove("card-section-1-border-card-section-2-visible")
            cardSection1.classList.add("card-section-1-border-card-section-2-not-visible")
            cardSection2.classList.remove("card-section-2-visible")})
    })

    return(
        <>
            <div id={`card-section-1-${index}`} className="card-section-1 card-section-1-border-card-section-2-not-visible">
                <div id={`game-card-image-${index}`} className="game-card-image"></div>
                <div className="card-section-1-data">
                    <CardPreviewInfo title={game.name} platformIconClass={["fa-brands fa-playstation","fa-brands fa-xbox","fa-brands fa-windows"]} index={game.id}/>
                </div>
            </div>
            <div id={`card-section-2-${index}`} className="card-section-2">
                <div className="card-section-2-row">
                    <CardDetailLine field={"Release date:"} text={"12-13-2023"}/>
                    <CardDetailLine field={"Genres:"} text={game.genre}/>
                    <CardDetailLine field={"Rating:"} text={game.rating}/>
                    <CardDetailButton iconClass={"fa-solid fa-gamepad"} textButton={"More like this"}/>
                    <CardDetailButton iconClass={"fa-solid fa-heart"} textButton={"People who like it"}/>
                </div>
            </div>
        </>
    )
}