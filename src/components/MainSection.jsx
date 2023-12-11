import React from "react";
import '../styles/mainSection.css';

export const MainSection = () => {

    return(
        <div className="container">
            <div className="container-info">
                <label>HORIZON FORBIDDEN WEST</label>
                <div className="container-info-icons">
                    <i className="fa-brands fa-playstation"></i>
                    <i className="fa-brands fa-xbox"></i>
                    <i className="fa-brands fa-windows"></i>
                </div>
                <button>See more</button>
            </div>
        </div>
    )
}