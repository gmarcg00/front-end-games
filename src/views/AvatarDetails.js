import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Header} from "../components/header/Header";
import {CircularProgress} from "@mui/material";
import '../styles/views/Avatars/AvatarDetails/avatarDetails.css';
import {WebAvatar} from "../components/views/Avatars/WebAvatar";
import {GameCardMedium} from "../components/views/Games/GameCard/GameCardMedium";


export const AvatarDetails = () => {
    const { slug } = useParams();
    const [avatar, setAvatar] = useState([]);
    const [avatarGames, setAvatarGames] = useState([]);

    const host = process.env.REACT_APP_GR_GAMES_HOST;
    const uri = process.env.REACT_APP_GR_GAMES_AVATARS_URI;

    const getAvatar = async () => {
        const response = await fetch(`https://${host}${uri}/${slug}`)
        const data = await response.json();
        setAvatar(data);
        setAvatarGames(data.games);
    }

    useEffect(() => {
        getAvatar().then(r => console.log("WebAvatar fetched"));
    }, []);

    return(
        <>
            <Header/>
            { (avatar!==undefined && avatar.length!==0)
                ?<div className="avatar-view-container">
                    <div className="avatar-details-image-section">
                        <WebAvatar name={avatar.name} slug={avatar.slug} price={avatar.price} index={avatar.id} backgroundImage={avatar.base64Img} textColor={"color-white"}/>
                        <div className="avatar-games-container color-white">
                            <h2>See {avatar.name} in</h2>
                        </div>
                        <div className="avatar-games">
                            {
                                avatarGames.map((game) => {
                                    return (
                                        <div id={`game-container-${game.id}`} key={`game-${game.id}`} className="game-card-medium-container">
                                            <GameCardMedium game={game} index={game.id}/>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className="avatar-details-price-section">

                    </div>
                </div>
                :<div id="containerMainSection" className="container-loading">
                    <CircularProgress size={75} color="inherit"/>
                 </div>

            }
        </>

    )


}