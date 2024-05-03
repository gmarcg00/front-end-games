import React,{useEffect} from "react";
import { useParams } from 'react-router-dom';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import '../styles/views/Review/writeReview.css';

export const WriteReview = ({games}) => {

    const { gameId } = useParams();
    const game  = games.find(r => r.id === gameId);

    useEffect(() => {
        document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${game.backgroundImage})`;
    },[]);

    return(
        <>
            <Header/>
            <div className="write-review">
                <label className="write-review-input">Title</label>
                <input className="write-review-input" placeholder={"Title"}></input>
                <label className="write-review-input">Comment text</label>
                <textarea className="write-review-input-description" placeholder={"Write here"}></textarea>
                <button className="write-review-submit-button">Send</button>
            </div>
            <Footer/>
        </>
    )

}