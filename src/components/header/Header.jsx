import React, {useContext, useEffect,useState} from "react";
import {ProfileHeaderBarItem} from "./ProfileHeaderBarItem";
import {GameCardMedium} from "../views/Games/GameCard/GameCardMedium";
import {Avatar} from "../views/Avatars/Avatar";
import '../../styles/header/header.css';
import {Link} from "react-router-dom";
import {AvatarContext} from "../../context/AvatarContext";
import {GamesContext} from "../../context/GamesContext";
import {Review} from "../views/Reviews/Review";

export const Header = () => {
    const [arrayGames,setArrayGames] = useState([]);

    const { avatars } = useContext(AvatarContext);
    const { games } = useContext(GamesContext);

    const arrayAvatars = avatars.slice(0, 3);

    useEffect(() => {
        if(games && games.length > 0) {
            setArrayGames(games.slice(0, 3));
        }
        let header = document.getElementById("header");
        let headerTextElements = document.querySelectorAll("li");
        let searchBar = document.getElementById("search-bar");
        let profileBar = document.getElementById("profile-bar");
        let searchIcon = document.getElementById("search-icon");
        let searchBarCloseIcon = document.getElementById("search-bar-close-icon");
        let profileIcon = document.getElementById("profile-icon");
        let avatarText = document.getElementById("avatar-text");
        let avatarBar = document.getElementById("avatar-bar");
        let gamesText = document.getElementById("games-text");
        let gamesBar = document.getElementById("games-bar");
        let reviewsText = document.getElementById("reviews-text");
        let reviewsBar = document.getElementById("reviews-bar");

        const enableSearchVisibility = () => {
            if(profileBar.classList.contains("header-profile-visible")) profileBar.classList.remove("header-profile-visible");
            searchBar.classList.add("header-search-visible");
        };

        const disableSearchVisibility = () => {
            searchBar.classList.remove("header-search-visible");
        };

        const enableProfileVisibility = () => {
            if(searchBar.classList.contains("header-search-visible")) searchBar.classList.remove("header-search-visible");
            profileBar.classList.add("header-profile-visible");
        };

        const cursorOnHeader = ()=> {
            header.classList.add("cursor-on-header")
            headerTextElements.forEach((li) => {
                li.classList.add("color-black")
            });
            searchIcon.classList.add("color-black")
            profileIcon.classList.add("color-black")
        };

        const cursorOutHeader = () => {
            header.classList.remove("cursor-on-header")
            headerTextElements.forEach((li) => {
                li.classList.remove("color-black")
            });
            searchIcon.classList.remove("color-black")
            profileIcon.classList.remove("color-black")
        }

        const addEventsListeners = () => {
            avatarText.addEventListener("mouseenter", () => {
                avatarBar.classList.add("header-shop-visible")
            })

            avatarText.addEventListener("mouseleave", () => {
                avatarBar.classList.remove("header-shop-visible")
            })

            avatarBar.addEventListener("mouseenter", () => {
                cursorOnHeader()
                avatarBar.classList.add("header-shop-visible")
            })

            avatarBar.addEventListener("mouseleave", () => {
                cursorOutHeader()
                avatarBar.classList.remove("header-shop-visible")
            })

            gamesText.addEventListener("mouseenter", () => {
                gamesBar.classList.add("header-games-visible")
            })

            gamesText.addEventListener("mouseleave", () => {
                gamesBar.classList.remove("header-games-visible")
            })

            gamesBar.addEventListener("mouseenter", () => {
                cursorOnHeader()
                gamesBar.classList.add("header-games-visible")
            })

            gamesBar.addEventListener("mouseleave", () => {
                cursorOutHeader()
                gamesBar.classList.remove("header-games-visible")
            })

            reviewsText.addEventListener("mouseenter", () => {
                reviewsBar.classList.add("header-reviews-visible")
            })

            reviewsText.addEventListener("mouseleave", () => {
                reviewsBar.classList.remove("header-reviews-visible")
            })

            reviewsBar.addEventListener("mouseenter", () => {
                cursorOnHeader()
                reviewsBar.classList.add("header-reviews-visible")
            })

            reviewsBar.addEventListener("mouseleave", () => {
                cursorOutHeader()
                reviewsBar.classList.remove("header-reviews-visible")
            })
        }

        searchIcon.addEventListener("click", enableSearchVisibility)
        searchBarCloseIcon.addEventListener("click", disableSearchVisibility)
        profileIcon.addEventListener("click",enableProfileVisibility)
        header.addEventListener("mouseenter", cursorOnHeader)
        header.addEventListener("mouseleave", cursorOutHeader)
        addEventsListeners()

    },[games])

    return(
        <div className="header-container">
            <div id={"header"} className="header">
                <div className="header-title">
                    <Link to="/"><li>GAME PLAYGROUND</li></Link>
                </div>
                <nav>
                    <ul id="list">
                        <div id="games-text" className="list-item">
                            <Link  to="/games"><li>Games</li></Link>
                        </div>
                        <div id="reviews-text" className="list-item">
                            <Link  to="/reviews"><li>Reviews</li></Link>
                        </div>
                        <div id="avatar-text" className="list-item">
                            <Link to="/avatars"><li>Avatars</li></Link>
                        </div>
                    </ul>
                </nav>
                <div className="header-icons">
                    <i id="search-icon" className="fa fa-search"></i>
                    <i id="profile-icon" className="fa-solid fa-user"></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
            <div id="search-bar" className="header-search">
                <i className="fa fa-search search-bar-icon"></i>
                <input className="search-bar-input" placeholder="Search..."></input>
                <i id="search-bar-close-icon" className="fa-solid fa-x search-bar-icon"></i>
            </div>
            <div id="profile-bar" className="header-profile" >
                 <ProfileHeaderBarItem text={"Sign up"} iconClass={"fa-solid fa-user-plus"} barItemName={"signup"}/>
                 <ProfileHeaderBarItem text={`Log in`} iconClass={"fa-solid fa-arrow-right-to-bracket"} barItemName={"login"} />
            </div>
            <div id="avatar-bar" className="header-shop">
                <div className="avatars-container">
                    {
                        arrayAvatars.map((avatar) =>(
                            <Avatar name={avatar.name} price={avatar.price} index={avatar.id} backgroundImage={avatar.backgroundImage} textColor={"color-black"}/>
                        ))
                    }
                </div>
            </div>
            <div id="games-bar" className="header-games">
                <div className="header-games-container">
                    {
                        arrayGames.map((game) =>(
                            <div key={game.id} id={`game-container-header-${game.id}`} className="game-card-medium-container">
                                <GameCardMedium game={game} index={`header-${game.id}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id="reviews-bar" className="header-reviews">
                <Review title={"Awesome"} description={"Exciting gameplay mechanics with immersive storytelling; visually stunning graphics elevate the experience. A must-play title for both casual gamers and hardcore enthusiasts"} userName={"alex24"} date={"10-10-2022"} gameImage={"https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"} userImage={"/images/ellie.jpg"} index={"header-1"}/>
                <Review title={"Amazing"} description={"Engaging narrative paired with smooth controls; atmospheric soundtrack enhances the gameplay. A standout choice for fans of the genre. No words can describe what I have felt when I was playing it."} userName={"eduu_7"} date={"03-12-2021"} gameImage={"https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg"} userImage={"/images/obi-wan.jpg"} index={"header-2"}/>
            </div>
        </div>
    )
}