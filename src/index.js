import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import ErrorPage from "./routes/ErrorPage";
import Contact from "./routes/Contact";
import "./sass/main.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
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