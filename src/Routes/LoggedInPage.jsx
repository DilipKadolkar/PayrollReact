import React from 'react';
import LoggedInNavBar from "../Routes/LoggedInNavBar";
import Landing from "../components/Landing";
import { Outlet } from "react-router-dom";

const LoggedInPage = () => {
    return ( <
        div >
        <
        LoggedInNavBar / >
        <
        Landing / >
        <
        div className = "main-content" >
        <
        Outlet / > { /* This is where nested routes will be rendered */ } <
        /div> < /
        div >
    );
}

export default LoggedInPage;