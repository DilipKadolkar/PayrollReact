import React, { useState } from 'react';
import styles from './AddEmployee.module.css'; // Import the CSS module

export default function AddEmployee() {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [employeeName, setEmployeeName] = useState('');

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        if (selectedCompany && employeeName) {
            try {
                const response = await fetch('http://localhost:8081/addEmployee', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ company: selectedCompany, name: employeeName }),
                });

                if (response.ok) {
                    alert('Employee added successfully');
                    setSelectedCompany('');
                    setEmployeeName('');
                } else {
                    alert('Error adding employee');
                }
            } catch (error) {
                console.error('Error adding employee:', error);
                alert('Error adding employee');
            }
        } else {
            alert('Please select a company and enter an employee name');
        }
    };

    const companies = ['Company A', 'Company B', 'Company C']; // Example companies

    return ( <
            div className = { styles.displayContentWhenNavbar } >
            <
            div className = { styles.addEmployeeContainer } >
            <
            h1 className = { styles.heading } > Add Employee < /h1> <
            form onSubmit = { handleFormSubmit }
            className = { styles.addEmployeeForm } >
            <
            select value = { selectedCompany }
            onChange = {
                (e) => setSelectedCompany(e.target.value)
            }
            className = { styles.companyDropdown } >
            <
            option value = "" > Select a company < /option> {
            companies.map((company, index) => ( <
                option key = { index }
                value = { company } > { company } < /option>
            ))
        } <
        /select> {
    selectedCompany && ( <
        >
        <
        input type = "text"
        placeholder = "Enter employee name"
        value = { employeeName }
        onChange = {
            (e) => setEmployeeName(e.target.value)
        }
        className = { styles.employeeInput }
        /> <
        button type = "submit"
        className = { styles.submitButton } > Submit < /button> < /
        >
    )
} <
/form> < /
div > <
    /div>
);
}