import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {GameTrailer} from "../components/views/Games/GameDetails/GameTrailer";
import {GameScreenshot} from "../components/views/Games/GameDetails/GameScreenshot";
import '../styles/views/Games/GameDetails/gameDetails.css';

export const GameDetails = () => {
    const { slug } = useParams();
    const [game, setGame] = useState([]);

    const host = process.env.REACT_APP_GR_GAMES_HOST;
    const uri = process.env.REACT_APP_GR_GAMES_URI;
    const url = `https://${host}${uri}/${slug}`;

    const getGames = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setGame(data);
        return data;
    }

    useEffect(() => {
        getGames().then(game => {
            document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${game.background_image})`;
            document.body.style.backgroundSize = "cover";
        });
    },[]);


    return(
        <>
            <Header/>
            { (game!==undefined && game.length!==0)
                ? <div className="game-details">
                    <div className="game-details-section-info">
                        <div className="game-details-section-info-title">
                            <h1 className="">{game.name}</h1>
                        </div>
                        <div className="game-details-section-info-section">
                            <h2 className="game-details-section-info-item-title" >Release date:</h2>
                            <h2 className="game-details-section-info-item-value">{game.releaseDate}</h2>
                        </div>
                        <div className="game-details-section-info-section">
                            <h2 className="game-details-section-info-item-title">Genre:</h2>
                            <h2 className="game-details-section-info-item-value">{game.genre}</h2>
                        </div>
                        <div className="game-details-section-info-section">
                            <h2 className="game-details-section-info-item-title">Average time:</h2>
                            <h2 className="game-details-section-info-item-value">10 hours</h2>
                        </div>
                        <div className="game-details-section-info-section">
                            <h2 className="game-details-section-info-item-title">Rating:</h2>
                            <h2 className="game-details-section-info-item-value">{game.rating}</h2>
                        </div>
                        <div className="game-details-section-info-description">
                            <h2 className="game-details-section-info-item-title">About:</h2>
                            <h3 className="game-details-section-info-item-value">{game.description}</h3>
                        </div>
                    </div>
                    <div className="game-details-section-images">
                        <div className="game-details-section-images-trailer">
                            <GameTrailer src={game.trailer}/>
                        </div>
                        <div className="game-details-section-images-screenshots">
                            {game.screenshots.map((screenshot) => {
                                if(screenshot.id%2 === 0){
                                    return(
                                        <GameScreenshot columnClass={"screenshot-right-column"} backgroundImage={screenshot.image} id={screenshot.id}/>
                                    )
                                }else{
                                    return(
                                        <GameScreenshot columnClass={"screenshot-left-column"} backgroundImage={screenshot.image} id={screenshot.id}/>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                : (<></>)
            }

            <Footer/>
        </>
    )
}