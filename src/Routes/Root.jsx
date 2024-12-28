import React from "react";
import LoginForm from "../components/LoginForm.jsx";
// Icons
import { FaBars } from "react-icons/fa";
import { Outlet, Link, NavLink } from "react-router-dom";
export default function root() {
    return ( <
        >
        <
        nav className = "navbar bg-primary text-light mb-3" >
        <
        div className = "navbar-logo" >
        <
        a className = "navbar-brand" >
        <
        span className = "logo" > C < /span>odelkar{" "} <
        /a>{" "} <
        button className = "navbar-toggler btn btn-sm btn-close-white" >
        <
        FaBars / >
        <
        /button>{" "} <
        /div>{" "} <
        div className = "navbar-collapse" >
        <
        ul className = "navbar-nav me-auto" > { " " } <
        NavLink to = { `/home/` }
        className = {
            ({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
        } >
        Home { " " } <
        /NavLink>{" "} <
        NavLink to = { `/about/` }
        className = {
            ({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
        } >
        About { " " } <
        /NavLink>{" "} <
        NavLink to = { `/contact/` }
        className = {
            ({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
        } >
        Contact { " " } <
        /NavLink>{" "} <
        NavLink to = { `/login/` }
        className = {
            ({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
        } >
        Log In { " " } <
        /NavLink>{" "} <
        NavLink to = { `/register/` }
        className = {
            ({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
        } >
        Register { " " } <
        /NavLink>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /nav>{" "} <
        Outlet / >
        <
        />
    );
}