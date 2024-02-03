import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function App() {
    return (
        <div className="App">

            <div className="header">
                <div className="header-title">
                    <h1>TRAVIS PHELPS</h1>
                    <h2>CINEMATIC ARTIST</h2>
                </div>
                <NavBar />
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