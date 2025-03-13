import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCalendar,
    faPhone,
    faEnvelope,
    faIdCard,
    faBuilding,
    faUserTie,
    faVenusMars,
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AddEmployee.module.css"; // Import the CSS module

export default function AddEmployee() {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [spouseName, setSpouseName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [gender, setGender] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [probationPeriod, setProbationPeriod] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [email, setEmail] = useState("");
    const [employeeType, setEmployeeType] = useState("");
    const [companies, setCompanies] = useState([]);

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

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        if (selectedCompany && employeeName) {
            try {
                const response = await fetch("http://localhost:8080/api/employees", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        company: selectedCompany,
                        firstName: employeeName,
                        lastName: employeeName,
                        spouseName,
                        fatherName,
                        birthDate,
                        joiningDate,
                        gender,
                        contactNumber,
                        probationPeriod,
                        aadharNumber,
                        email: email,
                        employeeType,
                    }),
                });

                if (response.ok) {
                    alert("Employee added successfully");
                    setSelectedCompany("");
                    setEmployeeName("");
                    setSpouseName("");
                    setFatherName("");
                    setBirthDate("");
                    setJoiningDate("");
                    setGender("");
                    setContactNumber("");
                    setProbationPeriod("");
                    setAadharNumber("");
                    setEmail("");
                    setEmployeeType("");
                } else {
                    alert("Error adding employee");
                }
            } catch (error) {
                console.error("Error adding employee:", error);
                alert("Error adding employee");
            }
        } else {
            alert("Please select a company and enter an employee name");
        }
    };

    return ( <
        div className = { styles.addEmployeeWrapper } >
        <
        div className = { styles.displayContentWhenNavbar } >
        <
        div className = { styles.addEmployeeContainer } >
        <
        h1 className = { styles.heading } > Add Employee < /h1>{" "} <
        form onSubmit = { handleFormSubmit }
        className = { styles.addEmployeeForm } >
        <
        div className = { styles.inputGroup } >
        <
        FontAwesomeIcon icon = { faBuilding }
        className = { styles.icon }
        />{" "} <
        select value = { selectedCompany }
        onChange = {
            (e) => setSelectedCompany(e.target.value)
        }
        className = { styles.companyDropdown } >
        <
        option value = "" > Select a company < /option>{" "} {companies.map((company, index) => ( <
        option key = { index }
        value = { company.companyName } > { company.companyName } <
        /option>
    ))
} <
/select>{" "} < /
div > { " " } <
    div className = { styles.gridContainer } >
    <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faUser }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter employee name"
value = { employeeName }
onChange = {
    (e) => setEmployeeName(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faUser }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter spouse name"
value = { spouseName }
onChange = {
    (e) => setSpouseName(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faUser }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter father name"
value = { fatherName }
onChange = {
    (e) => setFatherName(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faCalendar }
className = { styles.icon }
/>{" "} <
label className = { styles.label } > Birth Date < /label>{" "} <
input type = "date"
value = { birthDate }
onChange = {
    (e) => setBirthDate(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faCalendar }
className = { styles.icon }
/>{" "} <
label className = { styles.label } > Joining Date < /label>{" "} <
input type = "date"
value = { joiningDate }
onChange = {
    (e) => setJoiningDate(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.genderContainer } >
    <
    FontAwesomeIcon icon = { faVenusMars }
className = { styles.icon }
/>{" "} <
label >
    <
    input type = "radio"
value = "Male"
checked = { gender === "Male" }
onChange = {
    (e) => setGender(e.target.value)
}
/>
Male { " " } <
/label>{" "} <
label >
    <
    input type = "radio"
value = "Female"
checked = { gender === "Female" }
onChange = {
    (e) => setGender(e.target.value)
}
/>
Female { " " } <
/label>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faPhone }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter contact number"
value = { contactNumber }
onChange = {
    (e) => setContactNumber(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faClock }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter probation period"
value = { probationPeriod }
onChange = {
    (e) => setProbationPeriod(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faIdCard }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter aadhar number"
value = { aadharNumber }
onChange = {
    (e) => setAadharNumber(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faEnvelope }
className = { styles.icon }
/>{" "} <
input type = "email"
placeholder = "Enter email"
value = { email }
onChange = {
    (e) => setEmail(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faUserTie }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter employee type"
value = { employeeType }
onChange = {
    (e) => setEmployeeType(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    /div>{" "} <
button type = "submit"
className = { styles.submitButton } > { " " }
Submit { " " } <
/button>{" "} < /
form > { " " } <
    /div>{" "} < /
div > { " " } <
    /div>
);
}