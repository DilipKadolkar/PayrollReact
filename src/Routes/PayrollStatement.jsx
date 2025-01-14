import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PayrollStatement() {
    const [selectedCompany, setSelectedCompany] = useState('');
    const navigate = useNavigate();

    const handleCompanyChange = (event) => {
        setSelectedCompany(event.target.value);
    };

    const handleDownload = async() => {
        if (selectedCompany) {
            try {
                const response = await fetch(`http://localhost:8080/downloadExcel?company=${selectedCompany}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${selectedCompany}_Payroll_Statement.xlsx`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    alert(`File downloaded successfully for ${selectedCompany}`);
                } else {
                    alert('Error downloading file');
                }
            } catch (error) {
                console.error('Error downloading file:', error);
                alert('Error downloading file');
            }
        } else {
            alert('Please select a company');
        }
    };

    const companies = ['Company A', 'Company B', 'Company C']; // Example companies

    return ( <
            div className = "payroll-statement-container displayContentWhenNavbar" >
            <
            h1 > Payroll Statement < /h1> <
            select value = { selectedCompany }
            onChange = { handleCompanyChange }
            className = "company-dropdown" >
            <
            option value = "" > Select a company < /option> {
            companies.map((company, index) => ( <
                option key = { index }
                value = { company } > { company } < /option>
            ))
        } <
        /select> <
    button onClick = { handleDownload }
    className = "download-button" > Download Excel < /button> < /
    div >
);
}