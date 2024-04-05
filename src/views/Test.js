import React, {useState,useEffect} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Item} from "./Item";
import '../styles/test.css';

export const Test = () => {

    const responsive = {
        100: {
            items: 1,
        },
        568: {
            items: 4,
        },
        1024: {
            items: 5,
            itemsFit: 'contain',
        }
    };

    const items = [
        <div className="carousel" data-value="1">1</div>,
        <div className="carousel" data-value="2">2</div>,
        <div className="carousel" data-value="3">3</div>,
        <div className="carousel" data-value="4">4</div>,
        <div className="carousel" data-value="5">5</div>,

    ];


    return (
        <div className="c1">
            <AliceCarousel
                //paddingLeft={1035}
                //autoWidth={true}
                infinite={true}
                //autoPlay={true}
                autoPlayInterval={1000}
                autoPlayDirection={"ltr"}
                animationType={"fadeout"}
                //disableButtonsControls={true}
                //keyboardNavigation={false}
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                activeIndex={0}
                mouseTracking={true}

            />
        </div>
    );

}