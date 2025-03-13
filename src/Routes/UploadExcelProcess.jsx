import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faBuilding, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import styles from "./UploadExcelProcess.module.css"; // Import the CSS module

export default function UploadExcelProcess() {
    const [file, setFile] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [companies, setCompanies] = useState([]);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log('Selected file:', event.target.files[0]);
    };


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
        console.log('Selected company:', event.target.value);
    };


    return ( <
        Container className = { styles.employeeInfoContainer } >
        <
        Row >
        <
        Col >
        <
        h1 >
        <
        FontAwesomeIcon icon = { faBuilding }
        /> Please select company and upload excel < /
        h1 > <
        br / >
        <
        Form.Group controlId = "companySelect"
        className = { styles.companyDropdown } >
        <
        Form.Control as = "select"
        value = { selectedCompany }
        onChange = { handleCompanyChange } >
        <
        option value = "" > Select a company < /option> {companies.map((company, index) => ( <
        option key = { index }
        value = { company.companyName } > { company.companyName } <
        /option>
    ))
} <
/Form.Control> < /
Form.Group > {
        selectedCompany && ( <
            >
            <
            Form.Group controlId = "custom-file"
            className = { styles.fileInput } >
            <
            Form.Control type = "file"
            label = "Upload Excel File"
            accept = ".xlsx, .xls"
            onChange = { handleFileChange }
            ref = { fileInputRef } // Attach the ref to the file input
            /> < /
            Form.Group > {
                file && ( <
                    div className = { styles.fileInfo } >
                    <
                    h3 >
                    <
                    FontAwesomeIcon icon = { faFileExcel }
                    /> Uploaded File: {file.name} < /
                    h3 > <
                    Button onClick = { handleUpload }
                    className = { styles.uploadButton } >
                    <
                    FontAwesomeIcon icon = { faUpload }
                    /> Upload to Server < /
                    Button > <
                    /div>
                )
            } <
            />
        )
    } <
    /Col> < /
Row > <
    /Container>
);
}