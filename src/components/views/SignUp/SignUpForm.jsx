import React from "react";
import '../../../styles/views/SignUp/signUp.css';

export const SignUpForm = () => {
    return(
        <div className="signup-container">
            <div className="logo">
                <label className={"color-black"}>SIGN UP</label>
            </div>
            <form id="signup-form">
                <div className="form-item">
                    <input className="signup-input" type="text" id="fullName" name="fullName" placeholder=" Name"></input>
                </div>
                <div className="form-item">
                    <input className="signup-input" type="text" id="lastName" name="lastName" placeholder=" Last Name"></input>
                </div>
                <div className="form-item">
                    <input className="signup-input" type="text" id="emailAddress" name="emailAddress" placeholder=" Email address"></input>
                </div>
                <div className="form-item">
                    <input className="signup-input" type="text" id="userName" name="userName" placeholder=" Username"></input>
                </div>
                <div className="form-item">
                    <input className="signup-input" type="password" id="confirmPassword" name="confirmPassword" placeholder=" Password"></input>
                </div>
                <div className="form-item">
                    <input className="signup-input" type="password" id="confirmPassword" name="confirmPassword" placeholder=" Confirm password"></input>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn waves-effect waves-light">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

