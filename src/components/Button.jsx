import React from 'react'

export default function Button({ classes, text, onClick }) {
    return ( <
        button className = { `btn ${classes}` }
        onClick = { onClick } > { text } < /button>
    )
}