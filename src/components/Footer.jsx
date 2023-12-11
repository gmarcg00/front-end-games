import React from "react";
import '../styles/footer.css';

export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-info-description">
                <label> LOGO</label>
                <p className="description"> COMPANY DESCRIPTION</p>
            </div>
            <div className="footer-info-contact">
                <label> ASSASSIN'S CREED UNITY</label>
                <p className="description"> ADDRESS.</p>
                <p className="description"> TELEPHONE NUMBER</p>
                <p className="description"> EMAIL ADDRESS</p>
            </div>
            <div className="footer-social-media">
                <div className="footer-social-media-icons-section">
                    <label> OUR SOCIAL MEDIA</label>
                    <div className="social-media-icons">
                        <i className="fa-brands fa-instagram social-media-icon"></i>
                        <i className="fa-brands fa-twitter social-media-icon"></i>
                        <i className="fa-brands fa-facebook social-media-icon"></i>
                    </div>
                </div>
                <div className="footer-social-media-newsletter-section">
                    <label> JOIN A NEWSLETTER</label>
                    <input className="newsletter-input" placeholder="OUR SOCIAL MEDIA"></input>
                </div>
            </div>
        </div>
    )
}