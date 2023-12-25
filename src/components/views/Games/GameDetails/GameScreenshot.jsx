import React,{useEffect} from "react";
import ModalImage from "react-modal-image";
import '../../../../styles/views/Games/GameDetails/gameScreenshot.css';


export const GameScreenshot = ({columnClass,backgroundImage,index}) => {

    return(
        <ModalImage
            id={`screenshot-${index}`}
            className={`game-details-section-images-screenshot ${columnClass}`}
            small={`${backgroundImage}`}
            large={`${backgroundImage}`}
            alt="Hello World!"
        />
    )
}