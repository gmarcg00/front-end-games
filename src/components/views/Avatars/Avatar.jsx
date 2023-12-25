import React,{useEffect} from "react";
import '../../../styles/views/Avatars/avatar.css';



export const Avatar = ({name,price,backgroundImage,index,textColor}) => {

    useEffect(() => {
        document.getElementById(`avatar-${index}`).style.backgroundImage = `url(${backgroundImage})`;
    },[])

    return(
        <div className="avatar-container">
            <div id={`avatar-${index}`} className="avatar"></div>
            <div className={"avatar-container-text"}>
                <label className={`avatar-name ${textColor}`}>{name}</label>
                <label className="price-text">{price} $</label>
            </div>
        </div>
    )
}