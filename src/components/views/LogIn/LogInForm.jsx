import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../../../styles/views/LogIn/login.css';
import Alert from '@mui/material/Alert';
import {login} from "../../../api/request/AuthRequest";

export const LogInForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState(null);

    const handleLogin =  (event) => {
        event.preventDefault();
        login(username, password)
            .then((response) => {
                if(response.ok){
                    response.json()
                        .then((data) =>{
                            window.localStorage.setItem("loggedUser", JSON.stringify(data))
                            setPassword("")
                            setUsername("")
                            setLoginMessage("success")
                            setTimeout(() => {
                                navigate(`/`);
                            }, 1500)
                        })
                }else{
                    setLoginMessage("error")
                }
            })
            .catch((error) => {
                setLoginMessage(error)
            })
    }

    return(
        <div className="login-container">
            <div className="login-form">
                <div className="logo">
                    <label className="color-black">LOG IN</label>
                </div>
                <form onSubmit={handleLogin} id="login-form">
                    <div className="form-item">
                        <input className="login-input" type="text" id="fullName" name="fullName" placeholder=" Username" onChange={(event) => setUsername(event.target.value)}></input>
                    </div>
                    <div className="form-item">
                        <input className="signup-input" type="password" id="confirmPassword" name="confirmPassword" placeholder=" Password" onChange={(event) => setPassword(event.target.value)}></input>
                    </div>
                    <div className="form-item">
                        <button type="submit" className="btn waves-effect waves-light">
                            Log in
                        </button>
                    </div>
                    {
                        loginMessage === "success"
                        ? (<div className="login-ok-alert">
                                <Alert variant={"filled"} severity="success" >Log in successfully.</Alert>
                            </div>)
                        :<></>
                    }
                    {
                        loginMessage === "error"
                            ? (<div className="login-ok-alert">
                                <Alert variant={"filled"} severity="error">Invalid credentials.</Alert>
                            </div>)
                            :<></>
                    }
                    {
                        loginMessage === "error-connection"
                            ? (<div className="login-ok-alert">
                                <Alert variant={"filled"} severity="error">Communication link failure.</Alert>
                            </div>)
                            :<></>
                    }
                </form>
            </div>

        </div>
    )
}