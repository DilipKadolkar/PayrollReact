import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PayrollStatement() {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the list of companies from the API
        const fetchCompanies = async() => {
            try {
                const response = await fetch("http://localhost:8080/api/companies");
                const data = await response.json();
                setCompanies(data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };

        fetchCompanies();
    }, []);

    useEffect(() => {
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        setSelectedMonth(currentMonth);
    }, []);

    const handleCompanyChange = (event) => {
        setSelectedCompany(event.target.value);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleDownload = async() => {
        if (selectedCompany) {
            try {
                const response = await fetch(`http://localhost:8080/downloadExcel?company=${selectedCompany}&month=${selectedMonth}`, {
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
                    a.download = `${selectedCompany}_Payroll_Statement_${selectedMonth}.xlsx`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    alert(`File downloaded successfully for ${selectedCompany}`);
                    navigate('/loggedInPage/payrollProcess'); // Navigate to PayrollProcess page
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

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return ( <
        div className = "payroll-statement-container" >
        <
        h1 > Payroll Statement < /h1> <
        div className = "dropdown-container" >
        <
        select value = { selectedCompany }
        onChange = { handleCompanyChange }
        className = "company-dropdown" >
        <
        option value = "" > Select a company < /option> {companies.map((company, index) => ( <
        option key = { index }
        value = { company.companyName } > { company.companyName } <
        /option>
    ))
} <
/select> <
select value = { selectedMonth }
onChange = { handleMonthChange }
className = "month-dropdown" > {
        months.map((month, index) => ( <
            option key = { index }
            value = { month } > { month } < /option>
        ))
    } <
    /select> < /
div > < br / > <
    button onClick = { handleDownload }
className = "download-button" > Download Excel < /button> < /
div >
);
}