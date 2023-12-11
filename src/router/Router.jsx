import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../views/App"
import {Profile} from "../views/Profile"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}