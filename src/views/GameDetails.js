import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {GameTrailer} from "../components/views/Games/GameDetails/GameTrailer";
import {GameScreenshot} from "../components/views/Games/GameDetails/GameScreenshot";
import '../styles/views/Games/GameDetails/gameDetails.css';
import {Avatar} from "../components/views/Avatars/Avatar";
import {CircularProgress} from "@mui/material";
import { LineChart} from "@mui/x-charts";
import {GameCardMedium} from "../components/views/Games/GameCard/GameCardMedium";

export const GameDetails = () => {
    const { slug } = useParams();
    const [game, setGame] = useState([]);
    const [similarGames, setSimilarGames] = useState([]);

    const host = process.env.REACT_APP_GR_GAMES_HOST;
    const uri = process.env.REACT_APP_GR_GAMES_GAMES_URI;
    const gameUrl = `https://${host}${uri}/${slug}`;
    let similarGamesUrl = `https://${host}${uri}?genres=`;

    const getGame = async () => {
        const response = await fetch(gameUrl)
        const data = await response.json();
        setGame(data);
        return data;
    }

    const getSimilarGames = async (genres) => {
        let x = similarGamesUrl+genres
        const response = await fetch(similarGamesUrl+genres)
        const data = await response.json();
        setSimilarGames(data.data);
    }

    useEffect(() => {
        getGame().then(game => {
            document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${game.background_image})`;
            document.body.style.backgroundSize = "cover";
            let arrayGenres = [];
            game.genres.forEach(genre => {arrayGenres.push(genre.slug)})
            getSimilarGames(arrayGenres).then(r => console.log("data fetched"));
        });
    },[]);


    return(
        <>
            <Header/>
            { (game!==undefined && game.length!==0)
                    ? <div className="game-view-container">
                        <div className="game-details-container">
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
                                <div className="game-details-avatars-section">
                                    <h2>Avatars</h2>
                                    <div className="avatars-container">
                                        {
                                            game.avatars.map((avatar) =>(
                                                <Avatar name={avatar.name}  slug={avatar.slug} price={avatar.price} index={avatar.id} backgroundImage={avatar.base64Img} textColor={"color-white"}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="similar-games-container">
                                    <h2>Games like {game.name}</h2>
                                    <div className="similar-games">
                                        {
                                            similarGames.slice(0,4).map((game) => {
                                                return (
                                                    <div id={`game-container-${game.id}`} key={`game-${game.id}`}
                                                         className="game-card-medium-container">
                                                        <GameCardMedium game={game} index={game.id}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="price-history-container">
                                    <h2>Pricing history</h2>
                                    <div className="price-history-graph">
                                        <LineChart
                                            xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                                            series={[
                                                {
                                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                                    color: 'red',
                                                },
                                            ]}
                                            width={500}
                                            height={300}
                                        />
                                    </div>
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
                                <div className="game-additional-details-social color-white">
                                    <h2>People who like it</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                : (<div id="containerMainSection" className="container-loading">
                    <CircularProgress size={75} color="inherit"/>
                </div>)
            }

        </>
    )
}