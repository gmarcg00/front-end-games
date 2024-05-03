import React from "react";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Filter} from "../components/views/Games/Filter";
import '../styles/views/Avatars/avatars.css';

import {WebSelectableAvatar} from "../components/views/Avatars/WebSelectableAvatar";

export const Avatars = ({avatars}) => {

    return(
        <>
            <Header/>
            <div id="filters-section" className="filters-section">
                <div id="filters-section-title" className="filters-section-title">
                    <h1 className="title-section">Avatars Section</h1>
                </div>
                <div id="filters-section-container" className="filters-section-container">
                    <Filter title={"Game"} options={["The Last Of Us","Star Wars","Harry Potter","Assassin's Creed","Back To The Future","Uncharted","The Lord Of The Rings"]}/>
                </div>

            </div>
            <div className="avatars-section">
                {
                    avatars.map((avatar) =>(
                        <WebSelectableAvatar name={avatar.name} slug={avatar.slug} price={avatar.price} index={`section-${avatar.id}`} backgroundImage={avatar.backgroundImage} textColor={"color-white"}/>
                    ))
                }
            </div>
            <Footer/>
        </>
    )
}