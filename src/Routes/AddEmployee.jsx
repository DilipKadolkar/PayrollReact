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
    faHome,
    faMoneyBill,
    faIdBadge,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AddEmployee.module.css"; // Import the CSS module

export default function AddEmployee() {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [hireDate, setHireDate] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emergencyContact, setEmergencyContact] = useState(""); // New state for Emergency Contact
    const [reportingManager, setReportingManager] = useState(""); // New state for Reporting Manager
    const [probationPeriod, setProbationPeriod] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [email, setEmail] = useState("");
    const [employeeType, setEmployeeType] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [salary, setSalary] = useState("");
    const [employeeID, setEmployeeId] = useState("");
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
        if (selectedCompany && firstName) {
            try {
                const response = await fetch("http://localhost:8080/api/employees", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        company: selectedCompany,
                        firstName,
                        lastName,
                        fatherName,
                        birthDate,
                        hireDate,
                        gender,
                        phoneNumber,
                        emergencyContact, // Include Emergency Contact
                        reportingManager, // Include Reporting Manager
                        probationPeriod,
                        aadharNumber,
                        email,
                        employeeType,
                        addressLine1,
                        addressLine2,
                        city,
                        state,
                        zipCode,
                        salary,
                        employeeID
                    }),
                });

                if (response.ok) {
                    alert("Employee added successfully");
                    setSelectedCompany("");
                    setFirstName("");
                    setLastName("");
                    setFatherName("");
                    setBirthDate("");
                    setHireDate("");
                    setGender("");
                    setPhoneNumber("");
                    setEmergencyContact(""); // Reset Emergency Contact
                    setReportingManager(""); // Reset Reporting Manager
                    setProbationPeriod("");
                    setAadharNumber("");
                    setEmail("");
                    setEmployeeType("");
                    setAddressLine1("");
                    setAddressLine2("");
                    setCity("");
                    setState("");
                    setZipCode("");
                    setSalary("");
                    setEmployeeId("");
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
placeholder = "Enter first name"
value = { firstName }
onChange = {
    (e) => setFirstName(e.target.value)
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
placeholder = "Enter last name"
value = { lastName }
onChange = {
    (e) => setLastName(e.target.value)
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
value = { hireDate }
onChange = {
    (e) => setHireDate(e.target.value)
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
value = { phoneNumber }
onChange = {
    (e) => setPhoneNumber(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faPhone }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter emergency contact number"
value = { emergencyContact }
onChange = {
    (e) => setEmergencyContact(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faUserFriends }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter reporting manager"
value = { reportingManager }
onChange = {
    (e) => setReportingManager(e.target.value)
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
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faHome }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter address line 1"
value = { addressLine1 }
onChange = {
    (e) => setAddressLine1(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faHome }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Enter address line 2"
value = { addressLine2 }
onChange = {
    (e) => setAddressLine2(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faHome }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "City"
value = { city }
onChange = {
    (e) => setCity(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faHome }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "State"
value = { state }
onChange = {
    (e) => setState(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faHome }
className = { styles.icon }
/>{" "} <
input type = "text"
placeholder = "Zipcode"
value = { zipCode }
onChange = {
    (e) => setZipCode(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faMoneyBill }
className = { styles.icon }
/>{" "} <
input type = "number"
placeholder = "Enter salary"
value = { salary }
onChange = {
    (e) => setSalary(e.target.value)
}
className = { styles.employeeInput }
/>{" "} < /
div > { " " } <
    div className = { styles.inputGroup } >
    <
    FontAwesomeIcon icon = { faIdBadge }
className = { styles.icon }
/>{" "} <
input type = "number"
placeholder = "Enter employee ID"
value = { employeeID }
onChange = {
    (e) => setEmployeeId(e.target.value)
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