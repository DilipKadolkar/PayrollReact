import React, { useState } from 'react';
import styles from './AddCompany.module.css'; // Import the CSS module
import {API_BASE_URL} from '../constants';

export default function AddCompany() {
    const [newCompanyName, setNewCompanyName] = useState('');

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        if (newCompanyName) {
            try {
                const response = await fetch(API_BASE_URL + '/addCompany', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: newCompanyName }),
                });

                if (response.ok) {
                    alert('Company added successfully');
                    setNewCompanyName('');
                } else {
                    alert('Error adding company');
                }
            } catch (error) {
                console.error('Error adding company:', error);
                alert('Error adding company');
            }
        } else {
            alert('Please enter a company name');
        }
    };

    return ( <
        div className = { styles.displayContentWhenNavbar } >
        <
        div className = { styles.addCompanyContainer } >
        <
        h1 className = { styles.heading } > Add Company < /h1> <
        form onSubmit = { handleFormSubmit }
        className = { styles.addCompanyForm } >
        <
        input type = "text"
        placeholder = "Enter company name"
        value = { newCompanyName }
        onChange = {
            (e) => setNewCompanyName(e.target.value)
        }
        className = { styles.companyInput }
        /> <
        button type = "submit"
        className = { styles.submitButton } > Submit < /button> < /
        form > <
        /div> < /
        div >
    );
}