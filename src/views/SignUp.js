import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";

import '../styles/views/SignUp/signUp.css';
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {AvatarModal} from "../components/modal/AvatarModal";
import {PlatformModal} from "../components/modal/PlatformModal";
import {GenreModal} from "../components/modal/GenreModal";
import {randomGame} from "../api/request/GamesRequest";
import {signUp} from "../api/request/AuthRequest";


export const SignUp = () => {
    const [name, setName] = useState("");
    const [firstSurname, setFirstSurname] = useState("");
    const [secondSurname, setSecondSurname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [modal, setModal] = useState(0);
    const [gameBackground,setGameBackground] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg')`;
        document.body.style.backgroundSize = "cover";

        randomGame()
            .then((response) => {
                if(response.ok){
                    response.json()
                        .then((data) => {
                            setGameBackground(data);
                        })
                }
            })
    },[]);


    const showNextModal = () => {
        setModal(modal + 1);
    };

    let actualModal;
    switch (modal) {
        case 1:
            actualModal = <AvatarModal showNextModal={showNextModal} game={gameBackground}/>;
            break;
        case 2:
            actualModal = <PlatformModal showNextModal={showNextModal} game={gameBackground}/>;
            break;
        case 3:
            actualModal = <GenreModal showNextModal={showNextModal} game={gameBackground}/>;
            break;
        case 4:
            setTimeout(() => {
                navigate(`/`);
            }, 1500)
            break;
        default:
            actualModal = null;
    }

    const handleSignup = (event) => {
        event.preventDefault();
        signUp({name,email,username,password,firstSurname,secondSurname})
            .then((response) => {
                if(response.ok){
                    showNextModal();
                }else{
                    console.log("error")
                }
            })
            .catch(() => {
                console.log("error")//TODO: handle error
            });
    }

    return(
        <>
            <Header/>
            <div id="container-signup">
                <div id="container-signup__column-left">
                    <div className="container-signup__column-left__content">
                        <div className="color-white">
                            <h1 id="signup-section-title">Register</h1>
                        </div>
                        <div className="color-white">
                            <p className="signup-section-subtitle">Already have an account?<Link to="/login">Sign in</Link></p>
                        </div>
                        <form onSubmit={handleSignup} id="login-form" >
                            <div className="form-input">
                                <TextField InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} id="outlined-basic" name="name" label="Name" variant="outlined" className="login-input" onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div className="form-input">
                                <TextField InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} id="outlined-basic" name="last-name" label="First Surname" variant="outlined" className="login-input" onChange={(event) => setFirstSurname(event.target.value)}/>
                            </div>
                            <div className="form-input">
                                <TextField InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} id="outlined-basic" name="last-name" label="Second Surname" variant="outlined" className="login-input" onChange={(event) => setSecondSurname(event.target.value)}/>
                            </div>
                            <div className="form-input">
                                <TextField InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} id="outlined-basic" name="email" label="Email" variant="outlined" className="login-input" onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div className="form-input">
                                <TextField InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} id="outlined-basic" name="username" label="Username" variant="outlined" className="login-input" onChange={(event) => setUsername(event.target.value)}/>
                            </div>
                            <div className="form-input">
                                <TextField id="outlined-basic" name="password" type="password" label="Password" variant="outlined" className="login-input" InputLabelProps={{ style: { color: 'white'} }} InputProps={{ style: { color: 'white', borderColor: 'white' } }} onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                            <div id="form-signup-button">
                                <Button className="button-login" type="submit" variant={"contained"}>
                                    Sign up
                                </Button>
                            </div>

                        </form>
                    </div>

                </div>
                <div id="container-signup__column-right">


                </div>
            </div>
            <div className="login__row-2">
                column 2
            </div>
            {actualModal}
            <Footer/>
        </>
    )
}