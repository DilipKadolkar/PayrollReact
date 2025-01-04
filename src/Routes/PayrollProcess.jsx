import React from 'react';
import Card from '../components/Card'; // Make sure this path is correct based on your project structure

export default function PayrollProcess() {
    const handleCardClick = (title) => {
        alert(`You clicked on ${title}`);
    };

    return ( <
        div className = "displayContentWhenNavbar" >
        <
        Card title = "Add employee"
        onClick = {
            () => handleCardClick('Add employee')
        }
        /> <
        Card title = "Salary Breakdown"
        onClick = {
            () => handleCardClick('Salary Breakdown')
        }
        /> <
        Card title = "Tax Information"
        onClick = {
            () => handleCardClick('Tax Information')
        }
        /> < /
        div >
    );
}