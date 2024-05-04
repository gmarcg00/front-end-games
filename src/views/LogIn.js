import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {LoginModal} from "../components/modal/LoginModal";
import {login} from "../api/request/AuthRequest";

import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/views/LogIn/login.css';


export const LogIn = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState(null);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg')`;
        document.body.style.backgroundSize = "cover";
    },[]);

    const handleLogin =  (event) => {
        event.preventDefault();
        login(username, password)
            .then((response) => {
                if(response.ok){
                    response.json()
                        .then((data) =>{
                            window.localStorage.setItem("loggedUser", JSON.stringify(data))
                            setUsername("")
                            setPassword("")
                            setSuccess(true)
                            setLoginMessage("success")
                            setTimeout(() => {
                                navigate(`/`);
                            }, 1500)
                        })
                }else{
                    setLoginMessage("error")
                    setSuccess(false)
                }
            })
            .catch((error) => {
                setLoginMessage(error)
            })
    }

    return(
        <>
            <Header/>
            <div id="container-login">
                <div className="container-login__column-left">
                    <div className="container-login__column-left__content">
                        <div className="color-white">
                            <h1 id="login-section-title">Access</h1>
                        </div>
                        <div className="color-white">
                            <p className="login-section-subtitle">Do not have account?<Link to="/signup">Register now</Link></p>
                        </div>

                        <form onSubmit={handleLogin} id="login-form" >
                            <div className="form-input">
                                <TextField InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} id="outlined-basic" name="username" label="Username" variant="outlined" className="login-input" onChange={(event) => setUsername(event.target.value)}/>
                            </div>
                            <div className="form-input">
                                <TextField id="outlined-basic" name="password" type="password" label="Password" variant="outlined" className="login-input" InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                            <p className="login-section-subtitle"><Link to="/pagina-ejemplo">Forgot your password?</Link></p>
                            <div id="form-login-button">
                                <Button className="button-login" type="submit" variant={"contained"}>
                                    Sign in
                                </Button>
                            </div>
                            <div className="login-alternative-section">
                                <Button type="submit" variant={"contained"} className="login-alternative-button">
                                    <GoogleIcon/>
                                </Button>
                                <Button type="submit" variant={"contained"} className="login-alternative-button">
                                    <FacebookIcon/>
                                </Button>
                                <Button type="submit" variant={"outlined"} className="login-alternative-button">
                                    <GitHubIcon/>
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="container-login__column-right">
                    <div className="container-login__column-right__section-1">
                        <h1 className="color-white">Game Playground</h1>
                        <h2 className="color-white">#gamePlayground</h2>
                        <p className="color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.</p>
                    </div>
                    <div className="container-login__column-right__section-2">
                        <div className="container-login__column-right__section-2__up">
                            <div className="container-login__column-right__section-2-img"></div>
                            <div className="container-login__column-right__section-2-description">
                                <h1 className="description-title color-white">For the players</h1>
                                <p className="text-description color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.</p>
                            </div>
                        </div>
                        <div className="container-login__column-right__section-2__down">
                            <div className="container-login__column-right__section-2-img"></div>
                            <div className="container-login__column-right__section-2-description">
                                <h1 className="description-title color-white">Play has no limit</h1>
                                <p className="text-description color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {loginMessage === "success" && <LoginModal username={"guille01"} success={success}/>}
            {loginMessage === "error" && <LoginModal username={"guille01"} success={success}/>}
            <Footer/>
        </>
    )
}