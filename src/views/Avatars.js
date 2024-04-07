import React, {useContext, useEffect} from "react";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Filter} from "../components/views/Games/Filter";
import '../styles/views/Avatars/avatars.css';
import {AvatarContext} from "../context/AvatarContext";

import {WebAvatar} from "../components/views/Avatars/WebAvatar";

export const Avatars = () => {
    const { avatars } = useContext(AvatarContext);

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
                        <WebAvatar name={avatar.name} slug={avatar.slug} price={avatar.price} index={`section-${avatar.id}`} backgroundImage={avatar.backgroundImage} textColor={"color-white"}/>
                    ))
                }
            </div>
            <Footer/>
        </>
    )
}