import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import "./sass/main.scss";

const App = () => {
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

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "resume",
                element: <Resume />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]);

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<RouterProvider router={router} />);