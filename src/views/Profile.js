import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MenuItemLarge} from "../components/MenuItemLarge";
import {MenuItemMedium} from "../components/MenuItemMedium";
import {MenuItemSmall} from "../components/MenuItemSmall";
import {ProfileColumnHeader} from "../components/ProfileColumnHeader";
import {ProfileColumnDataSection} from "../components/ProfileColumnDataSection";
import '../styles/profile.css';
import React from "react";
export const Profile = () => {

    const arrayUserLibrary = [
        { class: 'fa-solid fa-gamepad', title: 'Games' },
        { class: 'fa-regular fa-message', title: 'Reviews' },
        { class: 'fa-regular fa-images', title: 'Avatars' }
    ];

    const arrayUserSocialMedia = [
        { class: 'fa-brands fa-twitter', title: 'William02eras' },
        { class: 'fa-brands fa-instagram', title: 'William02eras' },
        { class: 'fa-brands fa-facebook', title: 'William02eras' },
        { class: 'fa-brands fa-tiktok', title: 'William02eras' }
    ];

    const userGenres = ['Action','RPG','Survival','Strategy','Sports','Shooter','Action']

    return(
        <div className="profile">
            <Header/>
            <div className="profile-menu">
                <div className="profile-content">
                    <div className="column-container">
                        <div className="profile-container">
                            <ProfileColumnHeader userName="UserName" progress={70} level={1} genres={userGenres}/>
                            <ProfileColumnDataSection title="MY LIBRARY" elements={arrayUserLibrary}/>
                            <ProfileColumnDataSection title="SOCIAL MEDIA" elements={arrayUserSocialMedia}/>
                        </div>
                    </div>
                    <div className="menu-container">
                        <div className="menu-container-row-1">
                            <MenuItemLarge title="GamesSection"/>
                            <MenuItemMedium title="Reviews"/>
                        </div>
                        <div className="menu-container-row-2">
                            <MenuItemSmall title="FOLLOWING"/>
                            <MenuItemSmall title="FOLLOWERS"/>
                            <MenuItemSmall title="SETTINGS"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
