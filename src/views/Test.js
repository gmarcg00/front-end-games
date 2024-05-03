import React from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/test.css';
import {LoginModal} from "../components/modal/LoginModal";


export const Test = () => {

    return (
        <div className="padre">
            <div className="hijo">
                Soy el hijo 1
            </div>
            <div className="hijo">
                Soy el hijo 2
            </div>
        </div>

    );

}