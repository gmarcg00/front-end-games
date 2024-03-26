import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "../views/Home"
import {Profile} from "../views/Profile"
import {Games} from "../views/Games"
import {Avatars} from "../views/Avatars"
import {GameDetails} from "../views/GameDetails"
import {WriteReview} from "../views/WriteReview"
import {SignUp} from "../views/SignUp"
import {LogIn} from "../views/LogIn"
import {Reviews} from "../views/Reviews";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/games" element={<Games/>} />
                <Route path="/avatars" element={<Avatars/>} />
                <Route path="/reviews" element={<Reviews/>} />
                <Route path="/game/:slug" element={<GameDetails/>} />
                <Route path="/write/review/:gameId" element={<WriteReview/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<LogIn/>} />
            </Routes>
        </BrowserRouter>
    );
}
