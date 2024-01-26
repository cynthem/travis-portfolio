import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import "./sass/main.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    }
]);

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<RouterProvider router={router} />);