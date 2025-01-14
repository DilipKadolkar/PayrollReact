import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faBuilding, faFileExcel } from '@fortawesome/free-solid-svg-icons';

export default function UploadExcelProcess() {
    const [file, setFile] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async() => {
        if (file && selectedCompany) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('company', selectedCompany);

            try {
                const response = await fetch('http://localhost:8080/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    alert(`File uploaded successfully for ${selectedCompany}`);
                    navigate('/loggedInPage/payrollProcess'); // Navigate to PayrollProcess page
                } else {
                    alert('Error uploading file');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file');
            }
        } else {
            alert('Please select a company and upload a file');
        }
    };

    const handleCompanyChange = (event) => {
        setSelectedCompany(event.target.value);
        setFile(null); // Clear the uploaded file when the company is changed
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input value
        }
    };

    const companies = ['Company A', 'Company B', 'Company C']; // Example companies

    return ( <
            div className = "employee-info-container displayContentWhenNavbar" >
            <
            h1 > < FontAwesomeIcon icon = { faBuilding }
            /> Please select company and upload excel</
            h1 >
            <
            br / >
            <
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
        /select> {
    selectedCompany && ( <
            >
            <
            input type = "file"
            accept = ".xlsx, .xls"
            onChange = { handleFileChange }
            className = "file-input"
            ref = { fileInputRef } // Attach the ref to the file input
            /> {
            file && ( <
                div className = "file-info" >
                <
                h3 > < FontAwesomeIcon icon = { faFileExcel }
                /> Uploaded File: {file.name}</
                h3 >
                <
                button onClick = { handleUpload }
                className = "upload-button" >
                <
                FontAwesomeIcon icon = { faUpload }
                /> Upload to Server < /
                button > <
                /div>
            )
        } <
        />
)
} <
/div>
);
}