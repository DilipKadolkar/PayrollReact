import React from 'react'

export default function Title({ text, classes }) {
    return ( <
        h1 className = { `title ${classes}` } > { text } < /h1>
    )
}