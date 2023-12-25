import React from "react";

export const GameTrailer = ({src}) => {
    return(
        <>
            <iframe width="560"
                    height="315"
                    src={`${src}?si=1sUIkMoOBheXc2yJ&autoplay=1&autoplay=1&mute=1&enablejsapi=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
        </>
    )
}