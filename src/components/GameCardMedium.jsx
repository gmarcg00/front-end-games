import React, {useEffect } from "react";
import {CardPreviewInfo} from "./CardPreviewInfo";
import {CardDetailLine} from "./CardDetailLine";
import {CardDetailButton} from "./CardDetailButton";

import '../styles/gameCardMedium.css';

export const GameCardMedium = ({title,index}) => {

    useEffect(() => {
        let card = document.getElementById(`game-container-${index}`);
        let cardSection1 = document.getElementById(`card-section-1-${index}`);
        let cardSection2 = document.getElementById(`card-section-2-${index}`);

        card.addEventListener("mouseenter",() => {
            cardSection1.classList.remove("card-section-1-border-card-section-2-not-visible")
            cardSection1.classList.add("card-section-1-border-card-section-2-visible")
            cardSection2.classList.toggle("card-section-2-visible")})
        card.addEventListener("mouseleave",() => {
            cardSection1.classList.remove("card-section-1-border-card-section-2-visible")
            cardSection1.classList.add("card-section-1-border-card-section-2-not-visible")
            cardSection2.classList.toggle("card-section-2-visible")})
    })

    return(
        <>
            <div id={`card-section-1-${index}`} className="card-section-1 card-section-1-border-card-section-2-not-visible">
                <div className="game-card-image"></div>
                <div className="card-section-1-data">
                    <CardPreviewInfo title={title} platformIconClass={["fa-brands fa-playstation","fa-brands fa-xbox","fa-brands fa-windows"]}/>
                </div>
            </div>
            <div id={`card-section-2-${index}`} className="card-section-2">
                <div className="card-section-2-row">
                    <CardDetailLine field={"Release date:"} text={"12-13-2023"}/>
                    <CardDetailLine field={"Genres:"} text={"Narrative"}/>
                    <CardDetailLine field={"Rating:"} text={"5.0"}/>
                    <CardDetailButton iconClass={"fa-solid fa-gamepad"} textButton={"More like this"}/>
                    <CardDetailButton iconClass={"fa-solid fa-heart"} textButton={"People who like it"}/>
                </div>
            </div>
        </>
    )
}