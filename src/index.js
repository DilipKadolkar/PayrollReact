import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginForm from "./components/LoginForm.jsx";
import Root from "./Routes/Root.jsx";
import About from "./Routes/About.jsx"
import Contact from "./Routes/Contact.jsx"
import Home from "./Routes/Home.jsx";
import FirstPage from "./Routes/FirstPage.jsx";
import AllInfoPage from "./components/AllInfoPage.jsx";
import Landing from "./components/Landing.jsx";
import PayrollProcess from "./Routes/PayrollProcess.jsx";
import EmployeeInfo from "./Routes/EmployeeInfo.jsx"
import LoggedInPage from "./Routes/LoggedInPage.jsx"
import { AuthProvider } from './Routes/AuthContext.jsx'; // Ensure AuthProvider is imported correctly
import PrivateRoute from "./Routes/PrivateRoute.jsx"


import { createBrowserRouter, RouterProvider } from "react-router-dom";
const isAuthenticated = true; // Replace with actual authentication logic
const router = createBrowserRouter([{
        path: "/",
        element: < Root / > ,
        children: [{
                index: true,
                element: < FirstPage / >
            },
            {
                path: "/contact",
                element: < Contact / >
            },
            {
                path: "/home",
                element: < Home / >
            },
            {
                path: "/about",
                element: < About / >
            },
            {
                path: "/login",
                element: < LoginForm / >
            },
            {
                path: "/register",
                element: < LoginForm / >
            }
        ]
    },
    {
        path: "/loggedInPage",
        element: < PrivateRoute > < LoggedInPage / > < /PrivateRoute> ,
        children: [{
                path: "/loggedInPage/employeeInfo",
                element: < EmployeeInfo / >
            },
            {
                path: "/loggedInPage/payrollProcess",
                element: < PayrollProcess / >
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    React.StrictMode > { <
        AuthProvider >
        <
        RouterProvider router = { router }
        /> </
        AuthProvider >
    } <
    /React.StrictMode>
);