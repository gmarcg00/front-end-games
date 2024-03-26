import React,{useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import '../../../../styles/views/Games/GameCard/cardPreviewInfo.css';

export const CardPreviewInfo = ({platformIconClass,title,index,slug}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const writeReviewButton = document.getElementById(`write-review-button-${index}`);
        writeReviewButton.addEventListener('click',() => {
            navigate(`/write/review/${index}`);
        })
    },[]);

    return(
        <>
            <div className="game-platform-icons">
                {
                    platformIconClass.map((icon) =>(
                        <i className={`${icon} game-icon`}></i>
                    ))
                }
            </div>
            <Link to={`/game/${slug}`}> <label className="game-name"> {title}</label></Link>
            <div className="game-review-data-icons">
                <i className="fa-solid fa-heart game-icon"></i>
                <i id={`write-review-button-${index}`} className="fa-solid fa-message game-icon"></i>
            </div>
        </>
    )
}