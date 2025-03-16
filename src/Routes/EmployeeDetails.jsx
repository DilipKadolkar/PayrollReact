import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import styles from './EmployeeDetails.module.css'; // Import the CSS module
import SearchBox from '../functions/SearchBox.jsx'; // Import the SearchBox component

export default function EmployeeDetails() {
    const [activeTab, setActiveTab] = useState('profile'); // State to manage active tab
    const [employeeData, setEmployeeData] = useState(null); // State to store employee data

    const handleSearch = (data) => {
        setEmployeeData(data);
        setActiveTab('profile'); // Set "Profile" as the active tab
    };

    return (
        <div className={styles.displayContentWhenNavbar}>
            {/* Search Box */}
            <SearchBox onSearch={handleSearch} />

            {/* Navbar */}
            <Navbar bg="primary" variant="dark" expand="lg" style={{ marginTop: '200px', marginLeft: '175px' }}>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#profile"
                                active={activeTab === 'profile'}
                                onClick={() => setActiveTab('profile')}
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#000',
                                    borderRadius: '4px',
                                    margin: '0 20px 10px 0',
                                }}
                            >
                                Profile
                            </Nav.Link>
                            <Nav.Link
                                href="#bank"
                                active={activeTab === 'bank'}
                                onClick={() => setActiveTab('bank')}
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#000',
                                    borderRadius: '4px',
                                    margin: '0 20px 10px 0',
                                }}
                            >
                                Bank
                            </Nav.Link>
                            <Nav.Link
                                href="#salary"
                                active={activeTab === 'salary'}
                                onClick={() => setActiveTab('salary')}
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#000',
                                    borderRadius: '4px',
                                    margin: '0 20px 10px 0',
                                }}
                            >
                                Salary
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Profile Section */}
            {activeTab === 'profile' && employeeData && (
                <Container
                    style={{
                        marginTop: '80px', // Adjust this value to move it further down below the navbar
                        height: '500px', // Set a fixed height for the scrollable area
                        overflowY: 'auto', // Enable scrolling for the profile section
                        border: '1px solid #ddd', // Optional: for visibility
                        padding: '20px', // Add padding for spacing
                        borderRadius: '8px', // Add rounded corners
                    }}
                >
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.firstName}
                                onChange={(e) => setEmployeeData({ ...employeeData, firstName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.lastName}
                                onChange={(e) => setEmployeeData({ ...employeeData, lastName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={employeeData.email}
                                onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.phoneNumber}
                                onChange={(e) => setEmployeeData({ ...employeeData, phoneNumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formJobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.jobTitle}
                                onChange={(e) => setEmployeeData({ ...employeeData, jobTitle: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDepartment">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.department}
                                onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formHireDate">
                            <Form.Label>Hire Date</Form.Label>
                            <Form.Control
                                type="date"
                                defaultValue={new Date(employeeData.hireDate).toISOString().split('T')[0]}
                                onChange={(e) => setEmployeeData({ ...employeeData, hireDate: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formSalary">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={employeeData.salary}
                                onChange={(e) => setEmployeeData({ ...employeeData, salary: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddressLine1">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.addressLine1}
                                onChange={(e) => setEmployeeData({ ...employeeData, addressLine1: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddressLine2">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.addressLine2}
                                onChange={(e) => setEmployeeData({ ...employeeData, addressLine2: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.city}
                                onChange={(e) => setEmployeeData({ ...employeeData, city: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.state}
                                onChange={(e) => setEmployeeData({ ...employeeData, state: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formZipCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={employeeData.zipCode}
                                onChange={(e) => setEmployeeData({ ...employeeData, zipCode: e.target.value })}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Container>
            )}
        </div>
    );
}
