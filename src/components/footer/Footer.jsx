import React,{useEffect} from "react";
import '../../styles/footer/footer.css';

export const Footer = () => {

    useEffect(() => {
        const twitterIcon = document.getElementById("twitter-icon");
        const instagramIcon = document.getElementById("instagram-icon");
        const facebookIcon = document.getElementById("facebook-icon");

        twitterIcon.addEventListener("click", () => {window.open("https://twitter.com")});
        instagramIcon.addEventListener("click", () => {window.open("https://instagram.com")});
        facebookIcon.addEventListener("click", () => {window.open("https://facebook.com")});

        twitterIcon.addEventListener("mouseover", () => {twitterIcon.classList.add("cursor-pointer")});
        instagramIcon.addEventListener("mouseover", () => {instagramIcon.classList.add("cursor-pointer")});
        facebookIcon.addEventListener("mouseover", () => {facebookIcon.classList.add("cursor-pointer")});
    },[]);

    return(
        <div className="footer">
            <div className="footer-info-description">
                <p className="description-value"> YOUR FREE VIDEOGAME WEBSITE</p>
            </div>
            <div className="footer-info-contact">
                <label> GAME PLAYGROUND</label>
                <div className="footer-info-contact-section">
                    <p className="description-title"> ADDRESS:</p>
                    <p className="description-value"> 221B Baker Street, London, England</p>
                </div>
                <div className="footer-info-contact-section">
                    <p className="description-title"> CONTACT NUMBER:</p>
                    <p className="description-value"> 654 34 75 82</p>
                </div>
                <div className="footer-info-contact-section">
                    <p className="description-title"> EMAIL ADDRESS:</p>
                    <p className="description-value"> gameplayground@gmail.com</p>
                </div>
            </div>
            <div className="footer-social-media">
                <div className="footer-social-media-icons-section">
                    <label> OUR SOCIAL MEDIA</label>
                    <div className="social-media-icons">
                        <i id={"instagram-icon"} className="fa-brands fa-instagram social-media-icon"></i>
                        <i id={"twitter-icon"} className="fa-brands fa-twitter social-media-icon"></i>
                        <i id={"facebook-icon"} className="fa-brands fa-facebook social-media-icon"></i>
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