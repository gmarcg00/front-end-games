import {Header} from "../components/header/Header";
import React from "react";
import '../styles/views/Review/reviews.css';
import {Filter} from "../components/views/Games/Filter";
import {Review} from "../components/views/Reviews/Review";
import {Footer} from "../components/footer/Footer";

export const Reviews = () => {
    return(
        <>
            <Header/>
            <div className="height">
                <div id="filters-section" className="filters-section">
                    <div id="filters-section-title" className="filters-section-title">
                        <h1 className="title-section">Reviews Section</h1>
                    </div>
                    <div id="filters-section-container" className="filters-section-container">
                        <Filter title={"Genre"} options={["Action","Shooter","Strategy","Survival","Sports"]}/>
                        <Filter title={"Platform"} options={["Action","Shooter","Strategy","Survival","Sports"]}/>
                        <Filter title={"Company"} options={["Action","Shooter","Strategy","Survival","Sports"]}/>
                    </div>
                </div>
                <div className="reviews-container">
                    <Review title={"Awesome"} description={"Exciting gameplay mechanics with immersive storytelling; visually stunning graphics elevate the experience. A must-play title for both casual gamers and hardcore enthusiasts"} userName={"alex24"} date={"10-10-2022"} gameImage={"https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"} userImage={"/images/ellie.jpg"} index={"1"}/>
                    <Review title={"Amazing"} description={"Engaging narrative paired with smooth controls; atmospheric soundtrack enhances the gameplay. A standout choice for fans of the genre. No words can describe what I have felt when I was playing it."} userName={"eduu_7"} date={"03-12-2021"} gameImage={"https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg"} userImage={"/images/obi-wan.jpg"} index={"2"}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}