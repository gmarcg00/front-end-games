import React,{useEffect} from "react";
import ModalImage from "react-modal-image";
import '../../../../styles/views/Games/GameDetails/gameScreenshot.css';


export const GameScreenshot = ({columnClass,backgroundImage,id}) => {

    return(
        <ModalImage
            id={`screenshot-${id}`}
            className={`game-details-section-images-screenshot ${columnClass}`}
            small={`${backgroundImage}`}
            large={`${backgroundImage}`}
        />
    )
}