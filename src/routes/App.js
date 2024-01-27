import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <div className="header">
                this is the header
                <Link to={`home`}>Home</Link>
                <Link to={`resume`}>Resume</Link>
                <Link to={`contact`}>Contact</Link>
            </div>
            <div className="main-content">
                <Outlet />
            </div>
            <div className="footer">this is the footer</div>
        </div>
    );
}