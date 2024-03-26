import React from 'react';
import {Header} from "../components/header/Header";
import {MainSection} from "../components/views/Games/MainSection";
import {GamesSection} from "../components/views/Games/GamesSection";
import {SingleGameSection} from "../components/views/Games/SingleGameSection";
import {Footer} from "../components/footer/Footer";


export const Home = () => {

    return (
        <div className="App">
            <Header/>
            <MainSection />
            <GamesSection/>
            <SingleGameSection/>
            <Footer/>
        </div>
    );
}