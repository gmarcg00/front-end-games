import React, {useContext, useEffect,useState} from "react";
import {GameCardMedium} from "../views/Games/GameCard/GameCardMedium";
import '../../styles/header/header.css';
import {Link} from "react-router-dom";
import {Review} from "../views/Reviews/Review";
import {logout} from "../../api/request/AuthRequest";
import {AvatarContext} from "../../context/AvatarContext";
import {GamesContext} from "../../context/GamesContext";
import {WebSelectableAvatar} from "../views/Avatars/WebSelectableAvatar";

import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
    const { avatars } = useContext(AvatarContext);
    const { games } = useContext(GamesContext);

    const [arrayGames,setArrayGames] = useState([]);

    const arrayAvatars = avatars.slice(0, 3);

    useEffect(() => {
        if(games && games.length > 0) {
            setArrayGames(games.slice(0, 3));
        }
        let header = document.getElementById("header");
        let headerTextElements = document.querySelectorAll("li");
        let searchBar = document.getElementById("search-bar");
        let profileBar = document.getElementById("profile-bar");
        let profileBarCloseIconSignUp = document.getElementById("header-profile__signup-close-button");
        let profileBarCloseIconLogin = document.getElementById("header-profile__login-close-button");
        let profileBarCloseIconLogout = document.getElementById("header-profile__logout-close-button");
        let searchIcon = document.getElementById("search-icon");
        let searchBarCloseIcon = document.getElementById("search-bar-close-icon");
        let profileIcon = document.getElementById("profile-icon");
        let profileActiveIcon = document.getElementById("profile-active-icon");
        let logoutLabel = document.getElementById("logout-label");
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

        const disableProfileBarVisibility = () => {
            profileBar.classList.remove("header-profile-visible");
        };

        const cursorOnHeader = ()=> {
            header.classList.add("cursor-on-header")
            headerTextElements.forEach((li) => {
                li.classList.add("color-black")
            });
            searchIcon.classList.add("color-black")
            if(window.localStorage.getItem("loggedUser") === null) profileIcon.classList.add("color-black")
        };

        const cursorOutHeader = () => {
            header.classList.remove("cursor-on-header")
            headerTextElements.forEach((li) => {
                li.classList.remove("color-black")
            });
            searchIcon.classList.remove("color-black")
            if(window.localStorage.getItem("loggedUser") === null) profileIcon.classList.remove("color-black")
        }

        const handleLogout = () => {
            logout()
                .then((response) => {
                    if(response.ok){
                        window.localStorage.removeItem("loggedUser")
                        window.location.reload()
                    }
                })
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

            if(logoutLabel!==null) {
                logoutLabel.addEventListener("click", () => {
                    handleLogout()
                })
            }

            if(profileBarCloseIconLogout!==null) {
                profileBarCloseIconLogout.addEventListener("click", disableProfileBarVisibility)
            }

            if(profileBarCloseIconSignUp!==null) {
                profileBarCloseIconSignUp.addEventListener("click", disableProfileBarVisibility)
            }

            if(profileBarCloseIconLogin!==null) {
                profileBarCloseIconLogin.addEventListener("click", disableProfileBarVisibility)
            }



        }

        searchIcon.addEventListener("click", enableSearchVisibility)
        searchBarCloseIcon.addEventListener("click", disableSearchVisibility)

        //profileBarCloseIconSignUp.addEventListener("click", disableProfileBarVisibility)
        //profileBarCloseIconLogin.addEventListener("click", disableProfileBarVisibility)


        if(window.localStorage.getItem("loggedUser") === null){
            profileIcon.addEventListener("click",enableProfileVisibility)
        } else{
            profileActiveIcon.addEventListener("click",enableProfileVisibility)
        }

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
                    {
                        window.localStorage.getItem("loggedUser")
                        ? (<Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=1" sx={{ width: 32, height: 32 }} id="profile-active-icon" />)
                        : (<i id="profile-icon" className="fa-solid fa-user"></i>)
                    }
                </div>
            </div>
            <div id="search-bar" className="header-search">
                <i className="fa fa-search search-bar-icon"></i>
                <input className="search-bar-input" placeholder="Search..."></input>
                <i id="search-bar-close-icon" className="fa-solid fa-x search-bar-icon"></i>
            </div>
            <div id="profile-bar" className="header-profile" >
                {
                    window.localStorage.getItem("loggedUser")
                    ?
                    (
                        <div id="header-profile__logout">
                            <LogoutIcon fontSize={"large"} className="color-white"/>
                            <label id={"logout-label"} className={"header-profile-label header-profile-link"}>Log out</label>
                            <CloseIcon id={"header-profile__logout-close-button"} fontSize={"large"} className="color-white signup-bar-close-icon"/>
                        </div>
                    )
                    :
                    (
                        <>
                            <div id="header-profile__signup">
                                <PersonAddIcon fontSize={"large"} className="color-white"/>
                                <Link to={`/signup`} className={"header-profile-link"}><label className={"header-profile-label"}>Sign up</label></Link>
                                <CloseIcon id={"header-profile__signup-close-button"} fontSize={"large"} className="color-white signup-bar-close-icon"/>
                            </div>
                            <div id="header-profile__login">
                                <LoginIcon fontSize={"large"} className="color-white"/>
                                <Link to={'/login'} className={"header-profile-link"}><label className={"header-profile-label"}>Log in</label></Link>
                                <CloseIcon id={"header-profile__login-close-button"} fontSize={"large"} className="color-white login-bar-close-icon"/>
                            </div>
                        </>
                    )
                }
            </div>
            <div id="avatar-bar" className="header-shop">
                <div className="avatars-container">
                    {
                        arrayAvatars.map((avatar,index) =>(
                            <WebSelectableAvatar key={index} name={avatar.name} slug={avatar.slug} price={avatar.price} index={avatar.id} backgroundImage={avatar.base64Img} textColor={"color-black"} clickOn={true}/>
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