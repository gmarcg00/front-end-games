import React,{useEffect} from "react";
import '../../../styles/views/Avatars/avatar.css';



export const WebAvatar = ({name,backgroundImage,index,displayColor,textColor}) => {

    useEffect(() => {
        const avatarElement = document.getElementById(`avatar-${index}`)
        avatarElement.style.backgroundImage = `url(${backgroundImage})`;
        if(displayColor === 'display-color'){
            avatarElement.classList.remove('display-no-color');
            avatarElement.classList.add(displayColor)
        }else{
            avatarElement.classList.remove('display-color');
            avatarElement.classList.add('display-no-color')
        }
        avatarElement.classList.add(displayColor);
    })

    return(
        <div className="avatar-container">
            <div id={`avatar-${index}`} className="avatar gray-scale"></div>
            <div className={"avatar-container-text"}>
                <label className={`avatar-name ${textColor}`}>{name}</label>
            </div>
        </div>
    )
}