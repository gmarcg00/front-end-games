import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../views/App"
import {Profile} from "../views/Profile"
import {Games} from "../views/Games"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/games" element={<Games/>} />
            </Routes>
        </BrowserRouter>
    )
}