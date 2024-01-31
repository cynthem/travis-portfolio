import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <div className="App">

            <div className="header">
                <div className="header-title">
                    <h1>TRAVIS PHELPS</h1>
                    <h2>CINEMATIC ARTIST</h2>
                </div>
                <div className="header-navigation">
                    <Link to={`home`} className="nav-link">Home</Link>
                    <Link to={`resume`} className="nav-link">Resume</Link>
                    <Link to={`contact`} className="nav-link">Contact</Link>
                </div>
            </div>

            <div className="main-content"><Outlet /></div>

            <div className="footer">
                <p>© 2024 Travis Phelps</p>
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