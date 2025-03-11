import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./Landing.module.css"; // Import the CSS module


export default function Landing() {
    return ( <
        div className = "navbarVertical" >
        <
        nav className = "text-light mb-3" > <
        ul className = "navbar-nav me-auto navbarContent" >
        <
        NavLink to = { `/loggedInPage/payrollProcess/` }
        className = {
            ({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
        } >
        Payroll { " " } <
        /NavLink>{" "}

        <
        br / >

        <
        NavLink to = { `/loggedInPage/employeeInfo/` }
        className = {
            ({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
        } >
        Employee { " " } <
        /NavLink>{" "}



        <
        /
        ul > { " " } <
        /nav>{" "} < /
        div >
    );
}