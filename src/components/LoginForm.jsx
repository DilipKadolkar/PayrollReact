import React from "react";
import Title from "./Title";
import Button from "./Button";
import NavBar from "./NavBar"
import Header from "./Header";
import AllInfoPage from "./AllInfoPage"
import icon from "../img/icon.png";
import { useState } from 'react';
import Contact from "../Routes/Contact"
import { useNavigate } from 'react-router-dom';
import { Outlet, Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../Routes/AuthContext.jsx'; // AuthContext is imported here

export default function LoginForm() {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);
    const handleLogin = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms').then((response) => {
            if (response.ok) {
                setIsAuthenticated(true);
                navigate('/loggedInPage/');
            }
        })
    };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleClick = () => {
        setLoading(true);
        fetch('https://api.example.com/data').then((response) => { if (!response.ok) {} return response.json(); }).then((data) => {
            setData(data);
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        });
    };

    return ( <
        div className = "d-flex"
        style = {
            { maxwidth: 500 }
        } >
        <
        Header >
        <
        img src = { icon }
        alt = "al sama icon"
        className = "header-img" / >
        <
        br / > <
        br / >
        <
        h1 className = "text-facebook-dark" > Enter Your Credentials < /h1><
        br / > <
        br / > <
        div className = "form-group" >
        <
        label > Email < /label>{" "} <
        input type = "email"
        className = "form-control"
        placeholder = "Enter your Email" /
        >
        <
        br / > <
        br / >
        <
        label > Password < /label>{" "} <
        input type = "Password"
        className = "form-control"
        placeholder = "Enter your Password" /
        >

        <
        br / >
        <
        br / >


        <
        Button text = "LOGIN"
        classes = { "btn-primary text-light" }
        onClick = { handleLogin } > { " " } <
        /Button>  

        <
        Button text = "REGISTER"
        classes = { "btn-primary text-light" } > { " " } <
        /Button> < /
        div > { " " }

        <
        /Header>   < /
        div >

    );
}