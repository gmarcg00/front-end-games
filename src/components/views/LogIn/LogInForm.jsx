import React,{useEffect} from "react";
import '../../../styles/views/LogIn/login.css';

export const LogInForm = () => {

    useEffect(() => {
        document.getElementById('login-form').addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.replace("/profile");
        });
    }, []);

    return(
        <div className="login-container">
            <div className="logo">
                <label className="color-black">LOG IN</label>
            </div>
            <form id="login-form">
                <div className="form-item">
                    <input className="login-input" type="text" id="fullName" name="fullName" placeholder=" Username"></input>
                </div>
                <div className="form-item">
                    <input className="signup-input" type="password" id="confirmPassword" name="confirmPassword" placeholder=" Password"></input>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn waves-effect waves-light">
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}