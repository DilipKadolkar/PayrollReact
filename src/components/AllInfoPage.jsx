import React from "react";
import { FaBars } from "react-icons/fa";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function AllInfoPage() {
    return ( <
        >
        <
        nav className = "navbar bg-accept text-light mb-3" >
        <
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
        Employee { " " } <
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