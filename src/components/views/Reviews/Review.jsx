import React,{useEffect} from "react";
import '../../../styles/views/Review/review.css';
export const Review = ({title,description,userImage,userName,date,gameImage,index}) => {

    useEffect(() => {
        document.getElementById(`review-${index}`).style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${gameImage})`;
        document.getElementById(`review-${index}`).style.backgroundSize = `cover`;
        document.getElementById(`review-user-image-${index}`).style.backgroundImage = `url(${userImage})`;
        document.getElementById(`review-user-image-${index}`).style.backgroundSize = `cover`;
    },[]);

    return (
        <>
            <div id={`review-${index}`} className="review">
                <h1 className="color-white">{title}</h1>
                <h3 className="review-description">{description}</h3>
                <div className="review-user">
                    <div id={`review-user-image-${index}`} className="review-user-image"></div>
                    <div className="review-user-data">
                        <p className="review-user-name">{userName}</p>
                        <p className="review-user-date"> {date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}