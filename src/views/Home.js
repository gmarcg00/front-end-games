import React,{useContext} from 'react';
import {Header} from "../components/header/Header";
import {MainSection} from "../components/views/Games/MainSection";
import {GamesSection} from "../components/views/Games/GamesSection";
import {SingleGameSection} from "../components/views/Games/SingleGameSection";
import {GamesContext} from "../context/GamesContext";
import {Footer} from "../components/footer/Footer";


export const Home = () => {

    const {games} = useContext(GamesContext);

    return (
        <div className="App">
            <Header/>
            <MainSection games={games} />
            <GamesSection/>
            <SingleGameSection/>
            <Footer/>
        </div>
    );
}