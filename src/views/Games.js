import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {GameCardMedium} from "../components/GameCardMedium";
import '../styles/games.css';
export const Games = () => {

    return (
        <>
            <Header/>
            <div id="filter-section" className="filter-section"></div>
            <Footer/>
        </>
    )
}