import React from 'react';
import LoggedInNavBar from "../Routes/LoggedInNavBar";
import Landing from "../components/Landing";
import { Outlet, Link, NavLink } from "react-router-dom";

const LoggedInPage = () => {
    return ( <
        div >
        <
        LoggedInNavBar / >
        <
        Landing / >
        <
        Outlet / >
        <
        /div>
    );
}

export default LoggedInPage;