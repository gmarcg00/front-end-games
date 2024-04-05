import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import '../../../styles/views/Avatars/avatar.css';



export const Avatar = ({name,slug,price,backgroundImage,index,textColor}) => {

    useEffect(() => {
        document.getElementById(`avatar-${index}`).style.backgroundImage = `url(${backgroundImage})`;
    },[])

    return(
        <div className="avatar-container">
            <Link to={`/avatars/${slug}`}> <div id={`avatar-${index}`} className="avatar"></div></Link>
            <div className={"avatar-container-text"}>
                <label className={`avatar-name ${textColor}`}>{name}</label>
                <label className="price-text">{price} $</label>
            </div>
        </div>
    )
}