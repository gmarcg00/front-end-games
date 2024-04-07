import React from "react";
import ModalImage from "react-modal-image";
import '../../../../styles/views/Games/GameDetails/gameScreenshot.css';


export const GameScreenshot = ({columnClass,backgroundImage,id}) => {

    return(
        <div className="container-screenshot">
            <ModalImage
                id={`screenshot-${id}`}
                className={`${columnClass}`}
                small={`${backgroundImage}`}
                large={`${backgroundImage}`}
            />
        </div>

    )
}