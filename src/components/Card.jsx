import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, onClick, style, icon }) => {
    return ( <
        div className = "card"
        onClick = { onClick }
        style = { style } >
        <
        FontAwesomeIcon icon = { icon }
        size = "2x"
        className = "icon" / >
        <
        h2 > { title } < /h2>{" "} < /
        div >
    );
};

export default Card;