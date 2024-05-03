import React from "react";
import '../../../../styles/views/Games/GameDetails/gameTrailer.css';

export const GameTrailer = ({src}) => {
    return(
        <iframe
                className="container-iframe"
                width="378"
                height="236"
                src={`${src}?si=1sUIkMoOBheXc2yJ&autoplay=1&autoplay=1&mute=1&enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
        </iframe>
    )
}