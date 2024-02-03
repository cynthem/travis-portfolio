import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
    return (
        <div className="App">

            <div className="header">
                <div className="header-title">
                    <h1>TRAVIS PHELPS</h1>
                    <h2>CINEMATIC ARTIST</h2>
                </div>
                <div className="header-navigation">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/resume">RESUME</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            </div>

            <div className="main-content"><Outlet /></div>

            <div className="footer">
                <p>© 2024 TRAVIS PHELPS</p>
                <p>Made by 
                    <a 
                        className="footer-link"
                        href='https://github.com/cynthem' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        CMP
                    </a>
                </p>
            </div>
        </div>
    );
}