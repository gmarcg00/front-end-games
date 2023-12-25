import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "../views/Home"
import {Profile} from "../views/Profile"
import {Games} from "../views/Games"
import {GameDetails} from "../views/GameDetails"
import {WriteReview} from "../views/WriteReview"
import {SignUp} from "../views/SignUp"
import {LogIn} from "../views/LogIn"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/games" element={<Games/>} />
                <Route path="/game/:gameId" element={<GameDetails/>} />
                <Route path="/write/review/:gameId" element={<WriteReview/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<LogIn/>} />
            </Routes>
        </BrowserRouter>
    );
}
